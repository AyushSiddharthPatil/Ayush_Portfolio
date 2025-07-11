import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages deployment, but only in production mode
  base: mode === 'production' ? '/Ayush_Portfolio/' : '/',

  server: {
    host: '::',
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Add the static copy plugin to copy index.html from src to dist during build
  ].filter(Boolean),

  resolve: {
    alias: {
      // Resolve @ to the src directory for easier imports
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },

  optimizeDeps: {
    // Add optimization options here, if needed
  },
}));
