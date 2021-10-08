/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-06 08:02:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-09 06:41:08
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
