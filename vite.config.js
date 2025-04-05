import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // Usando a porta fornecida pelo Render ou 3000 por padrão
  },
});
