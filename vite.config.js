import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  root: 'client',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src')
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
