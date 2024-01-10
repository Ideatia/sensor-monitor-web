<template>
  <div class="container">
    <a-card class="general-card" title="设备列表">
      <template #extra>
        <a-switch
          :default-checked="true"
          type="round"
          checked-color="#165DFF"
          unchecked-color="#165DFF"
        >
          <template #checked> 列表 </template>
          <template #unchecked> 图形 </template>
        </a-switch>
      </template>
      <a-row>
        <!--   搜索表单  -->
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
      <a-row :gutter="8">
        <!--       搜索表单       -->
        <a-col :flex="3" class="card-area-tree">
          <a-card title="区域管理" :bordered="false">
            <template #extra>
              <a-link v-if="selectedArea.length > 0" @click="clearSelected()"
                >清除选择</a-link
              ><a-link @click="onAdd()">添加</a-link></template
            >
            <a-tree
              v-model:selected-keys="selectedArea"
              :data="areaTreeData"
              :show-line="false"
              @select="queryData"
            >
              <template #title="nodeData">
                <div class="tree-title">{{ nodeData.title }}</div>
              </template>
              <!-- <template #switcher-icon="nodeData, { isLeaf }">
                <IconDown v-if="!isLeaf" />
                <IconHome v-else-if="isLeaf && nodeData.room" />
                <IconDriveFile v-else />
              </template> -->
              <template #extra="nodeData">
                <a-row style="justify-content: flex-end; flex: 1">
                  <IconPlus
                    v-if="!nodeData.raw.room"
                    class="tree-action"
                    @click="onAdd(nodeData)"
                  />
                  <IconEdit class="tree-action" @click="onEdit(nodeData)" />
                  <a-popconfirm
                    content="确认删除?删除区域后，关联的设备会回到设备列表"
                    type="warning"
                    @ok="onDel(nodeData)"
                  >
                    <IconDelete class="tree-action icon-del" />
                  </a-popconfirm>
                </a-row>
              </template>
            </a-tree>
          </a-card>
        </a-col>
        <a-col flex="9" style="text-align: right">
          <a-table
            v-model:selectedKeys="selectedDevices"
            row-key="id"
            :loading="loading"
            :pagination="pagination"
            :columns="columns"
            :data="tableData"
            :bordered="false"
            :row-selection="rowSelection"
            :draggable="draggable"
            @page-change="onPageChange"
            @change="onTableChange"
          >
            <template #online="{ record }">
              <span v-if="!record.online" class="circle"></span>
              <span v-else class="circle pass"></span>
              {{ record.online ? '在线' : '离线' }}
            </template>
            <template #operations="{ record }">
              <a-button type="text" size="small" @click="onView(record)">
                查看
              </a-button>
              <!-- <a-popconfirm content="确认删除?" @ok="onUnbindArea(record)">
                <a-button type="text" status="danger" size="small">
                  解绑
                </a-button>
              </a-popconfirm> -->
            </template>
            <template #pagination-left>
              <a-col :flex="1">
                <a-row style="padding: 0 10px">
                  <a-link
                    v-if="operateMode !== 'none'"
                    @click="onTableCommand()"
                  >
                    取消
                  </a-link>
                  <template v-else>
                    <a-link @click="onTableCommand('bindDevice')">选择</a-link>
                    <a-link
                      v-if="selectedArea.length > 0"
                      @click="onTableCommand('sortDevice')"
                      >排序</a-link
                    >
                  </template>

                  <a-link
                    v-if="selectedDevices.length > 0"
                    @click="showDeviceAreaSelectModal"
                    >移动设备
                  </a-link>
                  <a-link
                    v-if="selectedDevices.length > 0"
                    @click="onUnbindArea()"
                    >解绑区域</a-link
                  >
                </a-row>
              </a-col>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </a-card>
    <!-- 编辑、添加区域 -->
    <a-modal
      v-model:visible="deviceAreaFormData.visible"
      :title="deviceAreaFormData?.id ? '编辑区域' : '添加区域'"
      @before-ok="onOk"
    >
      <a-form ref="deviceAreaFormDataRef" :model="deviceAreaFormData">
        <a-form-item
          field="areaName"
          label="区域名称"
          :rules="[{ required: true, message: '姓名不能为空' }]"
          :validate-trigger="['change', 'blur']"
        >
          <a-input v-model="deviceAreaFormData.areaName" />
        </a-form-item>

        <a-form-item field="assignedRoleIds" label="父节点">
          <a-tree-select
            v-model="deviceAreaFormData.parentId"
            :allow-search="true"
            :allow-clear="true"
            :data="areaTreeDataWithoutRoom"
            placeholder="请选择 ..."
          ></a-tree-select>
        </a-form-item>
        <a-form-item
          field="sortIndex"
          label="排序号"
          :rules="[{ required: true, message: '排序号不能为空' }]"
          :validate-trigger="['change', 'blur']"
        >
          <a-input v-model="deviceAreaFormData.sortIndex" />
        </a-form-item>
        <a-form-item
          field="room"
          label="是否房间"
          :disabled="!!deviceAreaFormData?.id"
          :rules="[{ required: true, message: '排序号不能为空' }]"
          :validate-trigger="['change', 'blur']"
        >
          <a-switch v-model="deviceAreaFormData.room" />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 选择区域 -->
    <a-modal
      v-model:visible="deviceAreaSelectModelVisible"
      title="选择区域"
      @before-ok="onBindArea()"
    >
      <a-tree-select
        v-model="bindDeviceAreaSelected"
        :allow-search="true"
        :allow-clear="true"
        :data="areaTreeRoomData"
        placeholder="请选择 ..."
        style="width: 300px"
      ></a-tree-select>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import useLoading from '@/hooks/loading';
  import {
    DeviceAreaDto,
    DeviceAreaInputDto,
    DeviceAreaService,
    DeviceListDto,
    DeviceService,
    UpdateDeviceAreaInputDto,
  } from '@/services/sensor-core';
  import { Pagination } from '@/types/global';
  import {
    Message,
    TableColumnData,
    TableDraggable,
    TableRowSelection,
    ValidatedError,
  } from '@arco-design/web-vue';
  import { IconDriveFile, IconHome } from '@arco-design/web-vue/es/icon';
  import _ from 'lodash';
  import { h, computed, reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';

  /** 区域树列表 */
  type IDeviceTree = {
    children: IDeviceTree[];
    title: string;
    key: string | number;
    raw: DeviceAreaDto;
  };

  /** 列表转树 */
  function listToTree(
    list: DeviceAreaDto[],
    parentId: string | number = '0',
    roomMode: boolean | undefined = undefined,
  ): IDeviceTree[] | undefined {
    const childNodes = list.filter((item) => item.parentId === parentId);

    if (childNodes.length === 0) return undefined;

    return childNodes.map((item) => {
      let disabled: boolean | undefined = false;
      if (!_.isNil(roomMode)) {
        disabled = roomMode ? !item.room : item.room;
      }

      return {
        key: item.id,
        title: item.areaName ?? item.id,
        id: item.id,
        raw: item,
        disabled,
        icon: () => (item.room ? h(IconHome) : h(IconDriveFile)),
        children: listToTree(list, item.id as string, roomMode),
      };
    }) as IDeviceTree[];
  }

  const router = useRouter();

  const { loading, setLoading } = useLoading(false);

  type IOperateMode = 'none' | 'bindDevice' | 'sortDevice';
  // 当前页面的操作模式
  const operateMode = ref<IOperateMode>('none');

  // 分页
  const basePagination: Pagination = {
    pageNumber: 1,
    pageSize: 3,
    showTotal: true,
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
  const tableData = ref<DeviceAreaDto[]>([]);

  const selectedDevices = ref([]);
  const rowSelection = computed<TableRowSelection | undefined>(() =>
    operateMode.value === 'bindDevice'
      ? {
          type: 'checkbox',
          showCheckedAll: true,
          onlyCurrent: false,
        }
      : undefined,
  );

  const draggable = computed<TableDraggable | undefined>(() =>
    operateMode.value === 'sortDevice'
      ? { type: 'handle', width: 40 }
      : undefined,
  );

  const columns = computed<TableColumnData[]>(() => [
    {
      title: '设备名称',
      dataIndex: 'name',
    },
    {
      title: '设备类型',
      dataIndex: 'profileName',
    },
    {
      title: '设备描述',
      dataIndex: 'description',
    },
    {
      title: 'EUI',
      dataIndex: 'devEui',
    },
    {
      title: '状态',
      dataIndex: 'online',
      slotName: 'online',
    },
    {
      title: '操作',
      slotName: 'operations',
    },
  ]);

  // 区域树变量

  const genAreaFormData = () => {
    return {
      visible: false,
      sortIndex: undefined,
      areaName: undefined,
      parentId: undefined,
      id: undefined,
      room: false,
    };
  };

  // 区域
  const areaData = ref<DeviceAreaDto[]>([]);
  const areaTreeData = computed(() => listToTree(areaData.value, '0'));
  const areaTreeRoomData = computed(() =>
    listToTree(areaData.value, '0', true),
  );
  const areaTreeDataWithoutRoom = computed(() =>
    listToTree(areaData.value, '0', false),
  );

  const selectedArea = ref([]);

  // 表单控制
  const deviceAreaFormDataRef = ref();
  // 表单数据
  const deviceAreaFormData = ref<
    UpdateDeviceAreaInputDto & {
      visible: boolean;
      sortIndex?: string;
      parentId?: string;
    }
  >(genAreaFormData());

  const deviceAreaSelectModelVisible = ref(false);
  const bindDeviceAreaSelected = ref<string | undefined>();

  // 查询表格数据
  const queryData = async () => {
    setLoading(true);
    try {
      const deviceResult = await DeviceAreaService.getDeviceListByArea({
        ...pagination,
        ...searchModel.value,
        areaId: selectedArea.value.length
          ? (selectedArea.value.join() as string)
          : undefined,
      });

      tableData.value = deviceResult.items as DeviceAreaDto[];

      pagination.total = deviceResult.totalCount;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const queryTree = async () => {
    const areaResult = await DeviceAreaService.getAllDeviceArea();
    areaData.value = areaResult.items as DeviceAreaDto[];
  };

  // 分页
  const onPageChange = (pageNumber: number) => {
    pagination.pageNumber = pageNumber;
    queryData();
  };
  // 表格变化
  const onTableChange = (_data: any) => {
    if (operateMode.value === 'sortDevice') {
      DeviceAreaService.updateAreasDeviceSort({
        input: _data.map((d: DeviceListDto, index: number) => ({
          index:
            pagination.pageNumber * (pagination.pageSize ?? 10) + (index + 1),
          deviceId: d.id,
        })),
      });
      tableData.value = _data;
    }
  };

  // 搜索表单按钮事件
  const search = () => {
    pagination.pageNumber = 1;
    queryData();
  };
  const reset = () => {
    searchModel.value = generateSearchModel();
  };

  const clearSelected = () => {
    selectedArea.value = [];
    queryData();
  };

  const onTableCommand = (cmd: IOperateMode = 'none') => {
    // switch (cmd) {
    //   case 'sortDevice':
    //     break;
    //   case 'bindDevice':
    //     operateMode.value = 'none';
    //     break;
    //   default:
    //     selectedDevices.value = [];
    //     operateMode.value = 'none';
    //     break;
    // }

    selectedDevices.value = [];
    operateMode.value = cmd;
  };

  const showDeviceAreaSelectModal = () => {
    deviceAreaSelectModelVisible.value = true;
    bindDeviceAreaSelected.value = undefined;
  };

  // 绑定设备区域
  const onBindArea = async (record?: DeviceListDto) => {
    if (record) {
      await DeviceAreaService.batchBind({
        input: {
          areaId: bindDeviceAreaSelected.value,
          deviceIdList: [record.id as unknown as number],
        },
      });
    } else {
      await DeviceAreaService.batchBind({
        input: {
          areaId: bindDeviceAreaSelected.value,
          deviceIdList: selectedDevices.value,
        },
      });
      onTableCommand();
    }

    queryData();
    Message.success('操作成功！');
  };
  // 解绑设备区域
  const onUnbindArea = async (record?: DeviceListDto) => {
    if (record) {
      await DeviceAreaService.batchUnBind({
        deviceIds: [record.id],
      });
    } else if (selectedArea.value.length > 0) {
      await DeviceAreaService.batchUnBind({
        deviceIds: selectedDevices.value,
      });
      onTableCommand();
    }
    queryData();
    Message.success('操作成功！');
  };
  // 新增
  const onAdd = (currentNode?: IDeviceTree) => {
    deviceAreaFormData.value = genAreaFormData();
    deviceAreaFormData.value.parentId = currentNode?.raw.id;
    deviceAreaFormData.value.visible = true;
    queryTree();
  };
  // 修改
  const onEdit = (currentNode: IDeviceTree) => {
    deviceAreaFormData.value = {
      ...currentNode.raw,
      sortIndex: currentNode.raw.sortIndex as any,
      visible: true,
    };
    queryTree();
  };
  // 删除
  const onDel = async (record: { id: string }) => {
    await DeviceAreaService.deleteDeviceArea({ areaId: record.id });
    queryTree();
    queryData();
  };
  // 保存
  const onOk = async () => {
    const errors: Record<string, ValidatedError> | undefined =
      await deviceAreaFormDataRef.value.validate();
    if (!errors) {
      if (deviceAreaFormData.value.id) {
        await DeviceAreaService.updateDeviceArea({
          input: deviceAreaFormData.value as UpdateDeviceAreaInputDto,
        });
      } else {
        await DeviceAreaService.createDeviceArea({
          input: deviceAreaFormData.value as DeviceAreaInputDto,
        });
      }

      // queryData();
      queryTree();
      return true;
    }
    return false;
  };

  const onView = (record: any) => {
    router.push({ name: 'DeviceDetail', query: { id: record.id } });
  };

  // 初始化
  queryTree();
  queryData();
</script>

<style lang="less" scoped>
  .container {
    padding: 20px;
  }

  .tree-title {
    // text-overflow: ellipsis;
    // // max-width: 150px;
    // overflow: hidden;
    // white-space: nowrap;
    // min-width: 150px;
    // max-width: 70%;
  }

  .tree-action {
    font-size: 12px;
    color: #3370ff;
    margin: 0 6px;
  }

  .icon-del {
    color: rgba(var(--danger-6));
  }

  .card-area-tree :deep(.arco-card-header) {
    border: none;
    background-color: var(--color-neutral-2);
    padding: 2px 16px;
    height: 40px;
  }
</style>
