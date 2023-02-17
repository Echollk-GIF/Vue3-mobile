import { createStore } from "vuex"
const TOKEN_KEY = 'USER_INFO'
const store = createStore({
  state: {
    //存储当前登录用户信息，包含token等数据
    userInfo: JSON.parse(window.localStorage.getItem(TOKEN_KEY)) || {},
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.userInfo))
    },
  },
})
export default store
