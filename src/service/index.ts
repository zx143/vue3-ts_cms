/*
 * @Description: service 统一出口
 * @Author: zgq
 * @Date: 2021-07-29 21:53:55
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-15 21:51:51
 */
import GQRequest from './request'
import { BASE_URL, TIMEOUT } from '@/config/base'
import cacheLocal from '@/utils/cache'

const gqRequest = new GQRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 请求头添加 token
      const token = cacheLocal.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('私有实例请求拦截器')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('response success  私有实例响应拦截器', res)
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('response fail')
      return err
    }
  }
})
export default gqRequest
