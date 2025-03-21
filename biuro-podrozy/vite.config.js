import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000, 
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    loader: 'tsx', // Treat .js files as JSX without renaming
    include: /\.(js|jsx)$/, // Ensure Vite processes both .js and .jsx
    jsxInject: `import React from 'react'` // Auto-import React
  }
});
