<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-31 20:30:05
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-05 21:01:08
-->
<template>
  <div class="nav-header">
    <i
      class="menu-fold"
      :class="[isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
      @click="menuFoldHandle"
    ></i>
    <div class="content">
      <div class="crumbs">面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  emits: ['menuFoldChange'],
  components: {
    UserInfo
  },
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
  width: 100%;
  display: flex;
  .menu-fold {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    padding: 0 20px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
