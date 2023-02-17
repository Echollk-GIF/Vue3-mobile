<template>
  <div>
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmitByPwd">
      <van-cell-group inset>
        <van-field
          name="userName"
          placeholder="请输入账号"
          left-icon="manager"
          v-model="userName"
          :rules="userFormRules.userName"
        />
        <van-field
          type="password"
          name="userPwd"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="userPwd"
          :rules="userFormRules.userPwd"
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
import { showSuccessToast, showFailToast, showLoadingToast } from 'vant'

function useSubmit (user) {
  const onSubmitByPwd = async () => {
    showLoadingToast({
      message: '登录中...',
      forbidClick: true,
    })
    const res = await loginByPwd(user)
    if (res.data.code === 0) {
      showSuccessToast('登录成功')
    } else {
      showFailToast('用户名或密码错误')
    }
  }
  // 定义表单校验规则
  const userFormRules = {
    userName: [{ required: true, message: "请输入账号" }],
    userPwd: [
      { required: true, message: "请输入密码" },
      { pattern: /^\d{6}$/, message: "密码格式错误" },
    ],
  }
  return {
    onSubmitByPwd,
    userFormRules
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
      ...useSubmit(user)
    }
  }
}
</script>

<style>
</style>
