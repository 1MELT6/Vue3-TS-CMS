<template>
  <div class="recipe">
    <page-content :contentTableConfig="contentTableConfig" pageName="recipe" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from '../../user/config/content.config'
export default defineComponent({
  components: { PageContent },

  setup() {
    return { contentTableConfig }
  }
})
</script>
<style scoped></style>
