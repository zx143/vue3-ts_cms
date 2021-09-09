import { RouteRecordRaw } from 'vue-router'

/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-02 20:43:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 21:48:38
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
export function getActiveMenu(userMenus: any[], currentRoute: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      // 递归遍历children
      const rs = getActiveMenu(menu.children ?? [], currentRoute)
      if (rs) return rs
    } else if (menu.type === 2 && menu.url === currentRoute) {
      return menu
    }
  }
}

export { defaultFirstMenuRoute }
