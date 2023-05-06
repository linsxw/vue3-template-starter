import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

/** 导入其他路由模块 */
import remainingRouter from './modules/remaining'

/** 所有路由 */
const routes: RouteRecordRaw[] = []

/** 导入所有路由模块 */
const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.ts', '!./modules/**/remaining.ts'],
  {
    eager: true,
  },
)
/** 添加路由 */
Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
  routes: routes.concat(remainingRouter),
})

export default router

export function setupRouter(app: App<Element>) {
  app.use(router)
}
