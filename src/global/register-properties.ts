/*
 * @Description:
 * @Date: 2021-10-10 12:33:57
 * @LastEditTime: 2021-10-16 20:07:21
 */
import { formatUtcDate } from '@/utils/date-format'
import { App } from 'vue'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcDate(value)
    },
    toJson(val: any) {
      return JSON.stringify(val)
    }
  }
}
