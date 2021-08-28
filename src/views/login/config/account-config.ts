/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-01 21:22:05
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-01 21:22:58
 */
// 表单规则
export const rules = {
  name: [
    { required: true, message: '用户名为必填项', trigger: 'blur' },
    {
      pattern: /^\w{5,10}$/,
      message: '用户名必须为5-10个字母数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码为必填项',
      trigger: 'blur'
    },
    {
      pattern: /^\w{3,}$/,
      message: '密码必须在3个字符以上',
      trigger: 'blur'
    }
  ]
}
