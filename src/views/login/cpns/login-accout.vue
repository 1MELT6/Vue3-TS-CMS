<template>
  <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
    <!-- 不加：model会识别不到限制5-10个字符 -->
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" />
    </el-form-item>
    <!-- <el-button type="primary" class="loginButton">登录</el-button> -->
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  // props: {
  //   account: {
  //     type: Object
  //   }
  // },
  setup() {
    // const rules = {
    //   name: [
    //     {
    //       required: true,
    //       message: '用户名是必传内容~',
    //       trigger: 'blur'
    //     },
    //     {
    //       pattern: /^[a-z0-9]{5,10}$/,
    //       message: '用户名必须是5~10个字母或者数字~',
    //       trigger: 'blur'
    //     }
    //   ],
    //   password: [
    //     {
    //       required: true,
    //       message: '密码是必传内容~',
    //       trigger: 'blur'
    //     },
    //     {
    //       pattern: /^[a-z0-9]{3,}$/,
    //       message: '用户名必须是3位以上的字母或者数字~',
    //       trigger: 'blur'
    //     }
    //   ]
    // }
    const account = reactive({
      name: '',
      password: ''
    })
    //  全局引用elform需要另外导入
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 从handlelogin过来
    const LoginAction = () => {
      formRef.value?.validate((valid) => {
        console.log(valid) //验证失败返回false
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
