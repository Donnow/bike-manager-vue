<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  { id: 1, orderNo: 'O001', user: '张三', bikeNo: 'B001', status: '进行中' },
  { id: 2, orderNo: 'O002', user: '李四', bikeNo: 'B002', status: '已完成' }
])
</script>

<template>
  <div class="orders-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>订单列表</span>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="orderNo" label="订单编号" />
        <el-table-column prop="user" label="用户" />
        <el-table-column prop="bikeNo" label="单车编号" />
        <el-table-column prop="status" label="状态" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped>
.orders-container {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>