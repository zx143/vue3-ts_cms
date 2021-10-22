/*
 * @Description:
 * @Date: 2021-10-17 12:04:37
 * @LastEditTime: 2021-10-21 21:05:36
 */
import { IPageModelConfig } from '@/components/page-model/types/type'
export const pageModelConfig: IPageModelConfig = {
  title: '新建角色',
  formConfig: {
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '角色名',
        placeHolder: '请输入角色名'
      },
      {
        field: 'intro',
        type: 'input',
        label: '角色介绍',
        placeHolder: '请输入角色介绍'
      }
    ],
    colLayout: {
      md: 24
    },
    itemStyle: {}
  }
}
