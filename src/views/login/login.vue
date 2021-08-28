<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 16:45:28
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-01 15:44:59
-->
<template>
  <div class="login">
    <login-pannel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPannel from './login_components/login-pannel.vue'
export default defineComponent({
  components: {
    LoginPannel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login-bg.svg');
}
</style>
