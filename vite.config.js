import { glob } from 'glob'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
 base: '/',
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: glob.sync('./src/**/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});