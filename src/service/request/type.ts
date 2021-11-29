import { AxiosRequestConfig, AxiosResponse } from 'axios'
// 拦截器：拦截token，loading等，每个实例需要有不同的拦截类型
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  // responseInterceptor?: (config: any) => any
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 在AxiosRequestConfig基础上进行扩展
  // 有interceptors属性，并且类型为HYRequestInterceptors
  interceptors?: HYRequestInterceptors<T>
  // 在不同实例上可以设定是否有loading
  showLoading?: boolean
}
