<!--
 * @Description:
 * @Date: 2021-09-01 21:19:07
 * @LastEditTime: 2021-10-20 21:27:35
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
      :pageModelConfig="pageModelConfigRef"
      :defaultInfo="defaultInfo"
      pageName="users"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContentTable from '@/components/page-content'
import PageModel from '@/components/page-model'

import { searchFormConfig } from './config/searchForm.config'
import { contentTableConfig } from './config/contentTable.config'
import { pageModelConfig } from './config/pageModel.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-page-model'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContentTable, PageModel },
  setup() {
    const [pageContentTableRef, handleSearch, handleReset] = usePageSearch()
    // pagemodel 页面事件回调
    const newBtnCallBack = () => {
      // 显示密码表单项
      const passwordItem = pageModelConfig.formConfig.formItems.find((x) => x.field === 'password')
      passwordItem!.isHidden = false
    }
    const editBtnCallBack = () => {
      // 隐藏
      const passwordItem = pageModelConfig.formConfig.formItems.find((x) => x.field === 'password')
      passwordItem!.isHidden = true
    }

    /**
     *  动态添加vuex数据到表单组件
     *  由于数据异步请求原因
     *  需要使用computed响应式监听数据改变同步更新到视图层
     * */
    const store = useStore()
    const pageModelConfigRef = computed(() => {
      const departmentItem = pageModelConfig.formConfig.formItems.find(
        (x) => x.field === 'departmentId'
      )
      departmentItem!.options = store.state.departmentList.map((x) => ({
        label: x.name,
        value: x.id
      }))

      const roleItem = pageModelConfig.formConfig.formItems.find((x) => x.field === 'roleId')
      roleItem!.options = store.state.roleList.map((x) => ({ label: x.name, value: x.id }))

      return pageModelConfig
    })

    const [pageModelRef, defaultInfo, newBtnClick, editBtnClick] = usePageModel(
      newBtnCallBack,
      editBtnCallBack
    )

    return {
      searchFormConfig,
      contentTableConfig,
      pageModelConfigRef,
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
