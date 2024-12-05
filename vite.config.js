import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy :{
    '.netlify/functions': {
      target: 'http://localhost:8888',
      changeOrigine: true,
      rewrite: (path) => path.replace("",""),
    
    }
  }
})
