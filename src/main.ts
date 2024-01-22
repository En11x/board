import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import 'uno.css'
import { setupStore } from './store'

const app = createApp(App)

setupStore(app)

app.mount('#app')
