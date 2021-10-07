<!--
 * @Description:
 * @Date: 2021-10-08 07:43:00
 * @LastEditTime: 2021-10-08 07:46:07
-->
<template>
  <div class="page-search">
    <own-form v-bind="searchFormConfig" v-model="formData">
      <template v-slot:header>
        <h1>高级检索</h1>
      </template>
      <template v-slot:footer>
        <div class="footer-btns">
          <el-button icon="el-icon-refresh-left">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sports: '',
      createTime: ''
    })

    return { formData }
  }
})
</script>

<style scoped lang="less">
.footer-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
