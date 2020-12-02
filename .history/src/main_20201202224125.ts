import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ElButton as Button, ElMessage as Message } from 'element-plus'
const app = createApp(App)
app.use(store).use(router).mount('#app');
app.use(Button).use(Message);