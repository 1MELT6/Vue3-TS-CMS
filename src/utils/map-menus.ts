// 动态路由->刷新之后地址和组件匹配而不是默认刷新跳转到main（没用到）
// ->面包导航（用到）

import { IBreadcrumb } from '@/base-ui/breadcrumb'

export function pathMapBreadcrumbs(list: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []

  for (const menu of list) {
    // console.log(menu)
    // console.log(menu.children)

    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      // console.log(findMenu)
      // console.log(menu)

      if (findMenu) {
        breadcrumbs.push({ name: menu.name })
        breadcrumbs.push({ name: findMenu.name })
        return breadcrumbs
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
  // console.log(breadcrumbs)

  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(list: any[], currentPath: string): any {
  for (const menu of list) {
    console.log(menu.type)

    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
