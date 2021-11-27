<template>
  <div class="pie-echart">
    <own-echart :options="options"></own-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import OwnEchart from '@/base_ui/own-echart'
import { IDataType } from '../type'
// import { PieSeriesOption } from 'echarts'

const props = defineProps<{
  pieData: IDataType
}>()

const options = computed(() => {
  return {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
