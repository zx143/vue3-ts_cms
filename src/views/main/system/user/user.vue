<!--
 * @Description:
 * @Date: 2021-09-01 21:19:07
 * @LastEditTime: 2021-10-16 18:01:51
-->
<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleSearch="handleSearch($event)"
      @handleReset="handleReset"
    />
    <page-content-table
      ref="pageContentTableRef"
      :contentTableConfig="contentTableConfig"
      headerHandleBtnText="新建用户"
      pageName="users"
    >
      <template #status="scope">
        <el-tag type="success" v-if="scope.row['enable'] === 1">启用</el-tag>
        <el-tag type="danger" v-if="scope.row['enable'] !== 1">禁用</el-tag>
      </template>
    </page-content-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContentTable from '@/components/page-content'

import { searchFormConfig } from './config/searchForm.config'
import { contentTableConfig } from './config/contentTable.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContentTable },
  setup() {
    const [pageContentTableRef, handleSearch, handleReset] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentTableRef,
      handleSearch,
      handleReset
    }
  }
})
</script>

<style scoped lang="less"></style>
