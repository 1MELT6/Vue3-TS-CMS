<template>
  <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
    <!-- 不加：model会识别不到限制5-10个字符 -->
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
    <!-- <el-button type="primary" class="loginButton">登录</el-button> -->
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const LoginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1、判断是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2、开始进行登录验证 account默认是响应式对象 可以进行解构扩展运算符
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, LoginAction, formRef }
  }
})
</script>

<style scoped>
.loginButton {
  width: 100%;
}
</style>
