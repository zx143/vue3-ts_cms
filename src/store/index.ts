/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 17:11:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-20 20:35:33
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
      roleList: []
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
  store.dispatch('getInitialDataAction')
}

// vuex类型函数
export function useStore(): Store<IRootUseStoreType> {
  return useVuexStore()
}

export default store
