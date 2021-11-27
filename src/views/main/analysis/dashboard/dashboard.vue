<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <own-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </own-card>
      </el-col>
      <el-col :span="10">
        <own-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale"></map-echart>
        </own-card>
      </el-col>
      <el-col :span="7">
        <own-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount"></rose-echart>
        </own-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="mt-10">
      <el-col :span="12">
        <own-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </own-card>
      </el-col>
      <el-col :span="12">
        <own-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </own-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import OwnCard from '@/base_ui/own-card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'
import { IDataType } from '@/components/page-echarts/type'

export default defineComponent({
  name: 'dashboard',
  components: {
    OwnCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const categoryGoodsCount = computed<IDataType[]>(() => {
      return store.state.dashboard.categoryGoodsCount.map((x: any) => {
        return {
          name: x.name,
          value: x.goodsCount
        }
      })
    })
    const categoryGoodsSale = computed(() => {
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      const xLabels: string[] = []
      const valueList: any[] = []
      for (const iterator of categoryGoodsSale) {
        xLabels.push(iterator.name)
        valueList.push(iterator.goodsCount)
      }
      return {
        xLabels,
        valueList
      }
    })
    const categoryGoodsFavor = computed(() => {
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      const xLabels: string[] = []
      const valueList: any[] = []
      for (const iterator of categoryGoodsFavor) {
        xLabels.push(iterator.name)
        valueList.push(iterator.goodsFavor)
      }
      return {
        xLabels,
        valueList
      }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((x: any) => {
        return {
          name: x.address,
          value: x.count
        }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.mt-10 {
  margin-top: 10px;
}
</style>
