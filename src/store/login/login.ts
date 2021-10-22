/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-03 21:57:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 07:44:40
 */

import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import type { IAccount } from '@/service/login/type'
import { accountLoginRequest, accountUserInfo, getUserMenus } from '@/service/login/login'
import cacheLocal from '@/utils/cache'
import router from '@/router'
import { mapMenusToPermission, mapMenuToRoutes } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permission: []
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

      // 获取当前登录用户所拥有的按钮权限并保存
      const permission = mapMenusToPermission(userMenus)
      // console.log('permission', permission)
      state.permission = permission
    }
  },

  actions: {
    async accountLogin({ commit, dispatch }, payLoad: IAccount) {
      // 实现登录逻辑
      console.log('accountLogin', payLoad)
      const loginResult = await accountLoginRequest(payLoad)
      const { id, token } = loginResult.data
      commit('setToken', token)
      cacheLocal.setCache('token', token)
      console.log(id, token)

      // 获取初始化数据 => 全部部门/角色数据
      dispatch('getInitialDataAction', null, { root: true })

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
    loadCacheInit({ commit, dispatch }) {
      const token = cacheLocal.getCache('token')
      token && commit('setToken', token)
      dispatch('getInitialDataAction', null, { root: true })
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
