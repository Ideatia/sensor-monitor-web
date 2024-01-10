<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title> 消息告警 </template>
      <!--      <template #extra>-->
      <!--        <a-link>{{ $t('workplace.viewMore') }}</a-link>-->
      <!--      </template>-->
      <a-space direction="vertical" :size="10" fill>
        <a-radio-group
          v-model:model-value="type"
          type="button"
          @change="typeChange as any"
        >
          <a-radio value="text"> 温度 </a-radio>
          <a-radio value="image"> 湿度 </a-radio>
          <a-radio value="video"> 空气质量 </a-radio>
        </a-radio-group>
        <a-table
          :data="renderList"
          :pagination="false"
          :bordered="false"
          :scroll="{ x: '100%', y: '264px' }"
        >
          <template #columns>
            <a-table-column title="设备" data-index="key" />
            <a-table-column title="时间" data-index="clickNumber" />
            <a-table-column title="类型" data-index="clickNumber" />
            <a-table-column title="内容" data-index="clickNumber" />
          </template>
        </a-table>
      </a-space>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import type { TableData } from '@arco-design/web-vue/es/table/interface';

  const type = ref('text');
  const { loading, setLoading } = useLoading();
  const renderList = ref<TableData[]>([]);
  const wait = (seconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fetchData = async (contentType: string) => {
    try {
      setLoading(true);
      await wait(1.5);
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const typeChange = (contentType: string) => {
    fetchData(contentType);
  };
  fetchData('text');
</script>

<style scoped lang="less">
  .general-card {
    min-height: 395px;
  }
  :deep(.arco-table-tr) {
    height: 44px;
    .arco-typography {
      margin-bottom: 0;
    }
  }
  .increases-cell {
    display: flex;
    align-items: center;
    span {
      margin-right: 4px;
    }
  }
</style>
