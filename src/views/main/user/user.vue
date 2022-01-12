<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" :modelValue="formData" />
    <!-- <hy-form v-bind="searchFormConfig" v-model="formData" /> -->
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HyForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
