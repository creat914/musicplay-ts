import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const login = () => import("../views/Login/login.vue")
const Home = () => import("../views/Admin/Home.vue")
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    name: "首页"
  },
  {
    path: '/login',
    component: login,
    name: "登录"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
