import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器：拦截token，loading等，每个实例需要有不同的拦截类型
interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  // 在AxiosRequestConfig基础上进行扩展
  // 有interceptors属性，并且类型为HYRequestInterceptors
  interceptors?: HYRequestInterceptors
}
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
