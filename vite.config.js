import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
})
