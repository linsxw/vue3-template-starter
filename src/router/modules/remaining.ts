import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

/** 其他路由模块 */
export default [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about.vue'),
      },
    ],
  },
] as Array<RouteRecordRaw>
