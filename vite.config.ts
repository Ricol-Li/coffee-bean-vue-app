import { defineConfig, loadEnv } from 'vite'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: [
      vue(),
      UnoCSS(),
      ElementPlus({}),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          enabled: false, // 给eslint生成的配置，只需要一次
        },
      }),
      Components({
        // 自动导入 Element Plus 组件
        resolvers: [ElementPlusResolver()],
        // 所有组件可以自动加载
        dirs: ['src/components', 'src/layout/components'],
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      host: '0.0.0.0',
      port: 9000,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
