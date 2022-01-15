import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true

class HYRequest {
  // instance: any
  instance: AxiosInstance
  // 扩展的属性
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  // 创建出不同的实例保存到instance
  // constructor(config: AxiosRequestConfig) {
  // 因为HYRequestConfig继承了AxiosRequestConfig
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 前方是null/undefined执行后面
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有的拦截器: 响应成功拦截')
        // 移除loading
        // setTimeout(() => {
        this.loading?.close()
        // }, 2000)
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('請求失敗~錯誤信息')
        } else {
          // console.log(res.data)
          // {id: 7, name: 'codertest', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywib…CdcxPw8TdwDGc-TSHc6_HY0QQSb4yy3bKZ6c2rQKUusfcmOTc'}
          return data
        }
      },
      (err) => {
        // console.log('所有的实例都有的拦截器: 响应失败拦截')
        this.loading?.close()

        if (err.response.status === 404) {
          console.log('404错误')
        }

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
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    //  由于不能在main拿到结果处理所以需要返回一个promise,所以类型不再是void而是promise
    //添加了类型<T>之后就可以在main设定interface
    return new Promise((resolve, reject) => {
      // 1、单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2、判断是否显示loading
      // 判断main.ts里的showloading是否为false,但是这样下面也默认没有loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1、单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // console.log(res)

          // 2、判断是否显示loading
          // 在96所以重新设置,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 3、将结果resolve返回出去（调用result的时候会调用外面的then）
          resolve(res)
        })
        .catch((err) => {
          // 在96所以重新设置,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  // }
  // request() {}
  // get() {}

  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
