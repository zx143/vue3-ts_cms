/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-29 21:10:55
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-07 08:05:27
 */
let BASE_URL: string
const TIMEOUT = 10000
enum devMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test'
}
if (process.env.NODE_ENV === devMode.DEVELOPMENT) {
  // 触发服务器代理 解决开发阶段跨域
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === devMode.PRODUCTION) {
  BASE_URL = '生产环境'
} else {
  BASE_URL = '测试环境'
}

export { BASE_URL, TIMEOUT }
