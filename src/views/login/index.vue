<template>
  <div>
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field name="userName" placeholder="请输入用户名" />
        <van-field type="password" name="userPwd" placeholder="请输入密码" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
