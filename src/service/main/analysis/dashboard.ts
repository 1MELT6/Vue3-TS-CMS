import hyRequest from '@/service'

enum DashboradAPI {
  categoryRecipesCount = '/count/categoryLabels',
  usersDayCount = '/count/dayusers',
  usersCount = '/count/user',
  recipesCount = '/count/recipe',
  commentCount = '/count/comment',
  labelsCount = '/count/label'
}

export function getCategoryRecipesCount() {
  return hyRequest.get({
    url: DashboradAPI.categoryRecipesCount,
    showLoading: false
  })
}
export function getUsersDayCount() {
  return hyRequest.get({
    url: DashboradAPI.usersDayCount,
    showLoading: false
  })
}
export function getUsersCount() {
  return hyRequest.get({
    url: DashboradAPI.usersCount,
    showLoading: false
  })
}

export function getRecipesCount() {
  return hyRequest.get({
    url: DashboradAPI.recipesCount,
    showLoading: false
  })
}

export function getCommentCount() {
  return hyRequest.get({
    url: DashboradAPI.commentCount,
    showLoading: false
  })
}

export function getLabelsCount() {
  return hyRequest.get({
    url: DashboradAPI.labelsCount,
    showLoading: false
  })
}
