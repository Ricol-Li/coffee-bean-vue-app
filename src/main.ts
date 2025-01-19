import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import element from '@/plugins/element'
// import ElmentPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import 'normalize.css'
import '@/style/index.scss'
import 'virtual:uno.css'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(element)

app.mount('#app')
