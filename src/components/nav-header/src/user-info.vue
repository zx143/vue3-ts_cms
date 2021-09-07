<!--
 * @Description:
 * @Author: zgq
 * @Date: 2021-09-05 20:55:06
 * @LastEditors: zgq
 * @LastEditTime: 2021-09-05 21:26:33
-->
<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link info">
        <el-avatar
          class="avatar"
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span class="name">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统设置</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.name {
  margin-left: 5px;
}
</style>
