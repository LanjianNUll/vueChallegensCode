/*
 * @Author: lanjian
 * @Date: 2023-03-16 17:31:32
 * @LastEditors: lanjian
 * @LastEditTime: 2023-03-16 17:42:06
 * @FilePath: \vue-challegens\src\main.ts
 * @Description: Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'vant/es/toast/style'
import router from './router'

const app = createApp(App)
app.use(router.router)
app.mount('#app')
