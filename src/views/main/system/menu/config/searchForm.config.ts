/*
 * @Description:
 * @Date: 2021-10-16 19:32:28
 * @LastEditTime: 2021-10-16 19:33:18
 */
import { IForm } from '@/base_ui/own-form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '菜单名称',
      placeHolder: '请输入菜单名称'
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
