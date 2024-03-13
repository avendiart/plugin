import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [viteSingleFile(), react()],
  build: {
    emptyOutDir: false,
    minify: false,
  },
})
