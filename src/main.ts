import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import ElmentPlus from 'element-plus'

import 'normalize.css'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElmentPlus)

app.mount('#app')
