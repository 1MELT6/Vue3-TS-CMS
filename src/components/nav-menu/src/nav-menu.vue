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
      <template v-for="item in list" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
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
    const router = useRouter()
    const handleMenuItemClick = (item: any) => {
      console.log(item.url)
      router.push(item.url)
    }

    const list = [
      {
        name: '系统总览',
        id: '1',
        type: 1,
        icon: 'el-icon-monitor',
        children: [
          {
            name: '技术总览',
            id: '1-1',
            type: 2,
            url: '/main/analysis/overview',
            icon: 'el-icon-menu'
          },
          {
            name: '可视化',
            id: '1-2',
            type: 2,
            url: '/main/analysis/dashboard',
            icon: 'el-icon-menu'
          }
        ]
      },
      {
        name: '系统管理',
        id: '2',
        type: 1,
        icon: 'el-icon-setting',
        children: [
          {
            name: '用户管理',
            id: '2-1',
            type: 2,
            url: '/main/user',
            icon: 'el-icon-document-copy'
          }
          // },
          // {
          //   name: '账号专栏',
          //   id: '2-2',
          //   type: 2,
          //   url: '/main/user',
          //   icon: 'el-icon-document-copy'
          // }
        ]
      },
      {
        name: '食谱中心',
        id: '3',
        type: 1,
        icon: 'el-icon-edit',
        children: [
          {
            name: '食谱管理',
            id: '3-1',
            type: 2,
            url: '/main/center/recipe',
            icon: 'el-icon-document-copy'
          },
          {
            name: '食材管理',
            id: '3-2',
            type: 2,
            url: '/main/center/food',
            icon: 'el-icon-document-copy'
          }
        ]
      }
    ]

    return { list, handleMenuItemClick }
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
