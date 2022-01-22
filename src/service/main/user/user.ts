import hyRequest from '../../index'

export function getUserListData(url: string, queryInfo: any) {
  console.log(queryInfo)

  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}

export function deletaPageData(url: string) {
  return hyRequest.delete<any>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return hyRequest.post<any>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hyRequest.patch<any>({
    url: url,
    data: editData
  })
}
