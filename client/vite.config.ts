import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    tsConfigPaths(),
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~antd/, replacement: path.resolve('./', 'node_modules/antd/') },
      { find: '@', replacement: path.resolve('./', 'src') },
      /* {
        '@': path.resolve('./', 'src')
      } */
    ],
  },
})
