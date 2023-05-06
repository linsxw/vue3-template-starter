import path from 'node:path'
import type { UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import progress from 'vite-plugin-progress'

export default ({ mode }: UserConfig) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
    },
    plugins: [
      VueMacros({
        plugins: {
          vue: Vue({
            reactivityTransform: true,
          }),
        },
      }),
      Components({
        dts: 'types/components.d.ts',
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
        resolvers: [
          IconsResolver({
            customCollections: ['icon'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          icon: FileSystemIconLoader('./src/assets/icons'),
        },
        autoInstall: true,
      }),
      AutoImport({
        imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core'],
        dts: 'types/auto-imports.d.ts',
        dirs: ['./src/composables'],
        vueTemplate: true,
      }),
      progress(),
    ],
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
    },
  })
}
