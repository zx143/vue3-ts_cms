import { IBreadcrumb } from '@/base_ui/nav-breadcrumb'
import { RouteRecordRaw } from 'vue-router'

/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-02 20:43:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-10 22:05:14
 */

let defaultFirstMenuRoute: any = null

const deepDiffRoute = (userMenus: any[], allRoutes: any[], rs: any[] = []): any[] => {
  for (const menu of userMenus) {
    if (menu.type === 2) {
      const route = allRoutes.find((r) => r.path === menu.url)
      if (route) {
        if (!defaultFirstMenuRoute) defaultFirstMenuRoute = route
        rs.push(route)
      }
    } else {
      if (menu.children) deepDiffRoute(menu.children, allRoutes, rs)
    }
  }
  // console.warn('rs', rs)
  return rs
}

export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const menuRoutes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  // 获取本地文件中的所有权限路由
  const routerFiles = require.context('../router/main', true, /\.ts/)
  routerFiles.keys().map((r) => {
    // const routePath = `../router/main${r.split('.')[1]}`
    const routeItem = require('../router/main' + r.substr(1))
    allRoutes.push(routeItem.default)
  })
  // console.info('userMenus', userMenus)
  // 和用户权限菜单进行对比,配置动态权限路由
  deepDiffRoute(userMenus, allRoutes, menuRoutes)
  // console.log('menuRoutes', menuRoutes )
  return menuRoutes
}

/**
 *
 * 获取当前url路由对应的菜单信息
 * @export
 * @param {any[]} userMenus
 * @param {string} currentRoute
 * @return {*}  {*}
 */
export function getActiveMenu(
  userMenus: any[],
  currentRoute: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      // 递归遍历children
      const rs = getActiveMenu(menu.children ?? [], currentRoute)
      if (rs) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: rs.name })
        return rs
      }
    } else if (menu.type === 2 && menu.url === currentRoute) {
      return menu
    }
  }
}
/* 获取对应菜单的面包屑 */
export function getActiveBreadcrumb(userMenus: any[], currentRoute: string) {
  const breadcrumbs: IBreadcrumb[] = []
  getActiveMenu(userMenus, currentRoute, breadcrumbs)
  return breadcrumbs
}

export { defaultFirstMenuRoute }
