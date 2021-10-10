<!--
 * @Description:
 * @Date: 2021-10-09 07:22:17
 * @LastEditTime: 2021-10-10 12:03:53
-->
<template>
  <div class="own-table">
    <el-table :data="dataList" border style="width: 100%">
      <el-table-column
        v-if="showIndexColumn"
        :align="columnAlign"
        type="index"
        :min-width="indexColumnWith"
      />
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          :align="columnAlign"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
        >
          <!-- 作用域插槽 -->
          <template #default="scope">
            <!-- todo: 插槽 => 默认展示对应数据, 通过row传递作用域数据 -->
            <slot :name="item['slotName']" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    dataList: {
      type: Array,
      required: true
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
      type: Number,
      default: 50
    },
    columnAlign: {
      type: String,
      default: 'left'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
