<template>
  <div class="container">
    <a-card class="general-card" title="网关管理">
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
              <a-col :span="8">
                <a-form-item field="name" label="名称">
                  <a-input
                    v-model="searchModel.search"
                    placeholder="请输入名称"
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
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary" @click="onAdd">
              <template #icon>
                <icon-plus />
              </template>
              新增
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :columns="columns"
        :data="tableData"
        :bordered="false"
        @page-change="onPageChange"
      >
        <template #lastSeenAt="{ record }">
          {{
            record.lastSeenAt
              ? dayjs(record.lastSeenAt).format('YYYY-MM-DD HH:mm:ss')
              : '--'
          }}
        </template>
        <template #state="{ record }">
          <span v-if="record.state !== '在线'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ record.state }}
        </template>
        <template #operations="{ record }">
          <a-button type="text" size="small" @click="onEdit(record)">
            修改
          </a-button>
          <a-popconfirm content="确认删除?" @ok="onDel(record)">
            <a-button type="text" status="danger" size="small"> 删除 </a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:visible="modelVisible" title="网关管理" @before-ok="onOk">
      <a-form ref="formRef" :model="formData" auto-label-width>
        <a-form-item
          field="name"
          label="名称"
          :rules="[{ required: true, message: '名称不能为空' }]"
          :validate-trigger="['change', 'blur']"
        >
          <a-input v-model="formData.name" />
        </a-form-item>
        <a-form-item field="description" label="设备描述">
          <a-input v-model="formData.description" />
        </a-form-item>

        <a-form-item
          field="gatewayId"
          label="网关EUI"
          length="16"
          :rules="[
            { required: true, message: '网关 EUI 不能为空' },
            { length: 16, message: '网关 EUI 长度不正确' },
            { match: /^[0-9a-fA-F]+$/, message: '网关 EUI 格式不正确' },
          ]"
          :validate-trigger="['change', 'blur']"
          :disabled="isEdit"
        >
          <a-input
            v-model="formData.gatewayId"
            :max-length="16"
            show-word-limit
          >
            <template #append> MSB </template>
          </a-input>
        </a-form-item>

        <a-form-item field="statsInterval" label="统计间隔（秒）">
          <a-input-number v-model="formData.statsInterval" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref } from 'vue';
  import { TableColumnData } from '@arco-design/web-vue';
  import { Pagination } from '@/types/global';
  import useLoading from '@/hooks/loading';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import dayjs from 'dayjs';
  import {
    CreateGatewaysDataDto,
    DeviceGatewayService,
    GatewayDataItemDto,
  } from '@/services/sensor-core';

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
      search: '',
    };
  };
  const searchModel = ref(generateSearchModel());

  // 表格
  const tableData = ref<GatewayDataItemDto[]>([]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: '状态',
      dataIndex: 'state',
      slotName: 'state',
    },
    {
      title: '名称',
      dataIndex: 'name',
      slotName: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },

    {
      title: '网关ID',
      dataIndex: 'gatewayId',
    },
    // {
    //   title: '统计间隔（秒）',
    //   dataIndex: 'statsInterval',
    // },
    {
      title: '最近上线时间',
      dataIndex: 'lastSeenAt',
      slotName: 'lastSeenAt',
    },
    {
      title: '操作',
      slotName: 'operations',
    },
  ]);

  // 查询表格数据
  const queryTable = async () => {
    setLoading(true);
    try {
      const { result, totalCount } = await DeviceGatewayService.getGatewaysList(
        {
          offset: pagination.pageNumber - 1,
          limit: pagination.pageSize,
          ...searchModel.value,
        },
      );
      tableData.value = result as GatewayDataItemDto[];
      pagination.total = totalCount as unknown as number;
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

  // 初始化
  queryTable();

  // crud
  const modelVisible = ref(false);
  const isEdit = ref(false);

  const formRef = ref();
  const generateFormData = () => {
    return {
      name: '',
      description: '',
      gatewayId: '',
      createdAt: '',
      statsInterval: 30,
    };
  };
  const formData = ref(generateFormData());

  // 新增
  const onAdd = () => {
    isEdit.value = false;
    modelVisible.value = true;
    formData.value = generateFormData();
  };
  // 修改
  const onEdit = async (record: any) => {
    isEdit.value = true;
    modelVisible.value = true;
    const { gateway } = await DeviceGatewayService.getGateways({
      gatewayId: record.gatewayId,
    });
    formData.value = {
      ...(gateway as unknown as any),
      statsInterval: Number(gateway?.statsInterval || 0),
    };
  };
  // 删除
  const onDel = async (record: any) => {
    await DeviceGatewayService.removeGateways({ gatewayId: record.gatewayId });
    queryTable();
  };
  // 保存
  const onOk = async () => {
    const errors: Record<string, ValidatedError> | undefined =
      await formRef.value.validate();
    if (!errors) {
      if (isEdit.value) {
        await DeviceGatewayService.updateGateways({
          gatewayId: formData.value.gatewayId,
          input: {
            gateway: formData.value as unknown as CreateGatewaysDataDto,
          },
        });
      } else {
        await DeviceGatewayService.createGateways({
          input: {
            gateway: formData.value as unknown as CreateGatewaysDataDto,
          },
        });
      }
      queryTable();
      return true;
    }
    return false;
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 20px;
  }
</style>
