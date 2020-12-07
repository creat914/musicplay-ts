import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css';
import "../music.less";
import ElementPlus from 'element-plus';

const app : any = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app');
