<!--
 * @Description:
 * @Date: 2021-09-01 21:20:36
 * @LastEditTime: 2021-10-16 18:08:07
-->
<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content-table :contentTableConfig="contentTableConfig" pageName="role">
    </page-content-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchFormConfig } from './config/searchForm.config'
import { contentTableConfig } from './config/contentTable.config'

import PageSearch from '@/components/page-search'
import PageContentTable from '@/components/page-content'

export default defineComponent({
  name: 'role',
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
