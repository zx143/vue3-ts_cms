<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-01 21:19:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-08 07:48:16
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/searchForm.config'

export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
