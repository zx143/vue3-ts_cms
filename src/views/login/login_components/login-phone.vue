<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-01 20:38:11
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-04 08:03:35
-->
<template>
  <div class="phone">
    <!-- <el-form label-width="70px" :rules="rules" ref="phoneFormRef" :v-model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="verification-form">
          <el-input class="form" v-model="phone.code"></el-input>
          <el-button type="primary" class="code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form> -->

    <el-form :rules="rules" :model="phone" ref="phoneFormRef" label-width="70px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="verification-form">
          <el-input class="form" v-model="phone.code"></el-input>
          <el-button type="primary" class="code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    const store = useStore()
    const phoneFormRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      // 登录逻辑
      phoneFormRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLogin', { ...phone })
        }
      })
    }

    return {
      phone,
      rules,
      phoneFormRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.verification-form {
  display: flex;
  .el-input {
    flex: 1;
  }
  .code-btn {
    margin-left: 10px;
    padding: 0 8px;
  }
}
</style>
