<template>
  <el-container class="layout-container">
    <el-aside width="200px" style="background-color: #222d32; color: #c2c2c2">
      <el-menu
        :uniqueOpened="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#222d32"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="5">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less">
.layout-container {
  width: 100%;
  height: 100%;

  .el-header {
    background: #222d32;
    color: #c2c2c2;
    height: 56px !important;
    line-height: 56px;

    .el-icon-setting:hover{
        border:none;
    }
  }

  .el-aside {
    color: #333;
    overflow-x: hidden;

    .submenu {
      height: 45px;
      background: #222d32;
      color: #c2c2c2;
    }

    .el-menu{
        border:none;
        background-color: #545c64 im !important;
    }
  }
}
</style>

<script lang="ts">
// import {} from 'vue'

export default {
  setup() {
    const handleOpen = (key: String, keyPath: String) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: String, keyPath: String) => {
      console.log(key, keyPath);
    };

    return {
        handleOpen,
        handleClose
    }
  },
};
</script>