<!--
 * @Description:
 * @Date: 2021-10-17 11:56:52
 * @LastEditTime: 2021-10-19 07:53:47
-->
<template>
  <div class="page-model">
    <el-dialog
      v-model="pageDialogVisible"
      :title="pageModelConfig.title"
      width="30%"
      center
      destroy-on-close
    >
      <own-form v-bind="pageModelConfig.formConfig" v-model="formData"></own-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="pageDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import OwnForm from '@/base_ui/own-form'
export default defineComponent({
  props: {
    pageModelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: { OwnForm },
  setup(props) {
    const pageDialogVisible = ref(false)
    const formData = ref<any>({})

    // 监听编辑时数据的改变
    watch(
      () => props.defaultInfo,
      (newVal) => {
        // console.log('newVal', newVal, formData, props.pageModelConfig.formConfig.formItems)
        for (const item of props.pageModelConfig.formConfig.formItems) {
          formData.value[item.field] = newVal[item.field]
        }
      }
    )
    const confirm = () => {
      pageDialogVisible.value = false
    }
    return {
      pageDialogVisible,
      formData,
      confirm
    }
  }
})
</script>

<style scoped></style>
