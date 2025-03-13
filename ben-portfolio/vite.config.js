import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Adjust the chunk size warning limit (e.g., to 600 kB)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunking: group node_modules packages into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    }
  }
});
