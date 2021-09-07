/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 16:51:21
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-02 20:25:35
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
    name: 'login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-fount',
    component: () => import('views/404/not-fount.vue')
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
