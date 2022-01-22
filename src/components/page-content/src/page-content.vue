<template>
  <div class="content">
    <c-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
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
      <template #handler="scope">
        <div class="handle-btns">
          <el-button icon="el-icon-edit" type="text">编辑</el-button>
          <el-button
            icon="el-icon-delete"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
    </c-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import CTable from '@/base-ui/table'
export default defineComponent({
  components: {
    CTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 页数双向绑定
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData)
    // 2、拿到usestore请求数据

    const store = useStore()

    const getPageData = (queryInfo: any = {}) => {
      console.log(queryInfo)

      store.dispatch('user/getUserListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    // 随着更新重新计算
    const dataList = computed(() =>
      store.getters[`user/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`user/pageListCount`](props.pageName)
    )

    const handleDeleteClick = (item: any) => {
      // console.log(item)
      store.dispatch('user/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      handleDeleteClick
    }
  }
})
</script>
<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
