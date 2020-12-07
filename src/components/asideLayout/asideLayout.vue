<template>
  <h1>
    <img src="@/assets/dog.svg" class="logo" />
    <span v-show="!showAdminTitle">music</span>
  </h1>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#5e81f4;"
    @select="pullRoute"
    :collapse="isCollapse"
  >
    <template v-for="(item, index) in menuRoutes" :key="index">
      <el-submenu :index="index + ''" v-if="item.children">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group class="menu-group" background-color="#000000">
          <el-menu-item
            :index="index + '-' + childIndex"
            v-for="(childItem, childIndex) in item.children"
            :key="childIndex"
            >{{ childItem.name }}</el-menu-item
          >
          <!--          <el-menu-item index="1-2">歌曲管理</el-menu-item>-->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="index + ''" v-else>
        <i class="el-icon-setting"></i>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IchildMenu } from "@/utils/interface";
export default defineComponent({
  name: "asideLayout",
  props: ["isCollapse", "showAdminTitle", "menuRoutes"],
  emits: ["selectMenu"],
  setup(props, { emit }) {
    // 提交跳转路由请求
    const pullRoute = (index: String) => {
      if (index.includes("-")) {
        let menuIndex = index.split("-");
        let route: String =
          props.menuRoutes[menuIndex[0]]?.children[menuIndex[1]].path;
        if (route) {
          emit("selectMenu", route);
        }
      }
    };
    return {
      pullRoute,
    };
  },
});
</script>

<style  lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
}

.el-menu-vertical-demo {
  background: @themeColor;
  border-right: none;
  margin: 16px 0;

  & .el-submenu__title {
    height: 60px;
    background: @themeColor !important;
  }

  & .el-menu * {
    color: rgba(255, 255, 255, 0.65);
  }

  & *:hover {
    background: none;
    color: #ffffff;
  }

  .el-menu-item {
    background: @themeColor !important;

    &.is-active {
      background: #ff7f02 !important;
      color: #ffffff;
    }
  }

  .menu-group {
    background: @themeMoreColor !important;

    .el-menu-item {
      background: @themeMoreColor !important;

      &.is-active {
        background: #ff7f02 !important;
        color: #ffffff;
      }
    }
  }
}

.el-popper{
    .menu-group{ 
       .el-menu-item{
           background: #ffffff  !important;
       }
    }
}
</style>
