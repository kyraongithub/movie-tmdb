import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test.setup.ts',
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/container/**/*.{ts,tsx}',
        'src/pages/**/*.{ts,tsx}',
        'src/layout/**/*.{ts,tsx}',
        '!./src/components/**/*.{test,spec}.{ts,tsx}',
        '!./src/components/**/*.{interface,types}.{ts,tsx}',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
