import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css';
import {ElButton,ElMessage,ElForm,ElFormItem,ElInput,ElDropdown,ElDropdownItem,ElContainer,ElMain} from 'element-plus'
const app : any = createApp(App)
app.use(store).use(router).mount('#app');
app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);
app.component(ElDropdown.name, ElDropdown);
app.component(ElDropdownItem.name, ElDropdownItem);
app.component(ElContainer.name, ElContainer);
app.component(ElMain.name, ElMain);


app.use(ElMessage);