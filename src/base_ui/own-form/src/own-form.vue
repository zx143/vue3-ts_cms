<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-06 21:37:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-08 22:18:31
-->
<template>
  <div class="own-form">
    <el-form>
      <el-row>
        <el-col v-bind="colLayout" v-for="item in formItems" :key="item.label">
          <el-form-item
            :label="item.label"
            :label-width="labelWidth"
            :rules="item.rules"
            :style="itemStyle"
          >
            <template
              v-if="item.type === formItemsEnum.INPUT || item.type === formItemsEnum.PASSWORD"
            >
              <el-input
                v-model="item.value"
                :show-password="item.type === formItemsEnum.PASSWORD"
                :placeholder="item.placeHolder"
              ></el-input>
            </template>

            <template v-else-if="item.type === formItemsEnum.SELECT">
              <el-select style="width: 100%" v-model="value" :placeholder="item.placeHolder">
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                >
                </el-option>
              </el-select>
            </template>

            <template v-else-if="item.type === formItemsEnum.DATEPICKER">
              <el-date-picker style="width: 100%" v-bind="item.otherOptions"> </el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem, formItemEnum } from '../types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 20px' })
    },
    /* item项响应性宽度 */
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 12,
        xs: 24
      })
    }
  },
  setup() {
    const formItemsEnum = formItemEnum
    return {
      formItemsEnum
    }
  }
})
</script>

<style scoped lang="less">
.own-form {
  padding-top: 22px;
}
</style>
