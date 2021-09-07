<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-01 21:19:07
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-07 21:56:16
-->
<template>
  <div class="user">
    <div class="search">
      <own-form :formItems="formItems"></own-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OwnForm, { IFormItem } from '@/base_ui/own-form'

export default defineComponent({
  name: 'user',
  components: {
    OwnForm
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        value: '',
        placeHolder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        value: '',
        placeHolder: '请输入密码'
      },
      {
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
        type: 'datePicker',
        label: '创建时间',
        value: '',
        placeHolder: '请选择创建时间'
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped lang="less">
.search {
  padding: 20px;
}
</style>
