<template>
  <div class="container">
    <a-card class="general-card" title="设备列表">
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
                <a-form-item field="name" label="设备名">
                  <a-input
                    v-model="searchModel.deviceName"
                    placeholder="请输入设备名"
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
        <template #isDisabled="{ record }">
          <span v-if="record.isDisabled" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ record.isDisabled ? '禁用' : '启用' }}
        </template>
        <template #operations="{ record }">
          <a-button type="text" size="small" @click="onView(record)">
            查看
          </a-button>
          <a-button type="text" size="small" @click="onEdit(record)">
            修改
          </a-button>
          <a-popconfirm content="确认删除?" @ok="onDel(record)">
            <a-button type="text" status="danger" size="small"> 删除 </a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:visible="modelVisible" title="设备管理" @before-ok="onOk">
      <a-form ref="formRef" :model="formData" auto-label-width>
        <a-form-item
          field="name"
          label="设备名称"
          :rules="[{ required: true, message: '设备名称不能为空' }]"
          :validate-trigger="['change', 'blur']"
        >
          <a-input v-model="formData.name" />
        </a-form-item>
        <a-form-item
          field="description"
          label="设备描述"
          :rules="[{ required: true, message: '设备描述不能为空' }]"
          :validate-trigger="['change', 'blur']"
        >
          <a-input v-model="formData.description" />
        </a-form-item>

        <a-form-item
          field="devEui"
          label="Device EUI"
          length="16"
          :rules="[
            { required: true, message: 'Device EUI 不能为空' },
            { length: 16, message: 'Device EUI 长度不正确' },
            { match: /^[0-9a-fA-F]+$/, message: 'Device EUI 格式不正确' },
          ]"
          :validate-trigger="['change', 'blur']"
          :disabled="!!formData.id"
        >
          <a-input v-model="formData.devEui" :max-length="16" show-word-limit>
            <template #append> MSB </template>
          </a-input>
        </a-form-item>

        <a-form-item
          field="deviceProfileId"
          label="设备配置文件"
          :rules="[{ required: true, message: '设备配置文件不能为空' }]"
        >
          <a-select v-model="formData.deviceProfileId" :allow-clear="true">
            <a-option
              v-for="item in deviceProfileList"
              :key="item.id"
              :value="item.id"
              >{{ item.name }}</a-option
            >
          </a-select>
        </a-form-item>

        <a-form-item field="enabled" label="禁用设备">
          <a-switch v-model="formData.isDisabled" />
        </a-form-item>
        <a-form-item field="skipFcntCheck" label="禁用帧计数器验证">
          <a-switch v-model="formData.skipFcntCheck" />
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
  import {
    ChirpStackDeviceProfileService,
    DeviceDto,
    DeviceProfileDto,
    DeviceService,
  } from '@/services/sensor-core';
  import { useRouter } from 'vue-router';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';

  const router = useRouter();

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
      deviceName: '',
    };
  };
  const searchModel = ref(generateSearchModel());

  // 表格
  const tableData = ref<DeviceDto[]>([]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: '设备名称',
      dataIndex: 'name',
    },
    {
      title: '设备描述',
      dataIndex: 'description',
    },
    {
      title: '设备类型',
      dataIndex: 'profileName',
    },
    {
      title: 'EUI',
      dataIndex: 'devEui',
    },
    // {
    //   title: '状态',
    //   dataIndex: 'online',
    //   slotName: 'online',
    // },
    {
      title: '状态',
      dataIndex: 'isDisabled',
      slotName: 'isDisabled',
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
      const { items, totalCount } = await DeviceService.listAll({
        ...pagination,
        ...searchModel.value,
      });
      tableData.value = items as DeviceDto[];
      pagination.total = totalCount;
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

  const deviceProfileList = ref<DeviceProfileDto[]>([]);
  const getDeviceProfileList = async () => {
    try {
      deviceProfileList.value =
        await ChirpStackDeviceProfileService.getDeviceProfileList();
    } catch (err) {
      // you can report use errorHandler or other
    }
  };

  // 初始化
  queryTable();
  getDeviceProfileList();

  const modelVisible = ref(false);
  const formRef = ref();
  const generateFormData = (): DeviceDto => {
    return {
      name: '',
      description: '',
      deviceProfileId: '',
      devEui: '',
      deviceProfileName: '',
      isDisabled: false,
      id: undefined,
      skipFcntCheck: false,
    };
  };
  const formData = ref(generateFormData());

  const onAdd = async () => {
    // router.push({ name: 'DeviceDetail' });
    modelVisible.value = true;
    formData.value = generateFormData();
  };

  const onEdit = async (record: any) => {
    modelVisible.value = true;
    formData.value = { ...record };
  };
  const onOk = async () => {
    const errors: Record<string, ValidatedError> | undefined =
      await formRef.value.validate();
    if (!errors) {
      formData.value.deviceProfileName =
        deviceProfileList.value.find(
          (n) => n.id === formData.value.deviceProfileId,
        )?.name || '';
      await DeviceService.saveDevice({
        inputDto: { ...formData.value },
      });
      queryTable();
      return true;
    }
    return false;
  };

  const onDel = async (record: any) => {
    await DeviceService.deleteById({ id: record.id });
    queryTable();
  };

  const onView = (record: any) => {
    router.push({ name: 'DeviceDetail', query: { id: record.id } });
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 20px;
  }
</style>
