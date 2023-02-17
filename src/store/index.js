import { createStore } from "vuex"
import { getItem, setItem } from '../utils/storage'
const TOKEN_KEY = 'USER_INFO'
const store = createStore({
  state: {
    //存储当前登录用户信息，包含token等数据
    userInfo: getItem(TOKEN_KEY)
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
      setItem(TOKEN_KEY, state.userInfo)
    },
  },
})
export default store
