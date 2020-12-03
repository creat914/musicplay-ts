<template>
  <el-container class="layout-container">
    <el-aside width="200px" style="background-color: #222d32; color: #c2c2c2">
      <div class="logo">
        <el-avatar size="small" :src="avatar"></el-avatar>
        <h1>后台管理</h1>
      </div>

      <el-menu
        :uniqueOpened="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#222d32"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-service"></i>
            <span>音乐管理</span>
          </template>
          <el-menu-item index="1-1">歌手</el-menu-item>
          <el-menu-item index="1-2">听歌排行榜</el-menu-item>
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
@itemHeight:60px;
.layout-container {
  width: 100%;
  height: 100%;

  .el-header {
    background: #222d32;
    color: #c2c2c2;
    height: @itemHeight !important;
    line-height: @itemHeight;

    .el-icon-setting:hover {
      border: none;
    }
  }

  .el-aside {
    color: #333;
    overflow-x: hidden;

    .logo{
        width: 100%;
        display:flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
        height: @itemHeight;
        h1{
            font-size: 16px;
            margin: 0 0 0 10px;
        }
    }

    .submenu {
      height: @itemHeight;
      background: #222d32;
      color: #c2c2c2;
    }

    .el-menu {
      border: none;
      background-color: #545c64 !important;
    }
  }
}
</style>

<script lang="ts">
import { ref, Ref } from "vue";

export default {
  setup() {
    const handleOpen = (key: String, keyPath: String) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: String, keyPath: String) => {
      console.log(key, keyPath);
    };
    const avatar: Ref<String> = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    );

    return {
      handleOpen,
      handleClose,
      avatar,
    };
  },
};
</script>