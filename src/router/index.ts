import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

// interface RouterRecoid

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '登录'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    // component: () => import('@/components/common.vue'),
    component: () => import('@/views/main/main.vue'),
    meta: {
      title: '首页',
      showInbreadcrumb: false
    },
    children: [
      {
        path: 'analysis/dashboard',
        name: 'dashboard',
        component: () =>
          import('@/views/main/analysis/dashboard/dashboard.vue'),
        meta: {
          title: '技术总览',
          showInbreadcrumb: true
        }
      },
      {
        path: 'analysis/overview',
        name: 'overview',
        component: () => import('@/views/main/analysis/overview/overview.vue'),
        meta: {
          title: '可视化中心',
          showInbreadcrumb: true
        }
      },
      {
        path: 'center/label',
        name: 'label',
        component: () => import('@/views/main/center/label/label.vue'),
        meta: {
          title: '标签管理',
          showInbreadcrumb: true
        }
      },
      {
        path: 'center/recipe',
        name: 'recipe',
        component: () => import('@/views/main/center/recipe/recipe.vue'),
        meta: {
          title: '食谱管理',
          showInbreadcrumb: true
        }
      },
      {
        path: 'center/nutrition',
        name: 'nutrition',
        component: () => import('@/views/main/center/nutrition/nutrition.vue'),
        meta: {
          title: '营养管理',
          showInbreadcrumb: true
        }
      },
      {
        path: 'center/time',
        name: 'time',
        component: () => import('@/views/main/center/time/time.vue'),
        meta: {
          title: '营养管理',
          showInbreadcrumb: true
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/main/user/user.vue'),
        meta: {
          title: '用户管理',
          showInbreadcrumb: true
        }
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/main/comment/comment.vue'),
        meta: {
          title: '评论管理',
          showInbreadcrumb: true
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return '/main/analysis/overview'
  }
})

export default router
