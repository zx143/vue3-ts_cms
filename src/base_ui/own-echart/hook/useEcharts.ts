import * as echarts from 'echarts'
import chinanMapData from '../data/china.json'

echarts.registerMap('china', chinanMapData)

export function useEcharts(el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateInstanceSize = () => echartInstance.resize()

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateInstanceSize
  }
}
