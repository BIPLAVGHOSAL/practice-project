import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [react()];
  
  // Only add ESLint plugin in serve mode and not when running tests
  if (command === 'serve' && !process.env.VITEST) {
    plugins.push(eslint({
      exclude: ['**/node_modules/**', '**/dist/**', '**/src/test/**']
    }));
  }
  
  return {
    plugins,
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
    },
  };
});
