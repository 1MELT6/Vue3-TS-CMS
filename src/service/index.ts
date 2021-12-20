import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

//全放在对象不好
// export default hyRequest = {}
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // hooks:{拦截器}
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('回应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('回应失败的拦截')
      return err
    }
  }
})

// 多个base地址不同：就是多个实例对象的创建
// export const hyRequest2 = new HYRequest({
//   baseURL: '地址'
// })

export default hyRequest
