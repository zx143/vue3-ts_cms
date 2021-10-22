/*
 * @Description:
 * @Date: 2021-10-10 12:37:31
 * @LastEditTime: 2021-10-21 07:24:04
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
// 继承
dayjs.extend(utc)
const DATE_FORMAT_DEFAULT = 'YYYY-MM-DD HH:mm:ss'

export const formatUtcDate = (utcDate: string, formatText: string = DATE_FORMAT_DEFAULT) => {
  if (!utcDate) return dayjs.unix(+new Date()).format(formatText)
  return dayjs.utc(utcDate).utcOffset(8).format(formatText)
}
