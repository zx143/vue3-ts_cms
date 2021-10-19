/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-03 22:00:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-20 07:31:37
 */

import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  departmentList: any[]
  roleList: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IRootUseStoreType = IRootState & IRootWithModule
