import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IuserState } from './type'
import { getUserListData } from '@/service/main/user/user'

const userModule: Module<IuserState, IRootState> = {
  namespaced: true, //作用域
  state() {
    return {
      userList: [],
      userAccount: 0
    }
  },
  mutations: {
    // 3、修改,保存
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userAccount: number) {
      state.userAccount = userAccount
    }
  },
  actions: {
    async getUserListAction({ commit }, payload: any) {
      // 1、怎样发送请求在user里的setup拿到usestore
      // console.log(payload.queryInfo) //拿到了url和size等

      // 1、对页面发送真真请求->进入service->userts
      const pageResult = await getUserListData(
        payload.pageUrl,
        payload.queryInfo
      )
      // 2、获得数据
      // console.log(pageResult)
      const totalCount = pageResult.length

      commit('changeUserList', pageResult)
      commit('changeUserCount', totalCount)
    }
  }
}

export default userModule
