<!--
 * @Description:
 * @Date: 2021-10-08 07:43:00
 * @LastEditTime: 2021-10-16 17:22:21
-->
<template>
  <div class="page-search">
    <own-form v-bind="searchFormConfig" v-model="formData">
      <template v-slot:header>
        <h1>高级检索</h1>
      </template>
      <template v-slot:footer>
        <div class="footer-btns">
          <el-button icon="el-icon-refresh-left" @click="handleReset">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        </div>
      </template>
    </own-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import OwnForm from '@/base_ui/own-form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    OwnForm
  },
  emits: ['handleSearch', 'handleReset'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const defaultFormData: Record<string, any> = {}
    for (const item of formItems) {
      defaultFormData[item.field] = ''
    }
    const formData = ref(defaultFormData)
    /* 点击重置 */
    const handleReset = () => {
      for (const key in defaultFormData) {
        formData.value[key] = defaultFormData[key]
      }
      // formData.value = defaultFormData
      // console.info('formData', formData.value === defaultFormData, defaultFormData)
      emit('handleReset', formData)
    }

    /* 点击搜索 */
    const handleSearch = () => {
      // console.info('handleSearch', formData)
      emit('handleSearch', formData.value)
    }

    return { formData, handleReset, handleSearch }
  }
})
</script>

<style scoped lang="less">
.footer-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
