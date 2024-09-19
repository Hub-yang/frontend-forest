import path from 'node:path'
import process from 'node:process'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      svgLoader(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      ElementPlus({
        // useSource: true
      }),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
        dirs: ['./src/utils/**'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ElementPlusResolver(), IconsResolver(), VueUseComponentsResolver()],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
    // alias别名设置
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    // 服务设置
    server: {
      host: '0.0.0.0',
      port: 3015,
      open: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_REQUEST_API,
          changeOrigin: true,
          rewrite: (pathStr: string) => pathStr.replace(env.VITE_APP_BASE_API, env.VITE_APP_TRUE_API),
        },
      },
    },
    // build配置
    build: {
      outDir: 'dist',
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
    },
    // css配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/styles/variables.scss";`,
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                // 去除elementPlus内部charset警告
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
  })
},
)
