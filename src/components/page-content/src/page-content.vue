<template>
  <div class="content">
    <c-table :listData="dataList" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary">新增用户</el-button>
        <el-button icon="el-icon-refresh">刷新</el-button>
      </template>
      <!-- 动态改变样式，具名插槽 -->
      <template #password="scope">
        <strong>{{ scope.row.password }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <!-- scope作用域插槽 -->
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" type="text">编辑</el-button>
          <el-button icon="el-icon-delete" type="text">删除</el-button>
        </div>
      </template>
    </c-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import CTable from '@/base-ui/table'
export default defineComponent({
  components: {
    CTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 2、拿到usestore请求数据

    const store = useStore()
    store.dispatch('user/getUserListAction', {
      // pageUrl: '/user/list',
      // pageName: '/list',
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 随着更新重新计算
    // const userList = computed(() => store.state.user.userList)
    // const userAccount = computed(() => store.state.user.userAccount)
    const dataList = computed(() =>
      store.getters[`user/pageListData`](props.pageName)
    )
    return { dataList }
  }
})
</script>
<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
