/*
 * @Description:
 * @Date: 2021-10-08 20:52:55
 * @LastEditTime: 2021-10-08 21:49:34
 */
import { getPageListData } from '@/service/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IPageListParams, ISystemState } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    setUserCount(state, count: number) {
      state.userCount = count
    },
    setUserList(state, list: any[]) {
      state.userList = list
    }
  },
  actions: {
    async getPageListAction({ commit }, paylod: IPageListParams) {
      console.log('paylod', paylod)
      // 发送请求
      const result = await getPageListData(paylod.requestUrl, paylod.queryInfo)
      console.info('result', result)
      const { list, totalCount } = result.data
      commit('setUserCount', totalCount)
      commit('setUserList', list)
    }
  }
}

export default systemModule
