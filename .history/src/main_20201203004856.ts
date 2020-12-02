import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ElButton,ElMessage,ElForm,ElFormItem,ElInput} from 'element-plus'
const app : any = createApp(App)
app.use(store).use(router).mount('#app');
app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);


app.use(ElMessage);