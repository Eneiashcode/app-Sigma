import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,  // Defina a porta que você deseja (ou 80, 8080, ou outra)
    host: '0.0.0.0', // Isso permite que o Vite escute em todas as interfaces de rede
  },
});
