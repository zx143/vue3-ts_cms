/*
 * @Description:
 * @Date: 2021-10-08 21:27:03
 * @LastEditTime: 2021-10-20 21:23:53
 */
import gqRequest from '@/service'
import { IDataType } from '@/service/types'
import { IPageListData, ITableParamsConfig } from '@/store/main/system/types'

export function getPageListData(url: string, queryInfo: ITableParamsConfig) {
  return gqRequest.post<IDataType<IPageListData>>({
    url,
    data: queryInfo
  })
}

export function removePageDataById(url: string) {
  return gqRequest.delete<IDataType>({
    url
  })
}

export function editPageDataById(url: string, data: any) {
  return gqRequest.patch<IDataType>({
    url,
    data
  })
}

export function createPageData(url: string, data: any) {
  return gqRequest.post<IDataType>({
    url,
    data
  })
}
