import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    dir: './src',
    setupFiles: ['./setup-tests.ts'],
  },
})
