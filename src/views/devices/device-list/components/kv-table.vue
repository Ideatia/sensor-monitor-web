<template>
  <div>
    <a-row>
      <!--       搜索表单       -->
      <a-col :flex="1">
        <a-form :model="searchModel" label-align="left">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item field="key" label="设备属性">
                <a-select
                  v-model="searchModel.deviceFieldName"
                  placeholder="请选择设备属性"
                  allow-clear
                >
                  <a-option
                    v-for="item in filedList"
                    :key="item.deviceFieldName"
                    :value="item.deviceFieldName"
                    >{{ item.description }}</a-option
                  >
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item field="key" label="时间范围">
                <a-range-picker
                  v-model="searchModel.time"
                  style="width: 100%"
                />
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
    <a-table
      :loading="loading"
      :pagination="pagination"
      :columns="columns"
      :data="tableData"
      :bordered="false"
      @page-change="onPageChange"
    >
      <template #value="{ record }">
        {{ formatValue(record) }}
      </template>
      <template #upTime="{ record }">
        {{ dayjs(record.upTime).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
  import { computed, PropType, reactive, ref } from 'vue';
  import {
    DeviceLatestMetricDataDto,
    DeviceMetricDataService,
    DeviceMetricListDataDto,
  } from '@/services/sensor-core';
  import { TableColumnData } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';
  import { Pagination } from '@/types/global';

  const props = defineProps({
    deviceId: {
      type: String,
      default: '',
    },
    filedList: {
      type: Array as PropType<DeviceLatestMetricDataDto[]>,
      default() {
        return [];
      },
    },
  });

  const generateSearchModel = () => {
    return {
      deviceFieldName: '',
      time: [Date.now(), Date.now()],
    };
  };

  const searchModel = ref(generateSearchModel());

  const { loading, setLoading } = useLoading(false);

  // 表格
  const tableData = ref<DeviceMetricListDataDto[]>([]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: '属性标识',
      dataIndex: 'deviceFieldName',
      slotName: 'deviceFieldName',
    },
    {
      title: '描述',
      dataIndex: 'description',
      slotName: 'description',
    },
    {
      title: '属性值',
      dataIndex: 'value',
      slotName: 'value',
    },
    {
      title: '时间',
      dataIndex: 'upTime',
      slotName: 'upTime',
    },
  ]);

  // 分页
  const basePagination: Pagination = {
    pageNumber: 1,
    pageSize: 20,
  };
  const pagination = reactive({
    ...basePagination,
  });

  // 查询表格数据
  const queryTable = async () => {
    setLoading(true);
    try {
      const [startTime, endTime] = searchModel.value.time;
      const result =
        await DeviceMetricDataService.getDeviceMetricListDataByDeviceId({
          ...pagination,
          ...searchModel.value,
          startTime: dayjs(startTime).startOf('d').toISOString(),
          endTime: dayjs(endTime).endOf('d').toISOString(),
          deviceId: props.deviceId as unknown as number,
          sorting: 'upTime',
          sortingDirection: 'DESC',
        });
      tableData.value = result.items as DeviceMetricListDataDto[];
      pagination.total = result.totalCount;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  // 分页
  const onPageChange = (pageNumber: number) => {
    pagination.pageNumber = pageNumber;
    queryTable();
  };

  // 搜索表单按钮事件
  const search = () => {
    pagination.pageNumber = 1;
    queryTable();
  };
  const reset = () => {
    searchModel.value = generateSearchModel();
  };

  const formatValue = (record: any) => {
    let result = '';
    switch (record.key) {
      case 'human':
        result = Number(record.value) === 1 ? '有人' : '无人';
        break;
      default:
        result = record.value;
        break;
    }
    return result;
  };
  // 初始化
  queryTable();
</script>

<style scoped lang="less"></style>
