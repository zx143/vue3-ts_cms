/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-29 21:56:20
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-07 21:58:24
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GQRequestConfig, GQRequestInterceptors } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true

class GQRequest {
  instance: AxiosInstance
  interceptors?: GQRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean
  constructor(config: GQRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 私有拦截器 外部传入
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 公有拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('公有请求拦截器')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '拼命加载中...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('公有响应拦截器', res)
        // 响应成功 移除loading
        this.loading?.close()

        const data = res.data
        if (data?.returnCode === '-1001') {
          console.log('请求错误, 错误信息')
        } else {
          return data
        }
        // return data
      },
      (err) => {
        // 响应失败
        this.loading?.close()
        switch (err.response.status) {
          case 404:
            console.warn('404 错误')
            break

          default:
            break
        }
        return err
      }
    )
  }

  // 请求
  request<T>(config: GQRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.showLoading = config.showLoading ?? DEFAULT_LOADING
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求响应拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // loading是否显示初始化
          this.showLoading = DEFAULT_LOADING
          // console.log('responseInterceptor rs =====>', res)
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  patch<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default GQRequest
