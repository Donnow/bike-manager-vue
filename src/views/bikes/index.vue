<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  { id: 1, bikeNo: 'B001', status: '空闲', location: '北京市海淀区' },
  { id: 2, bikeNo: 'B002', status: '使用中', location: '北京市朝阳区' }
])
</script>

<template>
  <div class="bikes-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>单车列表</span>
          <el-button type="primary">添加单车</el-button>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="bikeNo" label="单车编号" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="location" label="位置" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" size="small">编辑</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped>
.bikes-container {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>