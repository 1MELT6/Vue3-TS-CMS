import hyRequest from '../../index'

export function getUserListData(url: string, queryInfo: any) {
  console.log(queryInfo)

  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}
