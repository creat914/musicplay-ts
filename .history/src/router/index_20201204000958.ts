import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Login  = ()=>import('../views/Login/login.vue')
const Home  = ()=>import('../views/home/home.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    component:Home
  },
  {
     path:'/login',
     component:Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
