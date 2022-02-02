import { createStore, Store, useStore as useVuexStore } from 'vuex'
import user from './main/user/user'
// 这里声明后下面泛型里使用后，必须实现所有接口里的属性
// interface IRootState {
//   name: string
//   age: number
// }
import login from './login/login'
import { IRootState, IStoreType } from './types'
import dashboard from './main/analysis/dashboard'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'libeicai',
      age: 18
    }
  },
  modules: {
    login,
    user,
    dashboard
  }
})
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
