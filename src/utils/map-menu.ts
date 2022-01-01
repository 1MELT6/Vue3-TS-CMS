import { RouteRecordRaw } from 'vue-router'

export function mapMenuToRoutes(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  //  测试
  //   routeFiles.keys().forEach((key) => {
  //     console.log(key)
  //     ./analysis/dashboard/dashboard.ts
  // map-menu.ts?e477:9 ./analysis/overview/overview.ts
  // map-menu.ts?e477:9 ./center/food/food.ts
  // map-menu.ts?e477:9 ./center/recipe/recipe.ts
  // map-menu.ts?e477:9 ./user/user.ts
  //   })
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)
  // (5) [{…}, {…}, {…}, {…}, {…}]
  // 0: {path: '/main/analysis/dashboard', name: 'dashboard', children: Array(0), component: ƒ}
  // 1: {path: '/main/analysis/overview', name: 'overview', children: Array(0), component: ƒ}
  // 2: {name: 'food', path: '/main/center/food', component: ƒ}
  // 3: {name: 'food', path: '/main/center/recipe', component: ƒ}
  // 4: {name: 'user', path: '/mainuser', component: ƒ}
  // length: 5
  return routes
}
