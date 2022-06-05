import { createApp, h } from 'vue'
import router from '@/router'
import App from '@/App.vue'

import { registerModules } from './register-modules'
import application from '@/modules/application'
//import agent from '@/modules/agent'

registerModules({
  application
})

createApp({
  render: () => h(App)
})
.use(router)
.mount('#app')