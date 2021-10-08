/*
 * @Description:
 * @Date: 2021-10-08 20:53:06
 * @LastEditTime: 2021-10-08 21:47:55
 */
export interface ISystemState {
  userList: any[]
  userCount: number
}

export interface ITableParamsConfig {
  offset: number
  size: number
}

export interface IPageListParams {
  requestUrl: string
  queryInfo: ITableParamsConfig
}

export interface IPageListData {
  list: any[]
  totalCount: number
}
