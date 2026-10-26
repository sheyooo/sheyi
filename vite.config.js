import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { host: '127.0.0.1', port: 3000, strictPort: true },
  build: { outDir: 'build' },
  test: { environment: 'jsdom', setupFiles: ['./src/test-setup.js'] },
});
