/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 16:51:21
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-28 10:36:42
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cacheLocal from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== 'login') {
    const token = cacheLocal.getCache('token')
    if (!token) return 'login'
  }
})

export default router
