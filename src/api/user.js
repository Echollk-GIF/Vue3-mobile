import request from '../utils/request'

//账号密码登录
export const loginByPwd = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
