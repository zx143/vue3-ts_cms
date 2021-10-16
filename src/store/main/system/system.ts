/*
 * @Description:
 * @Date: 2021-10-08 20:52:55
 * @LastEditTime: 2021-10-16 19:27:26
 */
import { getPageListData } from '@/service/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IPageListParams, ISystemState } from './types'

const firstLetterUpperCase: (letter: string) => string = (letter: string) => {
  return letter.substr(0, 1).toUpperCase() + letter.substr(1)
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    setUsersList(state, list: any[]) {
      state.usersList = list
    },
    setUsersCount(state, count: number) {
      state.usersCount = count
    },
    setRoleList(state, list: any[]) {
      state.roleList = list
    },
    setRoleCount(state, count: number) {
      state.roleCount = count
    },
    setGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    setGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    setMenuList(state, list: any[]) {
      state.menuList = list
    },
    setMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, paylod: IPageListParams) {
      const requestUrl = `${paylod?.pageName}/list`
      // console.log('paylod', paylod)
      // 发送请求
      const result = await getPageListData(requestUrl, paylod.queryInfo)
      // console.info('result', result)
      const { list, totalCount } = result.data
      commit(`set${firstLetterUpperCase(paylod?.pageName)}Count`, totalCount)
      commit(`set${firstLetterUpperCase(paylod?.pageName)}List`, list)
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        const key = `${pageName}List`
        return (state as any)[key]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        const key = `${pageName}Count`
        return (state as any)[key]
      }
    }
  }
}

export default systemModule
