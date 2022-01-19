import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IuserState } from './type'
import { getUserListData } from '@/service/main/user/user'
const userModule: Module<IuserState, IRootState> = {
  namespaced: true, //作用域
  state() {
    return {
      userList: [],
      userAccount: 0,
      recipeList: [],
      recipeAccount: 0
    }
  },
  mutations: {
    // 3、修改,保存
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userAccount: number) {
      state.userAccount = userAccount
    },
    changeRecipeList(state, recipeList: any[]) {
      state.recipeList = recipeList
    },
    changeRecipeCount(state, recipeAccount: number) {
      state.recipeAccount = recipeAccount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]

        // switch (pageName) {
        //   case 'users':
        //     return state.userList
        //   case 'role':
        //     return state.recipeList
        //   default:
        //     return state.userList
        // }
      }
    }
  },
  actions: {
    async getUserListAction({ commit }, payload: any) {
      // 1、怎样发送请求在user里的setup拿到usestore
      // console.log(payload.queryInfo) //拿到了url和size等
      console.log(payload)

      const pageName = payload.pageName
      // const pageUrl = ${pageName}/list
      const pageUrl = `/${pageName}/list`

      // let pageUrl = ''
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/user/list'
      //     break
      //   case 'recipe':
      //     pageUrl = '/recipe/list'
      //     break
      // }
      // 1、对页面发送真真请求->进入service->userts
      const pageResult = await getUserListData(pageUrl, payload.queryInfo)
      // 2、获得数据并存储state
      // console.log(pageResult)
      const totalCount = pageResult.length

      // 方法三：es6语法
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, pageResult)
      commit(`change${changePageName}Count`, totalCount)

      // 方法二：选择
      // switch (pageName) {
      //   case 'user':
      //     console.log('okkkkkkkkkkkkusercommittttttt')

      //     commit('changeUserList', pageResult)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'recipe':
      //     commit('changeUserList', pageResult)
      //     commit('changeUserCount', totalCount)
      //     break
      // }
      // 方法一：固定
      // commit('changeUserList', pageResult)
      // commit('changeUserCount', totalCount)
    }
  }
}
export default userModule
