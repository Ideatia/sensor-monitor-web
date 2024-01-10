import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/devices',
  name: 'devices',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '设备',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 0,
  },
  children: [
    {
      path: 'device-list',
      name: 'DeviceList',
      component: () => import('@/views/devices/device-list/index.vue'),
      meta: {
        locale: '设备列表',
        requiresAuth: true,
        permissions: ['*'],
      },
    },
    {
      path: 'device-list-detail',
      name: 'DeviceDetail',
      component: () => import('@/views/devices/device-list/detail.vue'),
      meta: {
        hideInMenu: true,
        locale: '设备详情',
        requiresAuth: true,
        permissions: ['*'],
      },
    },
    {
      path: 'device-area',
      name: 'DeviceArea',
      component: () => import('@/views/devices/device-area/index.vue'),
      meta: {
        locale: '设备区域',
        requiresAuth: true,
        permissions: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
