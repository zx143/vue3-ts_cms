/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 12:16:14
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-01 14:46:51
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any

declare const BASE_URL: string
