<!--
 * @Description:
 * @Date: 2021-09-01 21:20:36
 * @LastEditTime: 2021-10-22 22:46:55
-->
<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content-table
      :contentTableConfig="contentTableConfig"
      pageName="role"
      headerHandleBtnText="新建角色"
      @handle-new-click="newBtnClick"
      @handle-edit-click="editBtnClick($event)"
    >
    </page-content-table>
    <page-model
      ref="pageModelRef"
      :pageModelConfig="pageModelConfig"
      :defaultInfo="defaultInfo"
      pageName="role"
      :orderInfo="orderInfo"
    >
      <div class="tree-menu">
        <el-tree
          :data="treeData"
          @check="selectRoleIntroChange"
          show-checkbox
          node-key="id"
          :props="defaultProps"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

import { searchFormConfig } from './config/searchForm.config'
import { contentTableConfig } from './config/contentTable.config'
import { pageModelConfig } from './config/pageModel.config'

import PageSearch from '@/components/page-search'
import PageContentTable from '@/components/page-content'
import PageModel from '@/components/page-model'

import { usePageModel } from '@/hooks/use-page-model'
import { useStore } from '@/store'

export default defineComponent({
  name: 'role',
  components: { PageSearch, PageContentTable, PageModel },
  setup() {
    const store = useStore()
    const [pageModelRef, defaultInfo, newBtnClick, editBtnClick] = usePageModel()
    const treeData = computed(() => store.state.entireMenu)
    const defaultProps = { children: 'children', label: 'name' }

    const orderInfo = ref({})
    const selectRoleIntroChange = (data: any, data2: any) => {
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      // console.log('menuList', menuList)
      orderInfo.value = { menuList }
    }
    return {
      searchFormConfig,
      contentTableConfig,
      pageModelConfig,
      pageModelRef,
      defaultInfo,
      newBtnClick,
      editBtnClick,
      treeData,
      defaultProps,
      selectRoleIntroChange,
      orderInfo
    }
  }
})
</script>

<style scoped>
.tree-menu {
  margin-left: 25px;
}
</style>
