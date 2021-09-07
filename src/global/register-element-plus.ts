/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-29 07:31:47
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-06 21:20:34
 */

import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

import {
  ElButton,
  ElAside,
  ElRadio,
  ElCard,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElMessage,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
} from 'element-plus'

const components = [
  ElButton,
  ElAside,
  ElRadio,
  ElCard,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElMessage,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
