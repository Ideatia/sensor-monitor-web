<template>
  <div class="container">
    <a-card class="general-card" title="温湿度日报表">
      <a-row>
        <!--       搜索表单       -->
        <a-col :flex="1">
          <a-form
            :model="searchModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item field="name" label="日期">
                  <a-date-picker
                    v-model="searchModel.date"
                    style="width: 100%"
                    placeholder="请输入日期"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item field="name" label="温湿度设备">
                  <a-select
                    v-model="searchModel.deviceId"
                    placeholder="请选择温湿度设备"
                    allow-clear
                  >
                    <a-option
                      v-for="item in deviceList"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.deviceName }}</a-option
                    >
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>

        <!--       搜索按钮       -->
        <a-divider style="height: 32px" direction="vertical" />
        <a-col flex="86px" style="text-align: right">
          <a-space direction="horizontal" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              搜索
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              重置
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary" @click="onExportToExcel">
              <template #icon>
                <icon-plus />
              </template>
              导出Excel
            </a-button>
          </a-space>
        </a-col>
        <a-col
          :span="12"
          style="display: flex; align-items: center; justify-content: end"
        >
          <a-button
            type="text"
            :disabled="tableData.length === 0"
            @click="toggleChart()"
          >
            <template #icon>
              <icon-sync />
            </template>
            {{ showChart ? '切换表格' : '切换图表' }}
          </a-button>
        </a-col>
      </a-row>

      <a-table
        v-if="!showChart"
        row-key="id"
        :loading="loading"
        :pagination="false"
        :columns="columns"
        :data="tableData"
      >
      </a-table>

      <a-card
        v-else
        class="general-card"
        :header-style="{ paddingBottom: '16px' }"
      >
        <Chart style="width: 100%; height: 370px" :option="chartOption" />
      </a-card>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref, toRaw } from 'vue';
  import { Message, TableColumnData } from '@arco-design/web-vue';
  import { Pagination } from '@/types/global';
  import useLoading from '@/hooks/loading';
  import {
    DeviceService,
    DeviceTsKvService,
    ListDeviceOutputDto,
  } from '@/services';
  import dayjs from 'dayjs';
  import ExcelJS from 'exceljs';
  import FileSaver from 'file-saver';

  import useChartOption from '@/hooks/chart-option';

  import _ from 'lodash';

  const { loading, setLoading } = useLoading(false);

  // 分页
  const basePagination: Pagination = {
    pageNumber: 1,
    pageSize: 20,
  };
  const pagination = reactive({
    ...basePagination,
  });

  // 搜索
  const generateSearchModel = () => {
    return {
      date: '',
      deviceId: '',
    };
  };
  const searchModel = ref(generateSearchModel());

  // 表格
  const tableData = ref<Record<string, any>[]>([]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: '时间',
      dataIndex: 'dateHour',
    },
    {
      title: '温度',
      dataIndex: 'temperature',
    },
    {
      title: '湿度',
      dataIndex: 'humidity',
    },
  ]);

  // 查询表格数据
  const queryTable = async () => {
    const { date, deviceId } = searchModel.value;

    if (!date || !deviceId) {
      Message.error({
        content: '请选择日期和温湿度设备',
      });
      return;
    }
    setLoading(true);
    try {
      const result = await DeviceTsKvService.getDeviceTsKvRecordData({
        unPage: true,
        deviceId: deviceId as unknown as number,
        startTime: dayjs(date).startOf('d').toISOString(),
        endTime: dayjs(date).endOf('d').toISOString(),
      });
      // 按照小时聚合数据
      const groups = _.groupBy(
        result.items
          ?.filter((n) => n.key === 'humidity' || n.key === 'temperature')
          .map((n) => ({
            ...n,
            time: dayjs(n.upTime).format('HH:00'),
            upTime: dayjs(n.upTime).toDate().getTime(),
          })),
        'time',
      );

      // 处理整点数据
      tableData.value = Array.from({ length: 24 }, (v, k) => k).map((n) => {
        const dateHour = `${String(n).padStart(2, '0')}:00`;
        const humidityValue = groups[dateHour]
          ?.filter((item) => item.key === 'humidity')
          .sort((a, b) => b.upTime - a.upTime)[0];
        const temperatureValue = groups[dateHour]
          ?.filter((item) => item.key === 'temperature')
          .sort((a, b) => b.upTime - a.upTime)[0];
        return {
          dateHour,
          upTime: humidityValue?.upTime,
          humidity: humidityValue?.value || '--',
          temperature: temperatureValue?.value || '--',
        };
      });
    } catch (err: any) {
      Message.error({
        content: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // 搜索表单按钮事件
  const search = () => {
    pagination.pageNumber = 1;
    queryTable();
  };
  const reset = () => {
    searchModel.value = generateSearchModel();
  };

  const deviceList = ref<ListDeviceOutputDto[]>([]);
  const queryDeviceList = async () => {
    setLoading(true);
    try {
      deviceList.value = await DeviceService.listAll({
        deviceType: 'Temperature_Humidity_Profile',
      });
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  // 初始化
  queryDeviceList();

  const onExportToExcel = async () => {
    if (tableData.value.length === 0) {
      Message.error({
        content: '请查询数据后导出！',
      });
      return;
    }
    // 初始化
    const workbook = new ExcelJS.Workbook();
    workbook.created = new Date();
    const workSheet = workbook.addWorksheet('Sheet1');

    // 数据
    workSheet.columns = [
      {
        header: '时间',
        key: 'upTime',
        width: 20,
        alignment: { vertical: 'middle', horizontal: 'center' },
      },
      { header: '温度（℃）', key: 'temperature', width: 30 },
      { header: '湿度（%）.', key: 'humidity', width: 30 },
    ];

    workSheet.addRows(
      toRaw(tableData.value).map((n) => {
        const { temperature, humidity } = n;

        return {
          ...n,
          temperature: _.isNaN(parseFloat(temperature))
            ? temperature
            : parseFloat(temperature),
          humidity: _.isNaN(parseFloat(humidity))
            ? humidity
            : parseFloat(humidity),
          upTime: `${dayjs(searchModel.value.date).format('YYYY-MM-DD')} ${
            n.dateHour
          }`,
        };
      }),
    );

    // 配置
    workSheet.getColumn('upTime').alignment = {
      vertical: 'middle',
      horizontal: 'center',
    };
    workSheet.getColumn('temperature').alignment = {
      vertical: 'middle',
      horizontal: 'center',
    };
    workSheet.getColumn('humidity').alignment = {
      vertical: 'middle',
      horizontal: 'center',
    };

    // 下载
    const buffer = await workbook.xlsx.writeBuffer();
    FileSaver.saveAs(
      new Blob([buffer]),
      `温湿度日报表(${dayjs(searchModel.value.date).format(
        'YYYY-MM-DD',
      )})_${Date.now()}.xlsx`,
    );
  };

  const showChart = ref(false);

  const toggleChart = () => {
    showChart.value = !showChart.value;
  };

  const { chartOption } = useChartOption((isDark) => {
    return {
      grid: {
        left: '50',
        right: '50',
        top: '40',
        // bottom: '100',
      },
      legend: {
        bottom: 0,
        icon: 'circle',
        textStyle: {
          color: '#4E5969',
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     magicType: { show: true, type: ['line', 'bar'] },
      //     restore: { show: true },
      //     saveAsImage: { show: true },
      //   },
      // },
      xAxis: {
        type: 'category',
        data: tableData.value.map((n) => n.dateHour),
        axisTick: {
          alignWithLabel: true,
        },
        boundaryGap: false,
      },
      yAxis: [
        {
          type: 'value',
          name: '温度',
          alignTicks: true,
          axisLine: {
            show: true,
          },
          axisLabel: {
            formatter: '{value} °C',
          },
        },
        {
          type: 'value',
          name: '湿度',
          alignTicks: true,
          max: 100,
          min: 10,
          axisLine: {
            show: true,
          },
          axisLabel: {
            formatter: '{value} %',
          },
        },
      ],
      series: [
        {
          name: '温度',
          data: tableData.value.map((n) => n.temperature),
          type: 'line',
          smooth: true,
          showSymbol: false,
          color: isDark ? '#3D72F6' : '#246EFF',
          symbol: 'circle',
          symbolSize: 10,
          emphasis: {
            focus: 'series',
            itemStyle: {
              borderWidth: 2,
              borderColor: '#E0E3FF',
            },
          },
          // markPoint: {
          //   data: [
          //     { type: 'max', name: 'Max' },
          //     { type: 'min', name: 'Min' },
          //   ],
          // },
        },
        {
          name: '湿度',
          data: tableData.value.map((n) => n.humidity),
          type: 'line',
          yAxisIndex: 1,
          smooth: true,
          showSymbol: false,
          color: isDark ? '#A079DC' : '#00B2FF',
          symbol: 'circle',
          symbolSize: 10,
          emphasis: {
            focus: 'series',
            itemStyle: {
              borderWidth: 2,
              borderColor: '#E2F2FF',
            },
          },
          // markPoint: {
          //   data: [
          //     { type: 'max', name: 'Max' },
          //     { type: 'min', name: 'Min' },
          //   ],
          // },
        },
      ],
    };
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 20px;
  }
</style>
