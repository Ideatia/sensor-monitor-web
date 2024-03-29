<template>
  <div>
    <a-tree
      v-if="areaTreeData && areaTreeData.length > 0"
      v-model:selected-keys="selectedArea"
      :data="areaTreeData"
      :show-line="false"
      :default-expand-all="true"
      @select="onSelect"
    >
      <template #title="nodeData">
        <div class="tree-title">{{ nodeData.title }}</div>
      </template>
      <!-- <template #switcher-icon="nodeData, { isLeaf }">
                <IconDown v-if="!isLeaf" />
                <IconHome v-else-if="isLeaf && nodeData.room" />
                <IconDriveFile v-else />
              </template> -->
    </a-tree>
  </div>
</template>

<script setup lang="ts">
  import useLoading from '@/hooks/loading';
  import {
    DeviceAreaDto,
    DeviceAreaService,
    DeviceListDto,
  } from '@/services/sensor-core';
  import { TreeNodeData } from '@arco-design/web-vue';
  import {
    IconDriveFile,
    IconHome,
    IconCommon,
  } from '@arco-design/web-vue/es/icon';
  import _ from 'lodash';
  import { computed, h, ref, toRaw } from 'vue';

  /** 区域树列表 */
  export type IDeviceTree = {
    children: IDeviceTree[];
    title: string;
    key: string | number;
    raw: DeviceAreaDto | DeviceListDto;
  };
  /** 列表转树 */
  const listToTree = (
    list: DeviceAreaDto[],
    parentId: string | number = '0',
    devices: DeviceListDto[] | undefined = undefined,
  ): IDeviceTree[] | undefined => {
    let childNodes = list.filter((item) => item.parentId === parentId);

    if (devices) {
      childNodes = childNodes.concat(
        devices
          .filter((item) => item.areaId === parentId)
          .map((item) => ({
            key: item.id,
            areaName: item.name ?? item.id,
            id: item.id,
            raw: item,
            isDevice: true,
          })),
      );
    }

    if (childNodes.length === 0) return undefined;

    return childNodes.map((item: any) => {
      // const disabled: boolean | undefined = false;

      // if (!_.isNil(roomMode)) {
      //   disabled = roomMode ? !item.room : item.room;
      // }
      const icon = () => {
        if (item.isDevice) {
          return h(IconCommon);
        }
        if (item.room) {
          return h(IconHome);
        }

        return h(IconDriveFile);
      };
      return {
        key: item.id,
        title: item.areaName ?? item.id,
        id: item.id,
        raw: item,
        // disabled,
        icon,
        // selectable: item.isDevice === true,
        children: listToTree(list, item.id as string, devices),
      };
    }) as IDeviceTree[];
  };

  const selectedArea = ref([]);

  const props = defineProps({
    appendDevice: {
      type: Boolean,
      default: false,
    },
    returnRoomOnSelect: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['onSelectChange']);

  const { loading, setLoading } = useLoading(false);

  // 表格
  const tableData = ref<DeviceAreaDto[]>([]);

  // 区域
  const areaData = ref<DeviceAreaDto[]>([]);
  const areaTreeData = computed(() =>
    listToTree(areaData.value, '0', tableData.value),
  );

  // 当节点选中
  const onSelect = (
    selectedKeys: (string | number)[],
    data: {
      selected?: boolean | undefined;
      selectedNodes: TreeNodeData[] | IDeviceTree[] | undefined;
      node?: TreeNodeData | IDeviceTree | undefined;
      e?: Event | undefined;
    },
  ) => {
    if (props.returnRoomOnSelect) {
      emit('onSelectChange', {
        data: data.node,
        rooms: data.node?.children
          ? data.node?.children
              .flatMap((item) => (item.children ? [item, item.children] : item))
              .flat()
              .filter(
                (item) => ((item as IDeviceTree).raw as DeviceAreaDto)?.room,
              )
              .map((item) => ({ id: item.key, areaName: item.title }))
          : [],
      });
    } else {
      emit('onSelectChange', {
        selectKeys: selectedKeys,
        data: toRaw(data.node),
      });
    }
  };

  // 查询表格数据
  const init = async () => {
    setLoading(true);
    try {
      const areaResult = await DeviceAreaService.getAllDeviceArea();
      if (props.appendDevice) {
        const deviceResult = await DeviceAreaService.getDeviceListByArea();

        tableData.value = deviceResult.items as DeviceAreaDto[];
      }
      areaData.value = areaResult.items as DeviceAreaDto[];
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  init();

  defineExpose({ selectedArea });
</script>

<style scoped></style>
