/*
 * @Description:
 * @Date: 2021-10-08 20:52:55
 * @LastEditTime: 2021-10-20 21:34:13
 */
import {
  getPageListData,
  removePageDataById,
  editPageDataById,
  createPageData
} from '@/service/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IPageListParams, ISystemState, ITableParamsConfig } from './types'

const firstLetterUpperCase: (letter: string) => string = (letter: string) => {
  return letter.substr(0, 1).toUpperCase() + letter.substr(1)
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      pageParams: {
        offset: 0,
        size: 10
      },
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
    setPageParams(state, params: ITableParamsConfig) {
      state.pageParams = params
    },
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
    },
    async removePageDataAction({ dispatch }, paylod: any) {
      const {
        item: { id },
        pageName,
        pageInfo
      } = paylod
      // console.info('paylod====', paylod)
      const requestUrl = `/${pageName}/${id}`
      await removePageDataById(requestUrl)
      // 重新获取页面表格数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: (pageInfo.currentPage - 1) * pageInfo.size,
          size: pageInfo.size
        }
      })
    },
    async editPageDataAction({ dispatch, state }, paylod: any) {
      const { pageName, data, id } = paylod

      await editPageDataById(`/${pageName}/${id}`, data)
      console.info('state.pageParAms', state.pageParams)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: state.pageParams
      })
    },

    async createPageDataAction({ dispatch, state }, paylod: any) {
      const { pageName, data } = paylod
      await createPageData(`/${pageName}`, data)
      console.info('state.pageParAms', state.pageParams)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: state.pageParams
      })
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
