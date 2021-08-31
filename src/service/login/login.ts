/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-06 08:00:41
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-30 22:07:25
 */

import gqRequest from '../index'

import { IAccount, IDataType, ILoginRs, IUserInfo } from './type'

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
