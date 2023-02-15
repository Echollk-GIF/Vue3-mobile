import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible"
import router from './router'

//在使用函数组件时，unplugin-vue-components 无法自动引入对应的样式，因此需要手动引入样式。
// Toast
import 'vant/es/toast/style'
// Dialog
import 'vant/es/dialog/style'
// Notify
import 'vant/es/notify/style'
// ImagePreview
import 'vant/es/image-preview/style'

const app = createApp(App)
app.use(router)
app.mount('#app')
