/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-08 21:41:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-16 14:23:34
 */
import { IForm } from '@/base_ui/own-form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeHolder: '请输入电话号码'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' }
      ],
      placeHolder: '请选择用户状态'
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
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  itemStyle: {
    padding: '10px 15px'
  },
  labelWidth: '120px'
}
