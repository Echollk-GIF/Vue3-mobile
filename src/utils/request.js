import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3005',
  //请求拦截器
  //相应拦截器
})

export default request
