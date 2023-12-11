import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

createApp(App).use(store).use(router).use(router).mount('#app')
=======
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
>>>>>>> 97f9c9c (11)
