import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
const login = () => import("../views/Login/login.vue")
const Home = () => import("../views/Admin/Home.vue")
const SingerManger = () => import("@/views/Admin/menus/SingerManger.vue")
let routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: Home,
    name: "首页",
    children: [{
      path: '/SingerManger',
      name: "歌手管理",
      component: SingerManger
    }]
  },
  {
    path: '/login',
    component: login,
    name: "登录"
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router
