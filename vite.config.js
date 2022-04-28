import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const isDev = process.env.NODE_ENV === 'development';
// https://vitejs.dev/config/
export default defineConfig({
  base: isDev ? '/' : './',
  plugins: [react()],
})
