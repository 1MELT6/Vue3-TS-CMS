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

app.use(router)
app.use(store)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// 没有单独拦截处理

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
