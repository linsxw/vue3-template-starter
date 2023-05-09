import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import App from './App.vue'
import './styles/tailwind.scss'
import 'ant-design-vue/dist/reset.css'

async function bootstrap() {
  const app = createApp(App)

  /** 配置路由 */
  setupRouter(app)

  /** 配置 store */
  setupStore(app)

  app.use(Antd)

  app.mount('#app')
}

bootstrap()
