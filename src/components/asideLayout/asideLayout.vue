<template>
  <h1>
    <img src="@/assets/dog.svg" class="logo"/>
    <span v-show="!showAdminTitle">music</span>
  </h1>
  <el-menu class="el-menu-vertical-demo"
           background-color="#5e81f4;"
           :collapse="isCollapse">
    <template v-for="(item,index) in menuRoutes" :key="index">
      <el-submenu :index="index" v-if="item.children">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group class="menu-group" background-color="#000000">
          <el-menu-item :index="index+'-'+childIndex" v-for="(childItem,childIndex) in item.children" :key="childIndex">{{childItem.name}}</el-menu-item>
<!--          <el-menu-item index="1-2">歌曲管理</el-menu-item>-->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="index" v-else>
        <i class="el-icon-setting"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: "asideLayout",
    props: {
      isCollapse:Boolean,
      showAdminTitle:Boolean,
      menuRoutes:Array
    }
  })
</script>

<style scoped>

</style>
