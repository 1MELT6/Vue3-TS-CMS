import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
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
  mutations: {},
  actions: {
    // 参数：上下文对象
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
      // 回到loginaccount
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  }
}

export default loginModule
