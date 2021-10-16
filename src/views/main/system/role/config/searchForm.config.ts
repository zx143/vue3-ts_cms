/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-08 21:41:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-13 06:54:44
 */
import { IForm } from '@/base_ui/own-form'
export const searchFormConfig: IForm = {
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
      label: '权限介绍',
      placeHolder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px'
}
