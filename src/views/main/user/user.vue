<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import pageSearch from '@/components/page-search/src/page-search.vue'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: { pageSearch },
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
    return {
      searchFormConfig
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
</style>

<!-- user下方列表：先从user.vue发送dispatch-》service网络请求封装-》调用请求然后获取数据然后commit然后保存mutaition -->
