import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus';
import * as echarts from "echarts";
import 'element-plus/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

createApp(App).use(store).use(router).use(ElementPlus).use(echarts).mount('#app')
