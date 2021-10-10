<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-01 21:19:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-10 12:52:34
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <own-table
        :dataList="userList"
        :propList="propListConfig"
        :showIndexColumn="true"
        columnAlign="center"
      >
        <!-- 预留名称插槽进行数据转换渲染 -->
        <template #status="scope">
          <el-tag type="success" v-if="scope.row['enable'] === 1">启用</el-tag>
          <el-tag type="danger" v-if="scope.row['enable'] !== 1">禁用</el-tag>
        </template>

        <template #createAt="scope">
          {{ $filters.formatTime(scope.row.createAt) }}
        </template>

        <template #updateAt="scope">
          {{ $filters.formatTime(scope.row.updateAt) }}
        </template>
      </own-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import OwnTable from '@/base_ui/own-table'
import { searchFormConfig } from './config/searchForm.config'
import { IPageListParams } from '@/store/main/system/types'

export default defineComponent({
  name: 'user',
  components: { PageSearch, OwnTable },
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
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propListConfig = [
      { prop: 'name', label: '用户名', minWidth: 100 },
      { prop: 'realname', label: '真实姓名', minWidth: 100 },
      { prop: 'cellphone', label: '电话号码', minWidth: 100 },
      { prop: 'enable', label: '状态', minWidth: 100, slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: 250, slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: 250, slotName: 'updateAt' }
    ]
    return {
      searchFormConfig,
      userList,
      userCount,
      propListConfig
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
