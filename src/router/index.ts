/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 16:51:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 21:50:49
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import cacheLocal from '@/utils/cache'
import { defaultFirstMenuRoute } from '@/utils/map-routers'
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

  /* 加载main路由, 默认跳转第一个菜单子路由 */
  if (to.path === '/main') {
    return defaultFirstMenuRoute.path
  }
})

export default router
