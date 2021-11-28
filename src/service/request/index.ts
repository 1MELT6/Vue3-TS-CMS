import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
class HYRequest {
  // instance: any
  instance: AxiosInstance
  // 扩展的属性
  interceptors?: HYRequestInterceptors
  // 创建出不同的实例保存到instance
  // constructor(config: AxiosRequestConfig) {
  // 因为HYRequestConfig继承了AxiosRequestConfig
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 扩展的属性
    this.interceptors = config.interceptors
    // 1、创建完requestInterceptors放到实例里面
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器: 响应成功拦截')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应失败拦截')
        return err
      }
    )
  }

  // 使用默认的不能传入任何拦截器
  // request(config: AxiosRequestConfig): void {
  //   this.instance.request(config).then((res) => {
  //     console.log(res)
  //   })
  // }
  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
  // }
  // request() {}
  // get() {}
}

export default HYRequest
