import hyRequest from '../index'
import { IAccount, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/user/', // 用法: /user/1
  UserMenus = '/role/' // 用法: role/1/menu
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
export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
