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
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // request() {}
  // get() {}
}

export default HYRequest
