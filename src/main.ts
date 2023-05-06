import { createApp } from 'vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import App from './App.vue'
import './styles/tailwind.scss'

async function bootstrap() {
  const app = createApp(App)

  /** 配置路由 */
  setupRouter(app)

  /** 配置 store */
  setupStore(app)

  app.mount('#app')
}

bootstrap()
