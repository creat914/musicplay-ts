<template>
  <el-container class="layout-container">
    <el-aside width="200px" style="background-color: #222d32;color:#c2c2c2">
      <el-menu>
        <el-submenu index="1" class="submenu">
          <template #title><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
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
      <el-main>
        
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less">
.layout-container {
  width: 100%;
  height: 100%;

  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;

    .submenu{
        height: 45px;
        background: #222d32;
        color:#c2c2c2;
    }
  }
}
</style>

<script>
export default {
   
};
</script>