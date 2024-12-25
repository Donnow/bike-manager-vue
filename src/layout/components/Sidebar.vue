<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Bicycle, User, List } from '@element-plus/icons-vue'
import { useAppStore } from '../../stores'

const router = useRouter()

const appStore = useAppStore()
</script>

<template>
  <el-menu default-active="/bikes" class="sidebar-menu" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" :router="true">
    <el-menu-item index="/bikes">
      <el-icon>
        <bicycle />
      </el-icon>
      <span v-if="appStore.sidebar.opened">单车管理</span>
    </el-menu-item>
    <el-menu-item index="/users">
      <el-icon>
        <user />
      </el-icon>
      <span v-if="appStore.sidebar.opened">用户管理</span>
    </el-menu-item>
    <el-menu-item index="/orders">
      <el-icon>
        <list />
      </el-icon>
      <span v-if="appStore.sidebar.opened">订单管理</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.sidebar-menu {
  height: 100%;
  border-right: none;
}

.sidebar-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>