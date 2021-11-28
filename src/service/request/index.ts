import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class HYRequest {
  // instance: any
  instance: AxiosInstance
  // 创建出不同的实例保存到instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
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
