import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

// interface RouterRecoid

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
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
    children: [
      {
        path: 'analysis/dashboard',
        name: 'dashboard',
        component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
      },
      {
        path: 'analysis/overview',
        name: 'overview',
        component: () => import('@/views/main/analysis/overview/overview.vue')
      },
      {
        path: 'center/food',
        name: 'food',
        component: () => import('@/views/main/center/food/food.vue')
      },
      {
        path: 'center/recipe',
        name: 'recipe',
        component: () => import('@/views/main/center/recipe/recipe.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/main/user/user.vue')
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
})

export default router
