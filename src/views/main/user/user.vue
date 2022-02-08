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
      pageName="user"
      @newBtnClick="hanldeNewData"
      @editBtnClick="hanldeEditData"
    />
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="user"
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

import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  name: 'user',
  components: { pageSearch, PageContent, PageModal },
  setup() {
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, hanldeNewData, hanldeEditData] =
      usePageModal(newCallback, editCallback)

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

<!-- user下方列表：先从user.vue发送dispatch-》service网络请求封装-》调用请求然后获取数据然后commit然后保存mutaition -->
