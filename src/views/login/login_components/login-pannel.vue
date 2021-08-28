<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-01 15:41:39
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-04 07:58:06
-->
<template>
  <div class="login-pannel">
    <h1>vue3后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <!-- 记住密码 -->
    <div class="account-control">
      <el-checkbox v-model="isKeppPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button @click="loginClick" type="primary" class="login-btn">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'login-pannel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeppPassword = ref(false)
    const currentTab = ref<string>('account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const loginClick = () => {
      console.log('login click')
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeppPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }
    return { isKeppPassword, loginClick, accountRef, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-pannel {
  width: 320px;
  text-align: center;

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
