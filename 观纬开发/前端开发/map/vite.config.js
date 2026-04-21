import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true, // 自动打开浏览器
    cors: true  // 确保加载外部瓦片或数据源时不会产生跨域阻碍
  },
  // 如果坐标 JSON 文件非常大，可以优化静态资源处理
  assetsInclude: ['**/*.csv', '**/*.geojson']
})



// https://vite.dev/config/
