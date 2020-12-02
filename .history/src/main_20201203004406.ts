import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ElButton as Button,ElMessage,ElForm,ElFormItem,ElInput} from 'element-plus'
const app : any = createApp(App)
app.use(store).use(router).mount('#app');
app.component(Button.name, Button);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);


app.use(ElMessage);