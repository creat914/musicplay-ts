import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css';
import {ElButton,ElMessage,ElForm,ElFormItem,ElInput,ElDropdown,ElDropdownItem,
    ElContainer,ElMain,ElTable,ElHeader,ElTableColumn,ElAside,ElDropdownMenu
 ,ElMenu,ElMenuItemGroup,ElSubmenu
} from 'element-plus'
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
app.component(ElTable.name, ElTable);
app.component(ElHeader.name, ElHeader);
app.component(ElTableColumn.name, ElTableColumn);
app.component(ElAside.name, ElAside);
app.component(ElDropdownMenu.name, ElDropdownMenu);
app.component(ElMenu.name, ElMenu);
app.component(ElMenuItemGroup.name, ElMenuItemGroup);
app.component(ElSubmenu.name, ElSubmenu);


app.use(ElMessage);