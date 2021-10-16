<!--
 * @Description:
 * @Date: 2021-09-01 21:20:55
 * @LastEditTime: 2021-10-16 19:48:50
-->
<template>
  <div class="menu">
    <!-- <page-search :searchFormConfig="searchFormConfig" /> -->
    <page-content-table
      ref="pageContentTableRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    >
    </page-content-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import PageSearch from '@/components/page-search'
import PageContentTable from '@/components/page-content'

// import { searchFormConfig } from './config/searchForm.config'
import { contentTableConfig } from './config/contentTable.config'
export default defineComponent({
  name: 'menu-view',
  components: { PageContentTable },
  setup() {
    return {
      // searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
