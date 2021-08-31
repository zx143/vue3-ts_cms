<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-31 20:30:05
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-31 20:54:23
-->
<template>
  <div class="nav-header">
    <i
      class="menu-fold"
      :class="[isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
      @click="menuFoldHandle"
    ></i>
    <span>header123</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['menuFoldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const menuFoldHandle = () => {
      isFold.value = !isFold.value
      emit('menuFoldChange', isFold.value)
    }
    return {
      isFold,
      menuFoldHandle
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .menu-fold {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
