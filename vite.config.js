import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Mudando para 3001 para evitar conflito
    host: '0.0.0.0', // Permite que o Vite escute em todas as interfaces de rede
  },
  build: {
    outDir: 'dist', // Pasta onde os arquivos de build vão ser gerados
  },
})
