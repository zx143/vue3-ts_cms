/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 17:11:36
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-28 10:26:54
 */
import { createStore } from 'vuex'
import type { IRootState } from './types'
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

export default store
