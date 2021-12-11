<template>
  <div class="login-panal">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <i class="el-icon-user-solid">账号登陆</i>
          </span>
        </template>
        <LoginAccout ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <i class="el-icon-mobile-phone">手机登陆</i>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginButton" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginPhone from './login-phone.vue'
import LoginAccout from './login-accout.vue'
export default defineComponent({
  components: {
    LoginPhone,
    LoginAccout
  },
  setup() {
    // 1、定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccout>>() //默认为空然后返回再进行绑定logonaccount
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account') //类似路由重定向，与model配合使用
    // 2、定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        // console.log('立即登录', accountRef.value) //目的是执行account组件的（accountRef.value.loginaction）
        accountRef.value?.LoginAction(isKeepPassword.value)
      } else {
        console.log('phoneRef调用phoneloginAction')
      }
    }
    return {
      handleLoginClick,
      isKeepPassword,
      accountRef,
      currentTab,
      phoneRef
    }
  }
})
</script>
<style scoped lang="less">
.el-tabs {
  width: 400px;
}
.title {
  text-align: center;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.loginButton {
  margin-top: 10px;
  width: 100%;
}
</style>
