import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Caso queira usar a porta 3001
    host: '0.0.0.0', // Permite que o Vite escute em todas as interfaces de rede
  },
  build: {
    outDir: 'dist',
  },
})
