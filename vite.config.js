import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Ou 3001, se preferir
    host: '0.0.0.0', // Permite que o Vite escute em todas as interfaces de rede
    allowedHosts: ['app-sigma.onrender.com'], // Adicione o domínio do Render
  },
  build: {
    outDir: 'dist', // Pasta onde os arquivos de build vão ser gerados
  },
})
