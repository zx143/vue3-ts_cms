/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-08 21:41:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-16 18:04:58
 */
import { IForm } from '@/base_ui/own-form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeHolder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeHolder: '请输入商品地址'
    },

    {
      field: 'enable',
      type: 'select',
      label: '状态',
      options: [
        { label: '已上架', value: '1' },
        { label: '待上架', value: '0' }
      ],
      placeHolder: '请选择商品状态'
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
