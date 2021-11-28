// 局部注册抽离gloabal-------------------
import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
// import './service/axios.demo'
import hyRequest from './service'
import router from './router'
import store from './store'

const app = createApp(App)
globalRegister(app)

app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// hyRequest.get()
hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

// --------------全局注册elementplus-------------------
// import { createApp } from 'vue'
// import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

// import router from './router'
// import store from './store'

// const app = createApp(App)

// app.use(router)
// app.use(store)
// app.use(ElementPlus)
// app.mount('#app')

// // console.log(VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// ----------局部注册elementplus-------------------
// import { createApp } from 'vue'
// import App from './App.vue'

// import 'element-plus/theme-chalk/base.css'
// import { ElButton, ElForm, ElAlert, ElBacktop } from 'element-plus'
// const components = [ElButton, ElForm, ElAlert, ElBacktop]
// // 抽离
// import router from './router'
// import store from './store'

// const app = createApp(App)
// // 循环多个
// for (const component of components) {
//   app.component(component.name, component)
// }
// app.component(ElButton.name, ElButton)

// app.use(router)
// app.use(store)
// app.mount('#app')

// // console.log(VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
