<!--
 * @Description:
 * @Date: 2021-09-01 21:19:07
 * @LastEditTime: 2021-10-19 07:54:32
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
      @handle-new-click="newBtnClick"
      @handle-edit-click="editBtnClick($event)"
    >
      <template #status="scope">
        <el-tag type="success" v-if="scope.row['enable'] === 1">启用</el-tag>
        <el-tag type="danger" v-if="scope.row['enable'] !== 1">禁用</el-tag>
      </template>
    </page-content-table>
    <page-model
      ref="pageModelRef"
      :pageModelConfig="pageModelConfig"
      :defaultInfo="defaultInfo"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContentTable from '@/components/page-content'
import PageModel from '@/components/page-model'

import { searchFormConfig } from './config/searchForm.config'
import { contentTableConfig } from './config/contentTable.config'
import { pageModelConfig } from './config/pageModel.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContentTable, PageModel },
  setup() {
    const [pageContentTableRef, handleSearch, handleReset] = usePageSearch()

    const defaultInfo = ref({})
    const pageModelRef = ref<InstanceType<typeof PageModel>>()

    const newBtnClick = () => {
      if (pageModelRef.value) {
        pageModelRef.value.pageDialogVisible = true
      }
    }
    const editBtnClick = (item: any) => {
      if (pageModelRef.value) {
        defaultInfo.value = { ...item }
        pageModelRef.value.pageDialogVisible = true
      }
    }
    return {
      searchFormConfig,
      contentTableConfig,
      pageModelConfig,
      pageContentTableRef,
      handleSearch,
      handleReset,
      pageModelRef,
      defaultInfo,
      newBtnClick,
      editBtnClick
    }
  }
})
</script>

<style scoped lang="less"></style>
