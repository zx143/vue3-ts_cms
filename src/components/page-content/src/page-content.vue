<!--
 * @Description:
 * @Date: 2021-10-10 20:35:43
 * @LastEditTime: 2021-10-20 21:46:06
-->
<template>
  <div class="page-content">
    <own-table
      :dataList="dataList"
      :listCount="dataListCount"
      v-model:page="pageInfo"
      v-bind="contentTableConfig"
    >
      <template v-slot:headerHandle>
        <el-button v-if="headerHandleBtnText && isCreate" type="primary" @click="handleNewClick">{{
          headerHandleBtnText
        }}</el-button>
      </template>

      <!-- 预留名称插槽进行数据转换渲染 -->

      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>

      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>

      <template #operation="scope">
        <div class="operation-btns">
          <el-button
            v-if="isUpdate"
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            style="color: rgb(255, 84, 98)"
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="removeItemClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 插入页面私有剩余插槽 -->
      <template v-for="item in otherSlotList" #[item.slotName]="scope" :key="item.prop">
        <template v-if="item.slotName">
          <slot :name="[item.slotName]" :row="scope.row"></slot>
        </template>
      </template>
    </own-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import OwnTable from '@/base_ui/own-table'
import { useStore } from '@/store'
import { IPageListParams } from '@/store/main/system/types'
import { useVerificationUserPermission } from '@/hooks/use-permission'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    headerHandleBtnText: {
      type: String,
      default: ''
    }
  },
  components: { OwnTable },
  emits: ['handleNewClick', 'handleEditClick'],
  setup(props, { emit }) {
    const store = useStore()

    /* 获取用户所拥有的权限 */
    const isCreate = useVerificationUserPermission(props.pageName, 'create')
    const isDelete = useVerificationUserPermission(props.pageName, 'delete')
    const isQuery = useVerificationUserPermission(props.pageName, 'query')
    const isUpdate = useVerificationUserPermission(props.pageName, 'create')

    /* 发送请求获取数据 */
    // 向table组件双向绑定页码参数
    const pageInfo = ref({ currentPage: 1, size: 10 })
    // 监听页码参数发生改变 重新发起请求
    watch(pageInfo, () => getPageData())
    // 发起网络请求获取页面数据
    const getPageData = (searchInfo: any = {}) => {
      const params = {
        offset: (pageInfo.value.currentPage - 1) * pageInfo.value.size,
        size: pageInfo.value.size
      }
      // 页码改变 重新变更到vuex
      store.commit('system/setPageParams', params)
      if (!isQuery) return false
      const pageListParams: IPageListParams = {
        pageName: props.pageName,
        queryInfo: {
          ...params,
          ...searchInfo
        }
      }
      // console.warn('3333', searchInfo, pageListParams)
      store.dispatch('system/getPageListAction', pageListParams)
    }
    getPageData()

    // 删除表格数据项
    const removeItemClick = (item: any) => {
      store.dispatch('system/removePageDataAction', {
        item,
        pageName: props.pageName,
        pageInfo: pageInfo.value
      })
    }
    // 新建
    const handleNewClick = () => {
      emit('handleNewClick')
    }
    // 编辑
    const handleEditClick = (item: any) => {
      emit('handleEditClick', item)
    }

    /* 从vuex中获取页面请求数据 */
    const dataList = computed(() => store.getters['system/pageListData'](props.pageName))
    const dataListCount = computed(() => store.getters['system/pageListCount'](props.pageName))

    const otherSlotList = props?.contentTableConfig.propList.filter((item: any) => {
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'operation') return false
      return true
    })
    // console.warn('otherSlotList', otherSlotList)
    return {
      dataList,
      dataListCount,
      otherSlotList,
      pageInfo,
      getPageData,
      removeItemClick,
      handleNewClick,
      handleEditClick,
      isCreate,
      isDelete,
      isUpdate
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
