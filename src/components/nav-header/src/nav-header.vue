<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-31 20:30:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-10 22:07:28
-->
<template>
  <div class="nav-header">
    <i
      class="menu-fold"
      :class="[isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
      @click="menuFoldHandle"
    ></i>
    <div class="content">
      <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import { NavBreadcrumb } from '@/base_ui/nav-breadcrumb'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { getActiveBreadcrumb } from '@/utils/map-routers'
export default defineComponent({
  emits: ['menuFoldChange'],
  components: {
    UserInfo,
    NavBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    /* 菜单栏折叠切换 */
    const menuFoldHandle = () => {
      isFold.value = !isFold.value
      emit('menuFoldChange', isFold.value)
    }
    const stroe = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const currentRoute = route.path
      const userMenus = stroe.state.login.userMenus
      return getActiveBreadcrumb(userMenus, currentRoute)
    })
    console.log('breadcrumbs', breadcrumbs.value)
    return {
      isFold,
      breadcrumbs,
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
