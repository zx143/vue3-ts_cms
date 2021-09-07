<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-06 21:37:04
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-07 21:54:04
-->
<template>
  <div class="own-form">
    <el-form>
      <el-row>
        <el-col :span="8" v-for="item in formItems" :key="item.label">
          <template
            v-if="item.type === formItemsEnum.INPUT || item.type === formItemsEnum.PASSWORD"
          >
            <el-form-item :label="item.label" label-width="100px">
              <el-input
                v-model="item.value"
                :show-password="item.type === formItemsEnum.PASSWORD"
                :placeholder="item.placeHolder"
              ></el-input>
            </el-form-item>
          </template>

          <template v-else-if="item.type === formItemsEnum.SELECT">
            <el-form-item :label="item.label" label-width="100px">
              <el-select style="width: 100%" v-model="value" :placeholder="item.placeHolder">
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </template>

          <template v-else-if="item.type === formItemsEnum.DATE_PICKER">
            <el-form-item :label="item.label" label-width="100px">
              <el-date-picker
                style="width: 100%"
                v-model="item.value"
                type="date"
                :placeholder="item.placeHolder"
              >
              </el-date-picker>
            </el-form-item>
          </template>
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

<style scoped lang="less"></style>
