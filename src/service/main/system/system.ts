/*
 * @Description:
 * @Date: 2021-10-08 21:27:03
 * @LastEditTime: 2021-10-22 22:41:10
 */
import gqRequest from '@/service'
import { IDataType } from '@/service/types'
import { IPageListData } from '@/store/main/system/types'

export function getPageListData(url: string, queryInfo: any) {
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
