import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { accountLoginRequest, requestUserInfoById } from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
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
      userInfo: {}
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
    }
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

      router.push('/main')
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}

export default loginModule
