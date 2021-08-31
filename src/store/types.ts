/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-03 22:00:44
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-30 21:09:55
 */

import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IRootUseStoreType = IRootState & IRootWithModule
