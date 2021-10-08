/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 17:11:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 06:47:57
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IRootUseStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'zgq',
      age: 20,
      height: '180'
    }
  },
  mutations: {
    changeName(state, name: string) {
      state.name = name
    }
  },

  actions: {},
  getters: {},
  modules: {
    login,
    system
  }
})

export function loadSetUpCacheInit() {
  store.dispatch('login/loadCacheInit')
}

// vuex类型函数
export function useStore(): Store<IRootUseStoreType> {
  return useVuexStore()
}

export default store
