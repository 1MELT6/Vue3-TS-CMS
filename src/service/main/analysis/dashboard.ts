import hyRequest from '@/service'

enum DashboradAPI {
  categoryRecipesCount = '/count/categoryLabels',
  usersDayCount = '/count/dayusers',
  usersCount = '/count/users',
  recipesCount = '/count/recipes',
  commentCount = '/count/comments',
  labelsCount = '/count/labels'
}

export function getCategoryRecipesCount() {
  return hyRequest.get({
    url: DashboradAPI.categoryRecipesCount
  })
}
export function getUsersDayCount() {
  return hyRequest.get({
    url: DashboradAPI.usersDayCount
  })
}
export function getUsersCount() {
  return hyRequest.get({
    url: DashboradAPI.usersCount
  })
}

export function getRecipesCount() {
  return hyRequest.get({
    url: DashboradAPI.recipesCount
  })
}

export function getCommentCount() {
  return hyRequest.get({
    url: DashboradAPI.commentCount
  })
}

export function getLabelsCount() {
  return hyRequest.get({
    url: DashboradAPI.labelsCount
  })
}
