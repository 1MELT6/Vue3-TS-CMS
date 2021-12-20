import hyRequest from '../index'
import { IAccount, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/user/' // 用法: /user/1
}

export function accountLoginRequest(account: IAccount) {
  // 接口目的设定loginresult类型
  return hyRequest.post<ILoginResult>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return hyRequest.get({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
