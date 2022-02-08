import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IuserState } from './type'
import {
  deletaPageData,
  getUserListData,
  createPageData,
  editPageData
} from '@/service/main/user/user'
const userModule: Module<IuserState, IRootState> = {
  namespaced: true, //作用域
  state() {
    return {
      userList: [],
      userCount: 0,
      recipeList: [],
      recipeCount: 0,
      labelList: [],
      labelCount: 0,
      commentList: [],
      commentCount: 0,
      nutritionList: [],
      nutritionCount: 0,
      timeList: [],
      timeCount: 0
    }
  },
  mutations: {
    // 3、修改,保存
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRecipeList(state, list: any[]) {
      state.recipeList = list
    },
    changeRecipeCount(state, count: number) {
      state.recipeCount = count
    },
    changeLabelList(state, list: any[]) {
      state.labelList = list
    },
    changeLabelCount(state, count: number) {
      state.labelCount = count
    },

    changeNutritionList(state, list: any[]) {
      state.nutritionList = list
    },
    changeNutritionCount(state, count: number) {
      state.nutritionCount = count
    },
    changeCommentList(state, list: any[]) {
      state.commentList = list
    },
    changeCommentCount(state, count: number) {
      state.commentCount = count
    },
    changeTimeList(state, list: any[]) {
      state.timeList = list
    },
    changeTimeCount(state, count: number) {
      state.timeCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getUserListAction({ commit }, payload: any) {
      // 1、怎样发送请求在user里的setup拿到usestore
      // console.log(payload.queryInfo) //拿到了url和size等
      // console.log(payload)

      const pageName = payload.pageName
      // const pageUrl = ${pageName}/list
      const pageUrl = `/${pageName}/list`

      // 1、对页面发送真真请求->进入service->userts
      const pageResult = await getUserListData(pageUrl, payload.queryInfo)
      // 2、获得数据并存储state
      console.log(payload.queryInfo)
      const totalCount = pageResult.length

      // 方法三：es6语法
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, pageResult)
      commit(`change${changePageName}Count`, totalCount)
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      // 1|获取pagename和id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 2、调用删除网络请求
      await deletaPageData(pageUrl)
      // 3、重新请求最新数据->pagecontent.vue
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      // 创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${payload.pageName}`
      await createPageData(pageUrl, newData)
      // 请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      // 编辑数据的请求
      const { pageName, editData, id } = payload
      console.log(editData)

      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default userModule
