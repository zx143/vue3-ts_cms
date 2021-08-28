/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 12:16:14
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-28 10:27:38
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
// 注册路由
app.use(router)
// 注册vuex
app.use(store)
loadSetUpCacheInit()
// 挂载页面
app.mount('#app')
