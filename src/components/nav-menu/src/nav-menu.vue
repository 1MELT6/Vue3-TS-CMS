<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <!-- 二级菜单 -->
      <!-- 二级菜单的可以展开的标题 -->
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-monitor"></i><span>系统总览</span>
        </template>
        <!-- 遍历里面的item -->
        <el-menu-item-group>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">食谱统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-setting"></i><span>系统管理</span>
        </template>
        <!-- 遍历里面的item -->
        <el-menu-item-group>
          <el-menu-item index="2-1">用户信息</el-menu-item>
          <el-menu-item index="2-2">其他</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-edit"></i><span>食谱中心</span>
        </template>
        <!-- 遍历里面的item -->
        <el-menu-item-group>
          <el-menu-item index="3-1">食谱管理</el-menu-item>
          <el-menu-item index="3-2">食材管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// vuex - typescript  => pinia

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item-group__title {
    }
    .el-menu-item {
      font-size: 18px !important;
      padding-left: 60px !important;
      background-color: #0c2135 !important;
    }
    span {
      font-size: 18px !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
