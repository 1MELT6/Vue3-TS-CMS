<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="recipe"
      @newBtnClick="hanldeNewData"
      @editBtnClick="hanldeEditData"
    />
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="recipe"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageContent from '@/components/page-content/src/page-content.vue'
import pageSearch from '@/components/page-search/src/page-search.vue'
import PageModal from '@/components/page-modal/src/page-modal.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'user',
  components: { pageSearch, PageContent, PageModal },
  setup() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
      // console.log(queryInfo)
    }
    const hanldeNewData = () => {
      defaultInfo.value = {}
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const hanldeEditData = (item: any) => {
      // 保存编辑值
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfig,
      hanldeNewData,
      hanldeEditData,
      pageModalRef,
      defaultInfo
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
