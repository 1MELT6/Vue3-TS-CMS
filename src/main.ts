// 局部注册抽离gloabal-------------------
import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios.demo'
import hyRequest from './service'
import router from './router'
import store from './store'

const app = createApp(App)
globalRegister(app)
// console.log(app.config.globalProperties.$filters)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

app.use(store)
app.use(router)

// 全局格式化时间显得内容多最好封装抽离
// app.config.globalProperties.$filters = {
//   foo() {
//     console.log('foo')
//   },
//   formatTime(value: string) {
//     return '222222222'
//   }
// }

app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// 没有单独拦截处理
