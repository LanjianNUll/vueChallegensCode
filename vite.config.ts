/*
 * @Author: lanjian
 * @Date: 2023-03-16 17:31:32
 * @LastEditors: lanjian
 * @LastEditTime: 2023-03-16 17:34:16
 * @FilePath: \vue-challegens\vite.config.ts
 * @Description: Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    AutoImport({
      imports: [
        // presets
        'vue',
        'vue-router']
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8090
  }
})
