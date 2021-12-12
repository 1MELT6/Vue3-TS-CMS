import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'
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
    }
  },
  actions: {
    // 参数：上下文对象
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult.data.id, loginResult.data.token)
      const { id, token } = loginResult.data
      // 保存token
      commit('changeToken', token)
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }
  }
}

export default loginModule
