/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-03 21:57:25
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-05 20:37:38
 */

import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import type { IAccount } from '@/service/login/type'
import { accountLoginRequest, accountUserInfo, getUserMenus } from '@/service/login/login'
import cacheLocal from '@/utils/cache'
import router from '@/router'
import { mapMenuToRoutes } from '@/utils/map-routers'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },

  mutations: {
    setUserInfo(state, resUserInfo) {
      state.userInfo = resUserInfo
    },
    setToken(state, token: string) {
      state.token = token
    },
    setUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 根据用户权限获取动态路由
      const menuRoutes = mapMenuToRoutes(userMenus)

      menuRoutes.forEach((x) => router.addRoute('main', x))
    }
  },

  actions: {
    async accountLogin({ commit }, payLoad: IAccount) {
      // 实现登录逻辑
      console.log('accountLogin', payLoad)
      const loginResult = await accountLoginRequest(payLoad)
      const { id, token } = loginResult.data
      commit('setToken', token)
      cacheLocal.setCache('token', token)
      console.log(id, token)

      // 获取用户信息
      const resultUserInfo = await accountUserInfo(id)
      const userInfo = resultUserInfo.data
      console.log('user', userInfo)
      commit('setUserInfo', userInfo)
      cacheLocal.setCache('userInfo', userInfo)

      // 获取用户菜单列表
      const resultUserMenus = await getUserMenus(userInfo.role.id)
      const userMenus = resultUserMenus.data
      console.log('userMenus', userMenus)
      commit('setUserMenus', userMenus)
      cacheLocal.setCache('userMenus', userMenus)
      // 路由跳转
      router.push('/main')
    },
    loadCacheInit({ commit }) {
      const token = cacheLocal.getCache('token')
      token && commit('setToken', token)
      const userInfo = cacheLocal.getCache('userInfo')
      userInfo && commit('setUserInfo', userInfo)
      const userMenus = cacheLocal.getCache('userMenus')
      userMenus && commit('setUserMenus', userMenus)
    }
    // phoneLogin({ commit }, payLoad: any) {
    //   console.log('phoneLogin', payLoad)
    // }
  },

  getters: {}
}

export default loginModule
