import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import './font.css'
import './common.css'
import './font-awesome.min.css'

createApp(App).use(router).mount('#app')
