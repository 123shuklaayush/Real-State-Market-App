import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': {
        target: 'https://real-estate-application-k9nm.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
