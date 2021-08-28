<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-01 20:38:11
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-03 22:13:17
-->
<template>
  <div class="account">
    <el-form :rules="rules" :model="account" ref="loginFormRef" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { ElForm, ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('userInfo')?.name,
      password: localCache.getCache('userInfo')?.password
    })
    const loginFormRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeppPassword: boolean) => {
      loginFormRef.value?.validate((valid) => {
        if (!valid) {
          ElMessage({
            showClose: true,
            message: '账号或密码格式不正确',
            type: 'warning'
          })
          return false
        }
        if (isKeppPassword) {
          // 进行本地缓存
          localCache.setCache('userInfo', account)
        } else {
          localCache.delCache('userInfo')
        }
        console.log('登陆校验通过...')
        store.dispatch('login/accountLogin', { ...account })
      })
    }

    return {
      account,
      rules,
      loginAction,
      loginFormRef
    }
  }
})
</script>

<style scoped lang="less"></style>
