import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Importando o plugin do PWA

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Registra o PWA para atualizar automaticamente
      injectManifest: true, // Se você tiver um manifesto customizado
      manifest: {
        name: 'Sigma App',
        short_name: 'Sigma',
        description: 'Barbearia Sigma - Agende seus serviços e gerencie seu negócio',
        theme_color: '#0F1C1C',
        background_color: '#0F1C1C',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 3001, // Porta do servidor
    host: '0.0.0.0', // Permite que o Vite escute em todas as interfaces de rede
    allowedHosts: ['app-sigma.onrender.com'], // Adicione esta linha para permitir o host Render
  },
  build: {
    outDir: 'dist', // Pasta onde os arquivos de build vão ser gerados
  },
});
