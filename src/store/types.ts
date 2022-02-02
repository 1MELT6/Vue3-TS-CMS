import { ILoginState } from './login/types'
import { IuserState } from './main/user/type'
import { IDashboardState } from './main/analysis/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: IuserState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
