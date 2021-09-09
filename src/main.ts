/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 12:16:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 21:00:08
 */
import { createApp } from 'vue'

import { globalRegister } from './global'
// import './service/axios_demo'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
// import gqRequest from './service'

// console.log('app', process.env.VUE_APP_BASE_URL)
// console.log('app', process.env.BASE_URL)
// interface getHomeDate {
//   data: any
//   returnCode: string
//   success: boolean
// }

/*gqRequest
  .get<getHomeDate>({
    url: '/home/multidata',
    interceptors: {
      requestInterceptor(config) {
        console.log('单独请求的拦截器')
        return config
      },
      responseInterceptor(res) {
        console.log('单独响应的拦截器', res)
        return res
      }
    }
  })
  .then((res) => {
    console.log('result====>', res.data, res.returnCode, res.success)
  })*/
import { loadSetUpCacheInit } from './store/index'
const app = createApp(App)
// globalRegister(app)
app.use(globalRegister)
// 注册vuex
app.use(store)
// 初始化获取vuex数据
loadSetUpCacheInit()
// 注册路由
app.use(router)
// 挂载页面
app.mount('#app')
