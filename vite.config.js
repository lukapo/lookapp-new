import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: {
      rewrites: [
        // Ovo preusmjerava sve .html rute na index.html
        { from: /.*\.html$/, to: '/index.html' },
      ],
    },
  },
  base: ""
})
