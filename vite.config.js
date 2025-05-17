import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/js/main.js',
      output: {
        entryFileNames: 'main.min.js'
      }
    }
  }
})
