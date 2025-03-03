import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Portfolio/', // Ensure this matches your repository name
  plugins: [vue()],
})
