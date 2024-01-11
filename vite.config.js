import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      ws: true,
      changeOrigin: true,
      target: "https://rich-blue-llama-vest.cyclic.cloud/api"
    }
  }
})
