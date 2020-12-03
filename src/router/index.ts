import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/Login/login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:"/login"
  },
  {
     path:'/login',
     component:login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
