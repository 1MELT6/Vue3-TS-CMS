export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

// export interface IDataType<T = any> {
//   code: number
//   // data: any
//   // data: ILoginResult
//   //这样就把IDataType写死了所以要使用泛型泛型
//   data: T
// }
