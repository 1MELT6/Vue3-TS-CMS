<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <!-- <breadcrumb :breadcrumbs="breadcrumbs" /> -->
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"> </i>
            {{ name }}
            <i class="el-icon-arrow-down el-icon--right"> </i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-circle-close"
                >退出登录</el-dropdown-item
              >
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item divided>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import localCache from '@/utils/cache'
// import Breadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { list } from '../../nav-menu/index'

export default defineComponent({
  components: {
    // Breadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(list, currentPath)
    })

    const name = localCache.getCache('name')
    return {
      isFold,
      handleFoldClick,
      name,
      breadcrumbs,
      pathMapBreadcrumbs,
      list
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
