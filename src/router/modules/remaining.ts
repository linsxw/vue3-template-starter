import type { RouteRecordRaw } from 'vue-router'

/** 其他路由模块 */
export default [
  {
    path: '/',
    meta: {},
    component: () => import('@/views/index.vue'),
  },
] as Array<RouteRecordRaw>
