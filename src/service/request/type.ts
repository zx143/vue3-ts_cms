/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-30 07:48:24
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-01 14:04:49
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface GQRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface GQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GQRequestInterceptors<T>
  showLoading?: boolean
}
