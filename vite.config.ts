import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import svgLoader from 'vite-svg-loader'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: '/my-personal-website/',
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/] }),
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
        '@': path.resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
        'USE': path.resolve(__dirname, './src/use'),
        'UTILS': path.resolve(__dirname, './src/utils'),
        'VIEWS': path.resolve(__dirname, './src/views'),
        'COMPONENTS': path.resolve(__dirname, './src/components'),
        'STORE': path.resolve(__dirname, './src/store'),
        'API': path.resolve(__dirname, './src/api/modules'),
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
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      minify: 'esbuild',
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    // css配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
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
