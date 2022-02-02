import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IDashboardState } from './type'
import {
  getCategoryRecipesCount,
  getUsersDayCount,
  getLabelsCount,
  getCommentCount,
  getRecipesCount,
  getUsersCount
} from '@/service/main/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryRecipesCount: [],
      usersDayCount: [],
      usersCount: [],
      recipesCount: [],
      commentCount: [],
      labelsCount: []
    }
  },
  mutations: {
    changeCategoryRecipesCount(state, list) {
      state.categoryRecipesCount = list
    },
    changeUsersDayCount(state, list) {
      state.usersDayCount = list
    },
    changeUsersCount(state, list) {
      state.usersCount = list
    },
    changeRecipesCount(state, list) {
      state.recipesCount = list
    },
    changeCommentCount(state, list) {
      state.commentCount = list
    },
    changeLabelsCount(state, list) {
      state.labelsCount = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryRecipesCount()
      console.log(categoryCountResult)
      commit('changeCategoryRecipesCount', categoryCountResult)
      const usersDayCount = await getUsersDayCount()
      console.log(usersDayCount)
      commit('changeUsersDayCount', usersDayCount)
      const usersCount = await getUsersCount()
      console.log(usersCount)
      commit('changeUsersCount', usersCount)
      const recipesCount = await getRecipesCount()
      commit('changeRecipesCount', recipesCount)
      const commentCount = await getCommentCount()
      commit('changeCommentCount', commentCount)
      const labelsCount = await getLabelsCount()
      commit('changeLabelsCount', labelsCount)
    }
  }
}
export default dashboardModule
