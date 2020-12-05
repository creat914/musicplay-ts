<template>
  <el-container id="container">
    <el-aside width="auto" class="aside">
      <asideLayout :isCollapse="isCollapse" :showAdminTitle="showAdminTitle" ref="asideLayoutRef" :menuRoutes="menuRoutes"></asideLayout>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-icon :class="!isCollapse?'el-icon-s-fold':'el-icon-s-unfold'"
                 style="font-size: 24px;color: #FFFFFF;cursor: pointer"
                 @click="triggerMenu"
        ></el-icon>
        <div class="user-wrapper">
          <el-dropdown trigger="click">
      <span class="el-dropdown-link" style="color: #FFFFFF;cursor: pointer">
        admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
  import {toRefs, Ref, onMounted, onUnmounted, watch, defineComponent,reactive} from 'vue'
  import asideLayout from '@/components/asideLayout/asideLayout.vue';
  import headerLayout from '@/components/headerLayout/headerLayout.vue'
  import {IchildMenu} from '@/utils/interface'
  import {menuRoutes} from '@/router/menu-routes'
  interface IReactive{
    isCollapse:Boolean,
    showAdminTitle:Boolean,
    menuRoutes?:Array<IchildMenu>
  }
  export default defineComponent({
    components: {
      asideLayout,
      headerLayout
    },
    setup() {
      let data:IReactive = reactive({
        isCollapse:false,
        showAdminTitle:false,
        menuRoutes:menuRoutes
      })
      const triggerMenu = () => {
        data.isCollapse = !data.isCollapse;
      }
      const getWindowWidth = () => {
        let clientWidth = document.body.clientWidth;
        if (clientWidth < 1100) {
          data.isCollapse = true;
        } else {
          data.isCollapse = false;
        }
      }
      onMounted(() => {
        window.addEventListener("resize", getWindowWidth);
      });
      onUnmounted(() => {
        window.removeEventListener("resize", getWindowWidth);
      })

      watch(()=>data.isCollapse,(nv: Boolean, ov: Boolean) => {
        console.log("----")
        if (!nv) {
          setTimeout(() => {
            data.showAdminTitle = false;
          }, 400);
        } else {
          data.showAdminTitle = true;
        }
      });

      return {
        ...toRefs(data),
        triggerMenu,

      }
    }
  });
</script>
<style lang="less">
  #container {
    width: 100%;
    height: 100%;

    .aside {
      height: 100%;
      background: @themeColor;

      & * {
        color: #FFFFFF;
      }

      h1 {
        width: 100%;
        height: 60px;
        font-size: 26px;
        display: flex;
        align-items: center;
        margin: 0;
        background: @themeMoreColor;

        .logo {
          width: 35px;
          height: 35px;
          margin: 0 12.5px;
        }

        span {
          margin-left: 10px;
        }
      }

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
          color: #FFFFFF;
        }

        .el-menu-item {
          background: @themeColor !important;

          &.is-active {
            background: #ff7f02 !important;
            color: #FFFFFF;
          }
        }

        .menu-group {
          background: @themeMoreColor !important;

          .el-menu-item {
            background: @themeMoreColor !important;

            &.is-active {
              background: #ff7f02 !important;
              color: #FFFFFF;
            }
          }
        }
      }
    }

    .header {
      line-height: 60px !important;
      background: @themeColor;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
