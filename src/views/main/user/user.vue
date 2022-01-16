<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <!-- <el-table :data="userList" border style="width: 100%"> -->
      <!--方法一：死固定 <el-table-column
          prop="name"
          label="用户名"
          min-width="180"
        ></el-table-column> -->
      <!-- 方法二：每一列格式固定<template v-for="propItem in propList" :key="propItem.prop">
          <el-table-column v-bind="propItem" align="center"></el-table-column>
        </template> -->
      <!-- </el-table> -->
      <c-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import pageSearch from '@/components/page-search/src/page-search.vue'
import { searchFormConfig } from './config/search.config'
import CTable from '@/base-ui/table'
export default defineComponent({
  name: 'user',
  components: { pageSearch, CTable },
  setup() {
    // 2、拿到usestore请求数据

    const store = useStore()
    store.dispatch('user/getUserListAction', {
      pageUrl: '/user/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 随着更新重新计算
    const userList = computed(() => store.state.user.userList)
    const userAccount = computed(() => store.state.user.userAccount)

    const propList = [
      { prop: 'name', label: '账号名', minwidth: '100' },
      {
        prop: 'password',
        label: '密码',
        minwidth: '100',
        slotName: 'password'
      },
      { prop: 'createAt', label: '创建时间', minwidth: '250' },
      { prop: 'updateAt', label: '更新时间', minwidth: '250' },
      { label: '操作', midwidth: 120, slotName: 'handler' }
    ]

    const showSelectColumn = true
    const showIndexColumn = true
    return {
      searchFormConfig,
      userList,
      userAccount,
      propList,
      showSelectColumn,
      showIndexColumn
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0px 50px 20px 0px;
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

<!-- user下方列表：先从user.vue发送dispatch-》service网络请求封装-》调用请求然后获取数据然后commit然后保存mutaition -->
