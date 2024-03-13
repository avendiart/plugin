import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: './src/index.ts',
      output: {
        entryFileNames: 'index.js',
      },
    },
  },
})
