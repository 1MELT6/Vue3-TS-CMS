import { ILoginState } from './login/types'
import { IuserState } from './main/user/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system:IuserState
}

export type IStoreType = IRootState & IRootWithModule
