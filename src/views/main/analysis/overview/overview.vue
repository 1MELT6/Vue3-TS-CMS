<template>
  <div class="overview">
    <hy-card title="关于">
      <div class="c-left">
        基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        的均衡膳食后台管理系统。
      </div>
    </hy-card>
    <hy-card title="技术栈">
      <hy-text-link :text-arrs="technologyStacks" />
    </hy-card>
    <hy-card title="项目结构">
      <div class="c-left">
        project tree 插件目录生成
        <hy-code language="bash" :code="projectDir" />
      </div>
    </hy-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HyTextLink from '@/base-ui/text-link'
import HyCode from '@/base-ui/code'
import HyCard from '@/base-ui/card'

import { technologyStacks, projectDir } from './config'
export default defineComponent({
  components: {
    HyCard,
    HyTextLink,
    HyCode
  },

  setup() {
    return {
      technologyStacks,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  font-size: 20px;
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
