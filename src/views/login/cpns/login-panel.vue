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
        <LoginAccout />
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
      <el-checkbox>记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginButton">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPhone from './login-phone.vue'
import LoginAccout from './login-accout.vue'
export default defineComponent({
  components: {
    LoginPhone,
    LoginAccout
  },
  setup() {
    return {}
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
