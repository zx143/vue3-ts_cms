/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-06 08:02:10
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-30 22:08:33
 */

export interface IAccount {
  name: string
  password: string
}

export interface ILoginRs {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export interface IRole {
  intro: string
}

export interface IUserInfo {
  id: number
  name: string
  parentId: number
  createAt: Date
  updateAt?: Date
  leader?: string
  cellphone?: number
  department?: IUserInfo
  realname?: string
  role: IUserInfo & IRole
}
