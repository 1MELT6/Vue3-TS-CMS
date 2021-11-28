import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
//全放在对象不好
// export default hyRequest = {}
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 多个base地址不同：就是多个实例对象的创建
// export const hyRequest2 = new HYRequest({
//   baseURL: '地址'
// })

export default hyRequest
