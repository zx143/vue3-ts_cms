<!--
 * @Description:
 * @Date: 2021-09-01 21:23:33
 * @LastEditTime: 2021-10-16 18:06:33
-->
<template>
  <div class="goods">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content-table
      ref="pageContentTableRef"
      :contentTableConfig="contentTableConfig"
      headerHandleBtnText="新建商品"
      pageName="goods"
    >
      <template #img="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #priceUnit="scope">
        {{ '¥' + scope.row.oldPrice }}
      </template>
      <template #status="scope">
        <el-tag type="success" v-if="scope.row.status === 1">已上架</el-tag>
        <el-tag type="warning" v-if="scope.row.status !== 1">待上架</el-tag>
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
export default defineComponent({
  name: 'goods',
  components: { PageSearch, PageContentTable },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
