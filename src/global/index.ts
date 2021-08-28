/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-29 07:16:43
 * @LastEditors: zgq
 * @LastEditTime: 2021-07-29 07:37:01
 */

import { App } from 'vue'
import registerElementPlus from './register-element-plus'
export function globalRegister(app: App): void {
  // registerElementPlus(app)
  app.use(registerElementPlus)
}
