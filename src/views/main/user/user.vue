<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search/src/page-search.vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content/src/page-content.vue'
export default defineComponent({
  name: 'user',
  components: { pageSearch, PageContent },
  setup() {
    return {
      contentTableConfig,
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
