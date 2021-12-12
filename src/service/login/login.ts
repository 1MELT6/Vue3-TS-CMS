import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  // 接口目的设定loginresult类型
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
