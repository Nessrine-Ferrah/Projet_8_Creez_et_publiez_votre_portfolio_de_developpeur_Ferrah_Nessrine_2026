import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: "esbuild", // ou "terser" pour une compression plus forte
    sourcemap: false,  // désactive les fichiers .map pour alléger le build
    chunkSizeWarningLimit: 1000, // évite les alertes sur les gros fichiers
  },
})
