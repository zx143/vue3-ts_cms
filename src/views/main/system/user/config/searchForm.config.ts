/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-08 21:41:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-07 21:03:11
 */
import { IForm } from '@/base_ui/own-form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeHolder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeHolder: '请输入密码'
    },
    {
      field: 'sports',
      type: 'select',
      label: '爱好',
      options: [
        { label: '吃饭', value: '0' },
        { label: '睡觉', value: '1' },
        { label: '996', value: '2' }
      ],
      placeHolder: '请选择爱好'
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
