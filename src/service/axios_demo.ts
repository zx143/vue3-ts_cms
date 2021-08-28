/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-29 07:45:35
 * @LastEditors: zgq
 * @LastEditTime: 2021-07-29 21:03:03
 */
import axios from 'axios'

// 全局配置
axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
// axios.request({
//   method: 'GET'
// })
// https://api.juejin.cn/interact_api/v1/message/count
axios
  .get('/get', {
    params: {
      name: 'zs',
      age: 22
    },
    // 单独配置
    timeout: 3000,
    headers: {}
  })
  .then(({ data }) => {
    console.info('res', data)
  })

axios
  .post('/post', {
    name: 'post',
    type: 'mock'
  })
  .then((res) => {
    console.info('post', res.data)
  })

// axios拦截器
/**
 * fn1  请求成功
 * fn2 请求失败
 * */
// 请求发送成功 可以加载loading  token 等等
axios.interceptors.request.use(
  (config) => {
    console.log('请求成功')
    return config
  },
  (error) => {
    console.log('请求失败')
    console.log(error)
  }
)
// 数据响应成功, 服务器返回200
axios.interceptors.response.use(
  (resolve) => {
    console.log('响应成功', resolve)
    return resolve
  },
  (reject) => {
    console.log('响应失败', reject)
    return reject
  }
)
