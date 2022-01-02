import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
// import { mapMenuToRoutes } from '@/utils/map-menu'
import router from '@/router'

// module需要两个参数一个模块的，一个根的state由于过多
// 的类型所以创建types.ts
// interface ILoginState {
//   token: string
//   userInfo: any
// }
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    // 改变state只能通过mutation
    // 保存token
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
      console.log(state)
      // mapMenuToRoutes()
      // const routes = mapMenuToRoutes()
      // 动态添加一级路由，需要进行遍历所有路由，再去nav-menu进行点击事件操作
      // router.addRoute(routes)
      // routes.forEach((route) => {
      //   router.addRoute('main', route)
      // })
    }
    // changeUserMenus(state, userMenus: any) {
    //   state.userMenus = userMenus
    //   console.log(state)

    // mapMenuToRoutes()
    // }
  },
  actions: {
    // 1.实现登录逻辑
    // 参数：上下文对象
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult.id)
      const { id, token } = loginResult
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      console.log(userInfoResult)

      const userInfo = userInfoResult
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      // const userMenusResult = await requestUserMenusByRoleId(id)
      // const userMenus = userMenusResult
      // commit('changeUserMenus', userMenus)
      // localCache.setCache('userMenus', userMenus)

      router.push('/main')
    }

    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}

export default loginModule
