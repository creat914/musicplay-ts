<template>
  <h1>
    <img src="@/assets/dog.svg" class="logo"/>
    <span v-show="!showAdminTitle">music</span>
  </h1>
  <el-menu class="el-menu-vertical-demo"
           background-color="#5e81f4;"
           :collapse="isCollapse">
    <template v-for="(item,index) in menuList" :key="index">
      <el-submenu :index="index" v-if="item.children">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group class="menu-group" background-color="#000000">
          <el-menu-item :index="index+'-'+childIndex" v-for="(childItem,childIndex) in item.children" :key="childIndex">{{item.name}}</el-menu-item>
<!--          <el-menu-item index="1-2">歌曲管理</el-menu-item>-->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4" v-else>
        <i class="el-icon-setting"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
  import {reactive, toRefs} from 'vue';
  interface IchildMenu {
    name?: Number | String,
    path: String,
    component: String,
    children?: IchildMenu
  }
  interface IMenuList {
    menuList: Array<IchildMenu>
  }
  export default{
    props: {
      isCollapse: Boolean,
      showAdminTitle: Boolean
    },
    name: "asideLayout",
    setup() {
      // 添加路由
      const addRoute = (routerList: Array<IchildMenu>) => {
        console.log("我被调用了")
        // menuOptions.menuList = routerList;
      }
      // 菜单项
      const menuOptions: IMenuList = reactive({
        menuList: []
      });
      return {
        ...toRefs(menuOptions)
      }
    }
  }
</script>

<style scoped>

</style>
