<template>
  <div class="recipe">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content :contentTableConfig="contentTableConfig" pageName="recipe" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

import PageSearch from '@/components/page-search/src/page-search.vue'
export default defineComponent({
  components: { PageContent, PageSearch },

  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>
<style scoped></style>
