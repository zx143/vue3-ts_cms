<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-01 21:19:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-08 21:39:13
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/searchForm.config'
import { IPageListParams } from '@/store/main/system/types'

export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    const store = useStore()
    const pageListParams: IPageListParams = {
      requestUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    }
    store.dispatch('system/getPageListAction', pageListParams)
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
