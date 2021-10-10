/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-29 07:16:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-10 12:36:25
 */

import { App } from 'vue'
import registerElementPlus from './register-element-plus'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  // registerElementPlus(app)
  app.use(registerElementPlus)
  app.use(registerProperties)
}
