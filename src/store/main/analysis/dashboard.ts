import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IDashboardStatus } from './type'

const dashboardModule: Module<IDashboardStatus, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    setCategoryGoodsCount(state, list: any[]) {
      state.categoryGoodsCount = list
    },
    setCategoryGoodsSale(state, list: any[]) {
      state.categoryGoodsSale = list
    },
    setCategoryGoodsFavor(state, list: any[]) {
      state.categoryGoodsFavor = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      console.log(1)
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      const categoryGoodsCountList = categoryGoodsCountResult.data
      if (categoryGoodsCountList) {
        commit('setCategoryGoodsCount', categoryGoodsCountList)
      }

      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      const categoryGoodsSaleList = categoryGoodsSaleResult.data
      if (categoryGoodsSaleList) {
        commit('setCategoryGoodsSale', categoryGoodsSaleList)
      }

      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      const categoryGoodsFavorList = categoryGoodsFavorResult.data
      if (categoryGoodsFavorList) {
        commit('setCategoryGoodsFavor', categoryGoodsFavorList)
      }

      const addressGoodsSaleResult = await getAddressGoodsSale()
      const addressGoodsSaleList = addressGoodsSaleResult.data
      if (addressGoodsSaleList) {
        commit('setAddressGoodsSale', addressGoodsSaleList)
      }
    }
  }
}

export default dashboardModule
