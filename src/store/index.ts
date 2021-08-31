/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 17:11:36
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-30 21:15:15
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IRootUseStoreType } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'zgq',
      age: 20,
      height: '180'
    }
  },
  mutations: {
    changeName(state) {
      state.name
    }
  },

  actions: {},
  getters: {},
  modules: {
    login
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
