/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 17:11:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-22 22:40:43
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IRootUseStoreType } from './types'
import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '../service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'zgq',
      age: 20,
      height: '180',
      departmentList: [],
      roleList: [],
      entireMenu: []
    }
  },
  mutations: {
    changeName(state, name: string) {
      state.name = name
    },
    setDepartmentListChange(state, list) {
      state.departmentList = list
    },
    setRoleListChange(state, list) {
      state.roleList = list
    },
    setEntireMenuChange(state, list) {
      state.entireMenu = list
    }
  },

  actions: {
    async getInitialDataAction({ commit }) {
      const pageDataParams = {
        offset: 0,
        size: 999
      }
      const departmentResult = await getPageListData('/department/list', pageDataParams)
      const { list: departmentList } = departmentResult.data
      commit('setDepartmentListChange', departmentList)

      const roleResult = await getPageListData('/role/list', pageDataParams)
      const { list: roleList } = roleResult.data
      commit('setRoleListChange', roleList)

      const menuResult = await getPageListData('menu/list', {})
      const { list: menuList } = menuResult.data
      commit('setEntireMenuChange', menuList)
    }
  },
  getters: {},
  modules: {
    login,
    system
  }
})

export function loadSetUpCacheInit() {
  store.dispatch('login/loadCacheInit')
  // 防止未获取到token进行请求, 需在登录完成后进行请求初始化
  // store.dispatch('getInitialDataAction')
}

// vuex类型函数
export function useStore(): Store<IRootUseStoreType> {
  return useVuexStore()
}

export default store
