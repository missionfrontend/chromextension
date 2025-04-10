import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        background: path.resolve(__dirname, './public/background.js'),
        popup: path.resolve(__dirname, 'index.html')
      },
    },
  },
})
