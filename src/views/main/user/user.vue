<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search/src/page-search.vue'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: { pageSearch },
  setup() {
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
