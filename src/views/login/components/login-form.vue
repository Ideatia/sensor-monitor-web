<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">{{ appName }}</div>
    <div class="login-form-sub-title">
      环境实时监测 ｜ 智能预警 ｜多维度数据展示
    </div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.username"
          :placeholder="$t('login.form.userName.placeholder')"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: $t('login.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          :placeholder="$t('login.form.password.placeholder')"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-row :gutter="24">
        <a-col :span="16">
          <a-form-item
            v-if="!!userInfo.imageBase64"
            field="captcha"
            :rules="[{ required: true, message: '验证码不能为空！' }]"
            :validate-trigger="['change', 'blur']"
            hide-label
          >
            <a-input
              v-model="userInfo.captcha"
              placeholder="验证码"
              allow-clear
            >
              <template #prefix>
                <icon-image />
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <img
            :src="userInfo.imageBase64"
            style="cursor: pointer; height: 40px"
            @click="getCaptcha"
          />
        </a-col>
      </a-row>

      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox
            checked="rememberPassword"
            :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword as any"
          >
            {{ $t('login.form.rememberPassword') }}
          </a-checkbox>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          {{ $t('login.form.login') }}
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import { useI18n } from 'vue-i18n';
  import { useStorage } from '@vueuse/core';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';
  import type { LoginData } from '@/api/user';
  import { CaptchaService } from '@/services/auth';

  const router = useRouter();
  const { t } = useI18n();
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading();
  const userStore = useUserStore();

  const appName = import.meta.env.VITE_APP_NAME;
  const mode = import.meta.env.MODE;

  const loginConfig = useStorage(
    'login-config',
    mode === 'development'
      ? {
          rememberPassword: true,
          username: 'admin', // 演示默认值
          password: '123456',
        }
      : {},
  );

  onMounted(() => {
    userStore.getAll();
  });

  const userInfo = reactive({
    username: loginConfig.value.username,
    password: loginConfig.value.password,
    key: '',
    imageBase64: '',
    captcha: '',
  });

  const getCaptcha = async () => {
    const { key, imageBase64 } = await CaptchaService.captcha();
    userInfo.key = key as string;
    userInfo.imageBase64 = imageBase64 as string;
  };

  watch(
    () => userStore.loginInfo?.needCaptcha,
    (value) => {
      if (value) {
        getCaptcha();
      }
    },
  );

  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        await userStore.login(values as LoginData);
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: (redirect as string) || 'Workplace',
          query: {
            ...othersQuery,
          },
        });
        Message.success(t('login.form.login.success'));
        const { rememberPassword } = loginConfig.value;
        const { userName, pwd } = values;
        // 实际生产环境需要进行加密存储。
        // The actual production environment requires encrypted storage.
        loginConfig.value.username = rememberPassword ? userName : '';
        loginConfig.value.password = rememberPassword ? pwd : '';
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        setLoading(false);
      }
    }
  };
  const setRememberPassword = (value: boolean) => {
    loginConfig.value.rememberPassword = value;
  };
</script>

<style lang="less" scoped>
  .login-form {
    &-wrapper {
      width: 320px;
    }

    &-title {
      color: var(--color-text-1);
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }

    &-sub-title {
      color: var(--color-text-3);
      font-size: 16px;
      line-height: 24px;
    }

    &-error-msg {
      height: 32px;
      color: rgb(var(--red-6));
      line-height: 32px;
    }

    &-password-actions {
      display: flex;
      justify-content: space-between;
    }

    &-register-btn {
      color: var(--color-text-3) !important;
    }
  }
</style>
