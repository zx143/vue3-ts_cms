<template>
  <div class="rose-echart">
    <own-echart :options="options"></own-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import OwnEchart from '@/base_ui/own-echart'
import { IDataType } from '../type'
const props = defineProps<{
  roseData: IDataType[]
}>()
const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>
