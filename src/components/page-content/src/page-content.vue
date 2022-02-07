<template>
  <div class="content">
    <c-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick">新增用户</el-button>
        <el-button icon="el-icon-refresh">刷新</el-button>
      </template>
      <!-- 动态改变样式，具名插槽 -->
      <template #password="scope">
        {{ scope.row.password }}
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <!-- scope作用域插槽 -->
      <template #handler="scope">
        <div class="handle-btns">
          <el-button icon="el-icon-edit" type="text" @click="handleEditClick"
            >编辑</el-button
          >
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
import { defineComponent, computed, ref, watch, nextTick } from 'vue'
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
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // 页数双向绑定
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    //页数选择时重新监听调用
    watch(pageInfo, () => {
      getPageData()
    })
    // 2、拿到usestore请求数据

    const store = useStore()

    const getPageData = (queryInfo: any = {}) => {
      console.log(queryInfo)

      store.dispatch('user/getUserListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    // nextTick(function what(){

    // })
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

    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      handleDeleteClick,
      handleEditClick,
      handleNewClick
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
