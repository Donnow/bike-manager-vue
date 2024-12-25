<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores'
import Sidebar from './components/Sidebar.vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'

const appStore = useAppStore()
</script>

<template>
  <el-container class="layout-container">
    <el-aside :width="appStore.sidebar.opened ? '200px' : '64px'" class="sidebar-container">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <el-button type="text" @click="appStore.toggleSidebar">
          <el-icon><icon-menu /></el-icon>
        </el-button>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;
}

.sidebar-container {
  background-color: #304156;
  transition: width 0.3s;
}

.el-header {
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
}
</style>