<template>
  <div class="container">
    <a-space direction="vertical" :size="16" fill>
      <a-card class="general-card" title="基础属性">
        <template #extra>
          <a-space>
            <a-button @click="onBack">返回</a-button>
          </a-space>
        </template>
        <a-space>
          <a-image
            width="150px"
            :src="deviceTypeImage[formData.deviceProfileName as string]"
          />
          <a-descriptions
            :label-style="{
              textAlign: 'right',
              width: '200px',
              paddingRight: '10px',
              color: 'rgb(var(--gray-8))',
            }"
            :column="2"
            :value-style="{ width: '450px' }"
            :data="formFiled"
          >
            <template #label="{ label }">{{ $t(label) }} :</template>
            <template #value="{ value }">
              <a-skeleton v-if="loading" :animation="true">
                <a-skeleton-line :widths="['200px']" :rows="1" />
              </a-skeleton>
              <span v-else>{{ value || '--' }}</span>
            </template>
          </a-descriptions>
        </a-space>
      </a-card>
      <a-card class="general-card" title="设备详情">
        <a-tabs default-active-key="1" type="rounded">
          <a-tab-pane key="1" title="实时数据" style="padding: 20px">
            <a-table
              row-key="id"
              :loading="loading"
              :columns="filedListColumns"
              :data="deviceFieldList"
              :bordered="false"
              :pagination="false"
            >
              <template #upTime="{ record }">
                {{ dayjs(record.upTime).format('YYYY-MM-DD HH:mm:ss') }}
              </template>
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="2" title="数据明细" style="padding: 20px">
            <KvTable :device-id="id" :filed-list="deviceFieldList" />
          </a-tab-pane>
          <a-tab-pane key="3" title="告警配置" style="padding: 20px">
            <a-table
              row-key="id"
              :loading="loading"
              :columns="alarmConfigColumns"
              :data="[]"
              :bordered="false"
              :pagination="false"
            >
              <template #upTime="{ record }">
                {{ dayjs(record.upTime).format('YYYY-MM-DD HH:mm:ss') }}
              </template>
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="4" title="告警记录" style="padding: 20px">
            <a-table
              row-key="id"
              :loading="loading"
              :columns="alarmColumns"
              :data="[]"
              :bordered="false"
              :pagination="false"
            >
              <template #upTime="{ record }">
                {{ dayjs(record.upTime).format('YYYY-MM-DD HH:mm:ss') }}
              </template>
            </a-table>
          </a-tab-pane>
          <!--          <a-tab-pane key="5" title="设备配置">-->
          <!--            <a-form-->
          <!--              class="form"-->
          <!--              :label-col-props="{ span: 8 }"-->
          <!--              :wrapper-col-props="{ span: 16 }"-->
          <!--            >-->
          <!--              <a-form-item field="email" label="心跳时间（秒）">-->
          <!--                <a-input-number :model-value="30" />-->
          <!--              </a-form-item>-->
          <!--              <a-form-item field="email" label="离线提醒">-->
          <!--                <a-switch :model-value="true" />-->
          <!--              </a-form-item>-->
          <!--              <a-form-item>-->
          <!--                <a-space>-->
          <!--                  <a-button type="primary"> 更新 </a-button>-->
          <!--                </a-space>-->
          <!--              </a-form-item>-->
          <!--            </a-form>-->
          <!--          </a-tab-pane>-->
        </a-tabs>
      </a-card>
    </a-space>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import {
    DeviceDetailDto,
    DeviceLatestMetricDataDto,
    DeviceService,
  } from '@/services/sensor-core';
  import { computed, onMounted, ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import eppImage from '@/assets/images/Environmental_Parameters_Profile.png';
  import hispImage from '@/assets/images/Human_Infrared_Sensor_Profile.png';
  import thpImage from '@/assets/images/Temperature_Humidity_Profile.png';

  import dayjs from 'dayjs';
  import KvTable from './components/kv-table.vue';

  const deviceTypeImage: Record<string, any> = {
    Environmental_Parameters_Profile: eppImage,
    Human_Infrared_Sensor_Profile: hispImage,
    Temperature_Humidity_Profile: thpImage,
  };

  const { loading, setLoading } = useLoading(true);
  const router = useRouter();
  const route = useRoute();
  const { id = '' } = route.query;

  const formData = ref<DeviceDetailDto>({});

  const formFiled = computed(() => {
    return [
      {
        label: '设备名称',
        value: formData.value.name || '--',
      },
      {
        label: '设备描述',
        value: formData.value.description || '--',
      },

      {
        label: '设备类型',
        value: formData.value.deviceProfileName || '--',
      },
      {
        label: 'EUI',
        value: formData.value.devEui || '--',
      },
      {
        label: '设备状态',
        value: formData.value.isDisabled ? '禁用' : '启用',
      },
      {
        label: '帧计数器验证',
        value: formData.value.skipFcntCheck ? '启用' : '禁用',
      },
      {
        label: '创建时间',
        value: formData.value.chirpStackDeviceInfo?.createdAt
          ? dayjs(formData.value.chirpStackDeviceInfo?.createdAt).format(
              'YYYY-MM-DD HH:mm:ss',
            )
          : '--',
      },
      {
        label: '最后上报时间',
        value: formData.value.chirpStackDeviceInfo?.lastSeenAt
          ? dayjs(formData.value.chirpStackDeviceInfo?.lastSeenAt).format(
              'YYYY-MM-DD HH:mm:ss',
            )
          : '--',
      },
    ];
  });

  const deviceFieldList = computed<DeviceLatestMetricDataDto[]>(() => {
    return formData.value.latestMetricDataList || [];
  });

  const filedListColumns = [
    {
      title: '属性标识',
      dataIndex: 'deviceFieldName',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '最新值',
      dataIndex: 'value',
    },
    {
      title: '上报时间',
      dataIndex: 'upTime',
      slotName: 'upTime',
    },
  ];

  const alarmConfigColumns = [
    {
      title: '告警类型',
      dataIndex: 'fieldName',
    },
    {
      title: '告警等级',
      dataIndex: 'fieldName',
    },
    {
      title: '告警内容',
      dataIndex: 'fieldName',
    },
    {
      title: '告警条件',
      dataIndex: 'fieldName',
    },
  ];

  const alarmColumns = [
    {
      title: '告警类型',
      dataIndex: 'fieldName',
    },
    {
      title: '告警时间',
      dataIndex: 'fieldName',
    },
    {
      title: '告警内容',
      dataIndex: 'fieldName',
    },
  ];

  const onBack = () => {
    router.back();
  };

  onMounted(async () => {
    if (id) {
      setLoading(true);
      try {
        const result = await DeviceService.getDetailById({
          id: id as unknown as number,
        });
        formData.value = {
          ...result,
        };
      } finally {
        setLoading(false);
      }
    }
  });
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
  }
  .form {
    width: 540px;
    margin: 0 auto;
  }
</style>
