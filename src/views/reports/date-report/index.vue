<template>
  <div class="container">
    <a-card class="general-card" :title="config.title">
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
                    v-if="config.aggregation == 'HOUR'"
                    v-model="searchModel.date"
                    style="width: 100%"
                    placeholder="请输入日期"
                  />
                  <a-month-picker
                    v-else-if="config.aggregation == 'DAY'"
                    v-model="searchModel.date"
                    style="width: 100%"
                    placeholder="请输入日期"
                  />
                  <a-year-picker
                    v-else-if="config.aggregation == 'MONTH'"
                    v-model="searchModel.date"
                    style="width: 100%"
                    placeholder="请输入日期"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item field="name" label="设备">
                  <a-select
                    v-model="searchModel.devEui"
                    placeholder="请选择设备"
                    allow-clear
                  >
                    <a-option
                      v-for="item in deviceList"
                      :key="item.id"
                      :value="item.devEui"
                      >{{ item.name }}</a-option
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
        <template #date="{ record }">
          {{ dayjs(record.date).format(config.tableDateFormat) }}
        </template>
      </a-table>

      <a-card
        v-else
        class="general-card"
        :header-style="{ paddingBottom: '16px' }"
      >
        <template v-for="(option, index) in chartOptionList" :key="index">
          <Chart style="width: 100%; height: 370px" :option="option" />
        </template>
      </a-card>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';
  import dayjs, { OpUnitType } from 'dayjs';
  import ExcelJS from 'exceljs';
  import FileSaver from 'file-saver';

  import _ from 'lodash';
  import { DeviceListDto, DeviceService } from '@/services/sensor-core';
  import { useRoute } from 'vue-router';

  interface ReportConfig {
    title: string;
    aggregation: string;
    chartDateFormat: string;
    tableDateFormat: string;
    searchDateUnit: OpUnitType;
  }

  const REPORT_CONFIG: { [key: string]: ReportConfig } = {
    DailyReport: {
      title: '日统计报表',
      aggregation: 'HOUR',
      chartDateFormat: 'HH:mm',
      tableDateFormat: 'YYYY-MM-DD HH:mm',
      searchDateUnit: 'day',
    },
    MonthlyReport: {
      title: '月统计报表',
      aggregation: 'DAY',
      chartDateFormat: 'MM-DD',
      tableDateFormat: 'YYYY-MM-DD',
      searchDateUnit: 'month',
    },
    YearlyReport: {
      title: '年统计报表',
      aggregation: 'MONTH',
      chartDateFormat: 'YYYY-MM',
      tableDateFormat: 'YYYY-MM',
      searchDateUnit: 'year',
    },
  };

  const { loading, setLoading } = useLoading(false);

  const route = useRoute();
  const routeName = route.name as string;

  const config = ref(REPORT_CONFIG[routeName]);

  // 搜索
  const generateSearchModel = () => {
    return {
      date: '',
      devEui: '',
    };
  };
  const searchModel = ref(generateSearchModel());

  /**
   * 数据结构
   * {
   *     "metrics": {
   *         "temperature": {
   *             "name": "温度",
   *             "timestamps": [ "2023-12-29T00:00:00Z"],
   *             "datasets": [{"label": "temperature","data": [ 19.569942 ]}],
   *             "kind": "GAUGE"
   *         }
   *     },
   *     "states": {}
   * }
   */
  interface Dataset {
    label: string;
    data: number[];
  }
  interface MetricsPros {
    name: string;
    timestamps: string[];
    datasets: Dataset[];
    kind: string;
  }
  interface Metrics {
    [key: string]: MetricsPros;
  }
  const metricsData = ref<Metrics>({});

  const columns = computed(() => {
    const cols = [
      {
        title: '时间',
        dataIndex: 'date',
        slotName: 'date',
      },
    ];
    Object.entries(metricsData.value).forEach(([key, value]: [string, any]) => {
      cols.push({
        title: value.name,
        dataIndex: key as string,
        slotName: key as string,
      });
    });
    return cols;
  });

  // 表格
  const tableData = computed(() => {
    const table: any[] = [];
    Object.entries(metricsData.value).forEach(([key, value]: [string, any]) => {
      value.timestamps.forEach((n: any, index: number) => {
        const findIndex = table.findIndex((t) => t.date === n);
        if (findIndex >= 0) {
          table[findIndex][key] = Number.parseFloat(
            value.datasets[0].data[index],
          ).toFixed(2);
        } else {
          table.push({
            date: n,
            [key]: Number.parseFloat(value.datasets[0].data[index]).toFixed(2),
          });
        }
      });
    });

    return table;
  });

  // 查询表格数据
  const queryTable = async () => {
    const { date, devEui } = searchModel.value;

    if (!date || !devEui) {
      Message.error({
        content: '请选择日期和设备',
      });
      return;
    }
    setLoading(true);
    try {
      const { metrics } = await DeviceService.getDeviceMetrics({
        devEui,
        aggregation: config.value.aggregation,
        startTime: dayjs(date)
          .startOf(config.value.searchDateUnit)
          .toISOString(),
        endTime: dayjs(date).endOf(config.value.searchDateUnit).toISOString(),
      });

      metricsData.value = metrics as Metrics;
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
    queryTable();
  };
  const reset = () => {
    searchModel.value = generateSearchModel();
  };

  const deviceList = ref<DeviceListDto[]>([]);
  const queryDeviceList = async () => {
    setLoading(true);
    try {
      const { items } = await DeviceService.listAll({ unPage: true });
      deviceList.value = items as DeviceListDto[];
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

    workSheet.columns = columns.value.map((n) => {
      return {
        header: n.title,
        key: n.dataIndex,
        width: 30,
        alignment: { vertical: 'middle', horizontal: 'center' },
      };
    });
    workSheet.addRows(
      tableData.value.map((n) => {
        return {
          ...n,
          date: dayjs(n.date).format(config.value.tableDateFormat),
        };
      }),
    );

    // 配置
    // workSheet.getColumn('date').numFmt = 'dd/mm/yyyy';

    // 下载
    const buffer = await workbook.xlsx.writeBuffer();
    FileSaver.saveAs(
      new Blob([buffer]),
      `日报表(${dayjs(searchModel.value.date).format(
        'YYYY-MM-DD',
      )})_${Date.now()}.xlsx`,
    );
  };

  const showChart = ref(false);

  const toggleChart = () => {
    showChart.value = !showChart.value;
  };

  const chartOptionList = computed(() => {
    const list: any = [];
    Object.entries(metricsData.value).forEach(
      ([, value]: [string, MetricsPros]) => {
        const { timestamps, name, datasets } = value;
        list.push({
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
            data: timestamps.map((n: any) =>
              dayjs(n).format(config.value.chartDateFormat),
            ),
            axisTick: {
              alignWithLabel: true,
            },
            boundaryGap: false,
          },
          yAxis: [
            {
              type: 'value',
              name,
              alignTicks: true,
              axisLine: {
                show: true,
              },
              axisLabel: {
                formatter: '{value} °C',
              },
            },
          ],
          series: [
            {
              name,
              data: datasets[0].data,
              type: 'line',
              smooth: true,
              showSymbol: false,
              color: '#246EFF',
              symbol: 'circle',
              symbolSize: 10,
              emphasis: {
                focus: 'series',
                itemStyle: {
                  borderWidth: 2,
                  borderColor: '#E0E3FF',
                },
              },
            },
          ],
        });
      },
    );
    return list;
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 20px;
  }
</style>
