<template>
  <a-spin :loading="loading" style="width: 100%; height: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0', textAlign: 'center' }"
    >
      <template #title> 实时监控 </template>
      <template #extra>
        <a-button :width="120" type="text" @click="handleClick">{{
          selectedArea?.title ?? '筛选'
        }}</a-button>
      </template>
      <a-grid :cols="24" :col-gap="16" :row-gap="16" style="margin-top: 16px">
        <a-grid-item
          v-for="(room, idx) in monitorRooms"
          :key="room.id"
          :span="{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }"
        >
          <a-card>
            <div style="display: flex; justify-content: space-between">
              <a-link>{{ room.areaName }}</a-link>
              <span>{{ idx + 1 }}</span>
            </div>
            <template v-if="room.device && room.device.latestMetricDataList">
              <a-list-item
                v-for="(
                  metricData, i
                ) in room.device?.latestMetricDataList.slice(0, 2)"
                :key="i"
              >
                <a-list-item-meta :title="metricData.deviceFieldName">
                  <template #avatar>
                    <a-avatar shape="square">
                      <img alt="avatar" :src="thpImage" />
                    </a-avatar>
                  </template>
                </a-list-item-meta>
                <template #extra>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      font-size: 28px;
                      height: 100%;
                    "
                  >
                    {{ metricData.value }} °C
                  </div>
                </template>
              </a-list-item>
            </template>
            <div v-else> 暂无关联数据 </div>
          </a-card>
        </a-grid-item>
      </a-grid>
    </a-card>
    <a-drawer
      :width="340"
      :visible="visible"
      unmount-on-close
      ok-text="清除选择"
      @ok="handleOk"
      @cancel="handleCancel"
      @open="onOpen"
    >
      <template #title> 实时监控 </template>
      <div style="display: flex; flex-direction: column; height: 100%">
        <div style="flex: 1"
          ><a-alert>选择房间或区域</a-alert>
          <device-area-tree
            ref="deviceAreaTreeRef"
            :return-room-on-select="true"
            @on-select-change="handleSelect"
          ></device-area-tree>
        </div>
        <a-radio-group v-model:model-value="selectedProfile"
          ><a-alert style="margin-bottom: 10px">选择要关注的房间信息</a-alert>
          <a-space direction="vertical" size="medium">
            <a-radio
              v-for="p in deviceProfileList"
              :key="p.id"
              :value="p.id"
              style="width: 90%"
              >{{ p.name }}</a-radio
            >
          </a-space>
        </a-radio-group>
      </div>
    </a-drawer>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue';
  import useLoading from '@/hooks/loading';
  import thpImage from '@/assets/images/Temperature_Humidity_Profile.png';
  import DeviceAreaTree, {
    IDeviceTree,
  } from '@/components/tree/device-area-tree/index.vue';
  import {
    ChirpStackDeviceProfileService,
    DeviceAreaService,
    DeviceListDto,
    DeviceProfileDto,
  } from '@/services/sensor-core';

  const { loading, setLoading } = useLoading();

  const deviceAreaTreeRef = ref();

  const deviceProfileList = ref<DeviceProfileDto[]>([]);
  const selectedProfile = ref<string>();
  const allDevices = ref<DeviceListDto[]>([]);
  const selectedArea = ref();
  const selectedRooms = ref<Array<{ areaName: string; id: string }>>([]);

  const monitorRooms = computed(() => {
    return selectedRooms.value.map((item) => {
      return {
        ...item,
        device: allDevices.value.find(
          (d) =>
            d.areaId === item.id &&
            (!selectedProfile.value ||
              selectedProfile.value === d.deviceProfileId),
        ),
      };
    });
  });

  const visible = ref<boolean>(false);

  const handleClick = () => {
    visible.value = true;
  };

  const queryDevice = async (areaId?: string) => {
    setLoading(true);
    // 查询设备数据
    const deviceResult = await DeviceAreaService.getDeviceListByArea({
      unPage: true,
      areaId,
    });

    allDevices.value = deviceResult.items as DeviceListDto[];
    setLoading(false);
  };

  const handleSelect = async ({
    data,
    rooms,
  }: {
    data: IDeviceTree;
    rooms: Array<{ areaName: string; id: string }>;
  }) => {
    selectedArea.value = data;
    selectedRooms.value = rooms;

    queryDevice(data?.key as string);
  };

  const onOpen = () => {
    if (selectedArea.value && deviceAreaTreeRef.value)
      deviceAreaTreeRef.value.selectedArea = [selectedArea.value.key];
  };

  const handleCancel = () => {
    visible.value = false;
  };

  const handleOk = () => {
    visible.value = false;
    selectedArea.value = {};

    selectedProfile.value = undefined;
    queryDevice();
  };

  onMounted(async () => {
    setLoading(true);
    const areaResult = await DeviceAreaService.getAllDeviceArea();
    selectedRooms.value = areaResult.items?.filter(
      (item) => item.room,
    ) as Array<{
      areaName: string;
      id: string;
    }>;
    deviceProfileList.value =
      await ChirpStackDeviceProfileService.getDeviceProfileList();
    deviceProfileList.value.push({ name: '无', id: undefined });
    await queryDevice();
  });
</script>

<style scoped lang="less">
  .general-card {
    height: 100%;
  }
</style>
