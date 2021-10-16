<!--
 * @Description:
 * @Date: 2021-10-09 07:22:17
 * @LastEditTime: 2021-10-16 19:47:43
-->
<template>
  <div class="own-table">
    <!-- 头部插槽 => 默认表格标题 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      v-bind="childrenProps"
      border
      style="width: 100%"
      @selection-change="hanleSelectionChange"
    >
      <el-table-column v-if="showSelectColumn" :align="columnAlign" type="selection" width="50" />
      <el-table-column
        v-if="showIndexColumn"
        :align="columnAlign"
        type="index"
        label="序号"
        :width="indexColumnWith"
      />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column :align="columnAlign" v-bind="propItem" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 底部插槽  => 默认分页器 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      defalut: ''
    },
    dataList: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, size: 10 })
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    indexColumnWith: {
      type: String,
      default: '80'
    },
    columnAlign: {
      type: String,
      default: 'left'
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const hanleSelectionChange = (val: any) => {
      // console.log('hanleSelectionChange', val)
      emit('selectionChange', val)
    }

    const handleSizeChange = (size: number) => {
      emit('update:page', { ...props.page, size })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      hanleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  margin-bottom: 10px;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
