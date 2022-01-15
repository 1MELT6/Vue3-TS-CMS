import hyRequest from '../../index'

export function getUserListData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}
