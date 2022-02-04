import NavMenu from './src/nav-menu.vue'

export const list = [
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
      },
      {
        name: '评论管理',
        id: '2-2',
        type: 2,
        url: '/main/comment',
        icon: 'el-icon-document-copy'
      }
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
        name: '标签管理',
        id: '3-2',
        type: 2,
        url: '/main/center/label',
        icon: 'el-icon-document-copy'
      },
      {
        name: '营养管理',
        id: '3-3',
        type: 2,
        url: '/main/center/nutrition',
        icon: 'el-icon-document-copy'
      }
    ]
  }
]

export default NavMenu
