/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-01 21:34:21
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-02 08:01:35
 */
// 表单规则
export const rules = {
  num: [
    { required: true, message: '手机号为必填项', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号格式不正确,必须为11位数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码必填项',
      trigger: 'blur'
    },
    {
      pattern: /^\d{6}$/,
      message: '验证码为6位数字',
      trigger: 'blur'
    }
  ]
}
