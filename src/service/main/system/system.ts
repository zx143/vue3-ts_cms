/*
 * @Description:
 * @Date: 2021-10-08 21:27:03
 * @LastEditTime: 2021-10-08 21:48:09
 */
import gqRequest from '@/service'
import { IDataType } from '@/service/login/type'
import { IPageListData, ITableParamsConfig } from '@/store/main/system/types'

export function getPageListData(url: string, queryInfo: ITableParamsConfig) {
  return gqRequest.post<IDataType<IPageListData>>({
    url,
    data: queryInfo
  })
}
