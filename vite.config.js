import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,  // Usa o valor de PORT do Render, ou 3000 como fallback
  },
});
