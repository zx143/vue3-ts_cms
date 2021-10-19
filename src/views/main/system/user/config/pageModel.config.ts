/*
 * @Description:
 * @Date: 2021-10-17 12:04:37
 * @LastEditTime: 2021-10-20 07:29:54
 */
import { IPageModelConfig } from '@/components/page-model/types/type'
export const pageModelConfig: IPageModelConfig = {
  title: '新建用户',
  formConfig: {
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
        field: 'password',
        type: 'password',
        label: '密码',
        placeHolder: '请输入密码',
        isHidden: false
      },
      {
        field: 'cellphone',
        type: 'input',
        label: '电话号码',
        placeHolder: '请输入电话号码'
      },
      {
        field: 'departmentId',
        type: 'select',
        label: '部门',
        options: [],
        placeHolder: '请选择部门'
      },
      {
        field: 'roleId',
        type: 'select',
        label: '角色',
        options: [],
        placeHolder: '请选择角色'
      }
    ],
    colLayout: {
      md: 24
    },
    itemStyle: {}
  }
}
