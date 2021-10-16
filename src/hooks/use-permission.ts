/*
 * @Description:
 * @Date: 2021-10-16 20:17:01
 * @LastEditTime: 2021-10-16 20:32:14
 */
import { useStore } from '@/store'

/**
 * 验证用户是否拥有该名称权限
 * @param {string} pageName 对应表格权限名称  => users  role ...
 * @param {string} handleName 用户操作权限 => create delete query update ...
 * @return {boolean}
 */
export function useVerificationUserPermission(pageName: string, handleName: string) {
  const store = useStore()
  const verifyPermissionName = `system:${pageName}:${handleName}`
  return store.state.login.permission.includes(verifyPermissionName)
}
