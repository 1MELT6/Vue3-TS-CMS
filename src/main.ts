import { createApp } from 'vue'
import App from './App.vue'
// 全局注册
// import ElementPlus from 'element-plus'
//import 'element-plus/lib/theme-chalk/index.css'

// 局部注册
// import 'element-plus/theme-chalk/base.css'
// import { ElButton, ElForm, ElAlert, ElBacktop } from 'element-plus'
// const components = [ElButton, ElForm, ElAlert, ElBacktop]
// 抽离
import { globalRegister } from './global'
import router from './router'
import store from './store'

const app = createApp(App)
// 循环多个
// for (const component of components) {
//   app.component(component.name, component)
// }
// app.component(ElButton.name, ElButton)
globalRegister(app)

app.use(router)
app.use(store)
// app.use(ElementPlus).
app.mount('#app')

// console.log(VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
