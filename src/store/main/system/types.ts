/*
 * @Description:
 * @Date: 2021-10-08 20:53:06
 * @LastEditTime: 2021-10-20 21:26:34
 */
export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
  pageParams: ITableParamsConfig
}

export interface ITableParamsConfig {
  offset: number
  size: number
  [key: string]: any
}

export interface IPageListParams {
  pageName: string
  requestUrl?: string
  queryInfo: ITableParamsConfig
}

export interface IPageListData {
  list: any[]
  totalCount: number
}
