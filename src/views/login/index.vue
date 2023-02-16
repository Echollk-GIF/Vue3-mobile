<template>
  <div>
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmitByPwd">
      <van-cell-group inset>
        <van-field
          name="username"
          placeholder="请输入用户名"
          left-icon="manager"
          v-model="userName"
        />
        <van-field
          type="password"
          name="password"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="userPwd"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { loginByPwd } from '../../api/user'

function submitByPwd (user) {
  const onSubmitByPwd = async () => {
    const res = await loginByPwd(user)
    if (res.data.code === 0) {
      console.log('登录成功')
    } else {
      console.log('用户名或密码错误')
    }
  }
  return {
    onSubmitByPwd
  }
}
export default {
  setup () {
    const user = reactive({
      userName: '',
      userPwd: ''
    })
    return {
      ...toRefs(user),
      ...submitByPwd(user)
    }
  }
}
</script>

<style>
</style>
