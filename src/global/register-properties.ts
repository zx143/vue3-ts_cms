/*
 * @Description:
 * @Date: 2021-10-10 12:33:57
 * @LastEditTime: 2021-10-10 12:41:41
 */
import { formatUtcDate } from '@/utils/format'
import { App } from 'vue'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcDate(value)
    }
  }
}
