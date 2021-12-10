<template>
  <div class="login-panal">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <i class="el-icon-user-solid">账号登陆</i>
          </span>
        </template>
        <LoginAccout ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <i class="el-icon-mobile-phone">手机登陆</i>
          </span>
        </template>
        <LoginPhone />
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
    // 默认打勾
    const isKeepPassword = ref(true)
    //不默认为空可以执行真正登录,但是需要传泛型是loginaccount但是他是个对象
    const accountRef = ref<InstanceType<typeof LoginAccout>>() //默认为空然后返回再进行绑定logonaccount
    // 大的告诉小的执行操作：直接拿组件对象ref
    const handleLoginClick = () => {
      console.log('立即登录', accountRef.value) //目的是执行account组件的（accountRef.value.loginaction）
      accountRef.value?.LoginAction()
      // 保证loginAction写错是就标红不用编译运行
    }
    return { handleLoginClick, isKeepPassword, accountRef }
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
