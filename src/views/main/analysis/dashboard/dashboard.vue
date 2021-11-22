<template>
  <div class="dashboard">
    <div ref="divRef" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as Echarts from 'echarts'
import { useStore } from '@/store'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      const echartsInstance = Echarts.init(divRef.value!, 'dark', {
        renderer: 'svg'
      })
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      echartsInstance.setOption(option)
    })
    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
