<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-01 21:19:07
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-08 21:51:10
-->
<template>
  <div class="user">
    <own-form v-bind="searchFormConfig"></own-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OwnForm from '@/base_ui/own-form'
import { searchFormConfig } from './config/searchForm.config'

export default defineComponent({
  name: 'user',
  components: {
    OwnForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
