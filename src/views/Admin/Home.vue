<template>
  <el-container id="container">
    <el-aside width="auto" class="aside">
      <asideLayout
        :isCollapse="isCollapse"
        :showAdminTitle="showAdminTitle"
        ref="asideLayoutRef"
        :menuRoutes="menuRoutes"
        @selectMenu="selectMenu"
      ></asideLayout>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-icon
          :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          style="font-size: 24px; color: #ffffff; cursor: pointer"
          @click="triggerMenu"
        ></el-icon>
        <div class="user-wrapper">
          <el-dropdown trigger="click">
            <span
              class="el-dropdown-link"
              style="color: #ffffff; cursor: pointer"
            >
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-switch-button"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <!-- <router-view v-slot="{ Component }"> -->
        <router-view></router-view>
          <!-- <transition name="fade">
            <component :is="Component" />
          </transition> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import {
  toRefs,
  Ref,
  onMounted,
  onUnmounted,
  watch,
  defineComponent,
  reactive,
} from "vue";
import asideLayout from "@/components/asideLayout/asideLayout.vue";
import headerLayout from "@/components/headerLayout/headerLayout.vue";
import { useRouter, useRoute } from "vue-router";
import { IchildMenu } from "@/utils/interface";
import { menuRoutes } from "@/router/menu-routes";
interface IReactive {
  isCollapse: Boolean;
  showAdminTitle: Boolean;
  menuRoutes?: Array<IchildMenu>;
}
export default defineComponent({
  components: {
    asideLayout,
    headerLayout,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let data: IReactive = reactive({
      isCollapse: false,
      showAdminTitle: false,
      menuRoutes: menuRoutes,
    });
    const triggerMenu = () => {
      data.isCollapse = !data.isCollapse;
    };
    const selectMenu = (routePath: string) => {
      let currentPath: string = route.path;
      if (currentPath !== routePath) {
        router.push(routePath);
      }
    };
    const getWindowWidth = () => {
      let clientWidth = document.body.clientWidth;
      if (clientWidth < 1100) {
        data.isCollapse = true;
      } else {
        data.isCollapse = false;
      }
    };
    onMounted(() => {
      window.addEventListener("resize", getWindowWidth);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", getWindowWidth);
    });
    watch(
      () => data.isCollapse,
      (nv: Boolean, ov: Boolean) => {
        if (!nv) {
          setTimeout(() => {
            data.showAdminTitle = false;
          }, 400);
        } else {
          data.showAdminTitle = true;
        }
      }
    );

    return {
      ...toRefs(data),
      triggerMenu,
      selectMenu,
    };
  },
});
</script>
<style lang="less">
#container {
  width: 100%;
  height: 100%;

  .aside {
    height: 100%;
    background: @themeColor;
    box-shadow: 0 5px 10px #AAAAAA;

    & * {
      color: #ffffff;
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
  }

  .header {
    line-height: 60px !important;
    background: @themeColor;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 5px 0 5px #AAAAAA;
  }

  .el-main{
    padding: 20px 30px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     opacity: 0;
}
.fade-enter-to,.fade-leave-from /* .fade-leave-active below version 2.1.8 */ {
     opacity: 1;
}
</style>
