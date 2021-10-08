/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-06 08:00:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 06:41:39
 */

import gqRequest from '../index'
import { IDataType } from '../types'

import { IAccount, ILoginRs, IUserInfo } from './type'

enum loginAPI {
  AccountLogin = '/login',
  AccountUserInfo = '/users/',
  getUserMenus = '/role/'
}

export const accountLoginRequest = (account: IAccount) => {
  return gqRequest.post<IDataType<ILoginRs>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export const accountUserInfo = (userId: number) => {
  return gqRequest.get<IDataType<IUserInfo>>({
    url: loginAPI.AccountUserInfo + userId,
    showLoading: false
  })
}

export const getUserMenus = (userRoleId: number) => {
  return gqRequest.get<IDataType>({
    url: loginAPI.getUserMenus + userRoleId + '/menu',
    showLoading: false
  })
}
