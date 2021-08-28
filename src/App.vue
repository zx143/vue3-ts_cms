<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-07-24 12:16:14
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-01 15:39:48
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
