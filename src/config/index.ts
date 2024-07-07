import { nanoid } from 'nanoid'

interface AudioItem {
  name?: string
  artist?: string
  url?: string
  cover?: string
  lrc?: string
}

interface MenuItem {
  id: string
  url: string
  img: string
  title: string
  tags: string[]
  content?: string
}

interface MenuList { [key: string]: MenuItem[] }

interface NavItem {
  id: string
  navName: string
  active: boolean
  href: string
}

export default () => {
  const navList: NavItem[] = [
    // { id: nanoid(), navName: '首页', active: true },
    { id: nanoid(), navName: '博客', active: false, href: 'https://huberyyang.site:82/' },
    // { id: nanoid(), navName: '个人健身管理系统', active: false, href: '' },
    // { id: nanoid(), navName: '个人摄影作品集', active: false, href: '' },
    { id: nanoid(), navName: 'GitHub', active: false, href: 'https://github.com/Hub-yang' },
    { id: nanoid(), navName: '主页', active: false, href: 'https://huberyyang.site/' },
    { id: nanoid(), navName: '音乐', active: false, href: 'https://huberyyang.site:83/' },
  ]
  const audioList: AudioItem[] = [
    {
      name: '黑色泡沫',
      artist: '林俊杰',
      url: 'https://www.huberyyang.site/audios/%E6%9E%97%E4%BF%8A%E6%9D%B0/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
      cover: 'https://www.huberyyang.site/covers/%E6%9E%97%E4%BF%8A%E6%9D%B0/%E9%87%8D%E6%8B%BE_%E5%BF%AB%E4%B9%90.jpg',
      lrc: 'https://www.huberyyang.site/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.lrc',
    },
    {
      name: 'FIND YOU',
      artist: '邓紫棋',
      url: 'https://www.huberyyang.site/audios/%E9%82%93%E7%B4%AB%E6%A3%8B/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-FIND%20YOU.flac',
      cover: 'https://www.huberyyang.site/covers/%E9%82%93%E7%B4%AB%E6%A3%8B/%E5%90%AF%E7%A4%BA%E5%BD%95.jpg',
      lrc: 'https://www.huberyyang.site/lrcs/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-FIND%20YOU.lrc',
    },
    {
      name: '粉色海洋',
      artist: '周杰伦',
      url: 'https://www.huberyyang.site/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.flac',
      cover:
        'https://www.huberyyang.site/covers/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BD%9C%E5%93%81.jpg',
      lrc: 'https://www.huberyyang.site/lrcs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.lrc',
    },
  ]

  const menuList: MenuList = {
    // 框架与生态
    list1: [
      {
        id: nanoid(),
        url: 'https://cn.vuejs.org/',
        img: 'cn.vuejs.org.png',
        title: 'Vue.js',
        tags: ['vue', 'js', '框架'],
        content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架',
      },
      {
        id: nanoid(),
        url: 'https://vuex.vuejs.org/zh/',
        img: 'cn.vuejs.org.png',
        title: 'Vuex',
        tags: ['vue', '库'],
        content: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库',
      },
      {
        id: nanoid(),
        url: 'https://router.vuejs.org/zh/',
        img: 'cn.vuejs.org.png',
        title: 'Vue Router',
        tags: ['vue', '库'],
        content: 'Vue.js 的官方路由',
      },
      {
        id: nanoid(),
        url: 'https://cli.vuejs.org/zh/',
        img: 'cn.vuejs.org.png',
        title: 'Vue Cli',
        tags: ['vue', '库'],
        content: 'Vue.js 开发的标准工具',
      },
      {
        id: nanoid(),
        url: 'https://pinia.web3doc.top/',
        img: 'pinia.web3doc.top.png',
        title: 'Pinia',
        tags: ['vue', '库'],
        content: 'Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态',
      },
      {
        id: nanoid(),
        url: 'https://react.docschina.org/',
        img: 'react.docschina.org.png',
        title: 'React',
        tags: ['react', 'js', '框架'],
        content: '用于构建用户界面的 JavaScript 库',
      },
      {
        id: nanoid(),
        url: 'https://reactrouter.com/en/main',
        img: 'reactrouter.com/en/main.png',
        title: 'React Router',
        tags: ['react', '库'],
        content: 'React.js的官方路由',
      },
      {
        id: nanoid(),
        url: 'https://cn.redux.js.org/',
        img: 'cn.redux.js.org.png',
        title: 'Redux',
        tags: ['redux', '库'],
        content: 'JS 应用的状态容器，提供可预测的状态管理',
      },
      {
        id: nanoid(),
        url: 'https://reactnative.cn/',
        img: 'reactnative.cn.png',
        title: 'React Native',
        tags: ['react native', 'js', '框架'],
        content: '一次学习，随处编写',
      },
      {
        id: nanoid(),
        url: 'https://www.nuxtjs.cn/',
        img: 'www.nuxtjs.cn.png',
        title: 'NuxtJS',
        tags: ['nuxtjs', 'vue', '框架'],
        content: '使用简便的 Vue 框架',
      },
      {
        id: nanoid(),
        url: 'https://www.nextjs.cn/',
        img: 'www.nextjs.cn.png',
        title: 'Next.js',
        tags: ['nextjs', 'react', '框架'],
        content: '这是一个用于 生产环境的 React 框架',
      },
      {
        id: nanoid(),
        url: 'https://www.solidjs.com/',
        img: 'www.solidjs.com.png',
        title: 'solid.js',
        tags: ['solidjs', 'js', '框架'],
        content: '一个用于构建用户界面，简单高效、性能卓越的JavaScript库',
      },
      {
        id: nanoid(),
        url: 'https://www.sveltejs.cn/',
        img: 'www.sveltejs.cn.png',
        title: 'Svelte.js',
        tags: ['sveltejs', 'js', '框架'],
        content: 'Svelte 是一种全新的构建用户界面的方法',
      },
      {
        id: nanoid(),
        url: 'https://flutter.cn/',
        img: 'flutter.cn.png',
        title: 'Flutter',
        tags: ['flutter', '框架'],
        content: 'Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用',
      },
      {
        id: nanoid(),
        url: 'https://www.alpinejs.cn/',
        img: 'www.alpinejs.cn.png',
        title: 'Alpine.js',
        tags: ['alpinejs', 'js', '框架'],
        content: 'Alpine.js 通过很低的成本提供了与 Vue 或 React 这类大型框架相近的响应式和声明式特性',
      },

      {
        id: nanoid(),
        url: 'https://angular.cn/',
        img: 'angular.cn.png',
        title: 'Angular.js',
        tags: ['amgular', 'js', '框架'],
        content: '现代 Web 开发平台',
      },
      {
        id: nanoid(),
        url: 'https://www.preactjs.com.cn/',
        img: 'www.preactjs.com.cn.png',
        title: 'Preact.js',
        tags: ['preact', 'js', '框架'],
        content: 'React 的轻量级替代方案，体积仅有 3kB，并且拥有与 React 相同的 API',
      },
      {
        id: nanoid(),
        url: 'https://uniapp.dcloud.net.cn/',
        img: 'uniapp.dcloud.net.cn.png',
        title: 'uni-app',
        tags: ['uni-app', '框架'],
        content:
      'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台',
      },
      {
        id: nanoid(),
        url: 'https://ionicframework.com/',
        img: 'ionicframework.com.png',
        title: 'Ionic',
        tags: ['ionic', '框架'],
        content: 'Ionic 是目前最有潜力的一款 HTML5 手机应用开发框架',
      },
      {
        id: nanoid(),
        url: 'https://alitajs.com/zh-CN',
        img: 'alitajs.com/zh-CN.png',
        title: 'Alita',
        tags: ['react', 'alita', '框架'],
        content: '一个基于 Umi 的 React 前端框架',
      },

      // {
      //   id: nanoid(),
      //   url: 'http://nodejs.cn/',
      //   img: 'nodejs.cn.png',
      //   title: 'Node.js',
      //   tags: ['nodejs', 'js'],
      //   content: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
      // },
    ],
    // 打包构建工具
    list2: [
      {
        id: nanoid(),
        url: 'https://www.webpackjs.com/',
        img: 'www.webpackjs.com.png',
        title: 'Webpack',
        tags: ['Webpack', '打包工具'],
        content: '构建你的 assets',
      },
      {
        id: nanoid(),
        url: 'https://cn.vitejs.dev/',
        img: 'cn.vitejs.dev.png',
        title: 'Vite',
        tags: ['vite', '工具链'],
        content: '下一代的前端工具链，为开发提供极速响应',
      },
      {
        id: nanoid(),
        url: 'https://www.gruntjs.net/',
        img: 'www.gruntjs.net.png',
        title: 'Grunt.js',
        tags: ['gruntjs', '构建工具'],
        content: 'JavaScript 世界的构建工具',
      },
      {
        id: nanoid(),
        url: 'https://www.gulpjs.com.cn/',
        img: 'www.gulpjs.com.cn.png',
        title: 'Gulp.js',
        tags: ['gulpjs', '构建工具'],
        content: '用自动化构建工具增强你的工作流程！',
      },
      {
        id: nanoid(),
        url: 'https://www.rollupjs.com/',
        img: 'www.rollupjs.com.png',
        title: 'Rollup',
        tags: ['rollupjs', '打包工具'],
        content: 'Rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用',
      },
      {
        id: nanoid(),
        url: 'https://www.babeljs.cn/',
        img: 'www.babeljs.cn.png',
        title: 'Babel',
        tags: ['babeljs', '编译器'],
        content: 'Babel 是一个 JavaScript 编译器',
      },
      {
        id: nanoid(),
        url: 'https://www.parceljs.cn/',
        img: 'www.parceljs.cn.png',
        title: 'Parcel',
        tags: ['parceljs', '打包工具'],
        content: '极速零配置Web应用打包工具',
      },
      {
        id: nanoid(),
        url: 'https://www.romejs.cn/',
        img: 'www.romejs.cn.png',
        title: 'Rome.js',
        tags: ['romejs', '工具链'],
        content: 'Rome 是一个完整的 JavaScript 工具链，集代码检测、打包、编译、测试等功能于一身',
      },
    ],
    // css/组件库
    list3: [
      {
        id: nanoid(),
        url: 'https://ant.design/index-cn',
        img: 'ant.design/index-cn.png',
        title: 'Ant Design',
        tags: ['AntDesign', '组件库', 'react'],
        content: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
      },
      {
        id: nanoid(),
        url: 'https://antdv.com/components/overview-cn',
        img: 'antdv.com/components/overview-cn.png',
        title: 'Ant Design Vue',
        tags: ['AntDesign', '组件库', 'vue'],
        content: 'ant-design-vue 为 Web 应用提供了丰富的基础 UI 组件',
      },
      {
        id: nanoid(),
        url: 'https://element-plus.gitee.io/zh-CN/',
        img: 'element-plus.gitee.io/zh-CN/.png',
        title: 'Element Plus',
        tags: ['element', '组件库', ' vue3'],
        content: '基于 Vue 3，面向设计师和开发者的组件库',
      },
      {
        id: nanoid(),
        url: 'https://element.eleme.cn/#/zh-CN',
        img: 'element.eleme.cn.png',
        title: 'Element',
        tags: ['element', '组件库', 'vue2'],
        content: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
      },
      {
        id: nanoid(),
        url: 'https://vant-contrib.gitee.io/vant/#/zh-CN/',
        img: 'vant-ui.github.io.png',
        title: 'Vant',
        tags: ['vant', '移动端组件库', 'vue3'],
        content: '轻量、可定制的移动端 Vue 组件库',
      },
      {
        id: nanoid(),
        url: 'https://www.naiveui.com/zh-CN/os-theme',
        img: 'www.naiveui.com/zh-CN/os-theme.png',
        title: 'Naive UI',
        tags: ['naiveui', '组件库', 'vue3'],
        content: '一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript，快',
      },
      {
        id: nanoid(),
        url: 'https://echarts.apache.org/zh/index.html',
        img: 'echarts.apache.org/zh.png',
        title: 'ECharts',
        tags: ['ECharts', '组件库'],
        content: '一个基于 JavaScript 的开源可视化图表库',
      },
      {
        id: nanoid(),
        url: 'https://www.bootcss.com/',
        img: 'www.bootcss.com.png',
        title: 'Bootstrap',
        tags: ['Bootstrap', '框架'],
        content: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单',
      },
      {
        id: nanoid(),
        url: 'https://unocss.dev/',
        img: 'unocss.dev.png',
        title: 'UnoCSS',
        tags: ['unocss', 'css'],
        content: '即时按需原子CSS引擎',
      },
      {
        id: nanoid(),
        url: 'https://cn.windicss.org/',
        img: 'cn.windicss.org.png',
        title: 'Windi CSS',
        tags: ['windicss', 'css', '框架'],
        content: '下一代工具类 CSS 框架',
      },
      {
        id: nanoid(),
        url: 'https://www.tailwindcss.cn/',
        img: 'www.tailwindcss.cn.png',
        title: 'tailwindcss',
        tags: ['tailwindcss', 'css', '框架'],
        content: '无需离开您的HTML，即可快速建立现代网站',
      },
      {
        id: nanoid(),
        url: 'https://bulma.zcopy.site/',
        img: 'bulma.zcopy.site.png',
        title: 'Bulma',
        tags: ['Bulma', 'css', '框架'],
        content: 'Bulma是一个免费、开源的CSS框架，它提供了易于使用的前端的组件，您可以轻松地组合这些组件来构建响应式Web界面',
      },
      {
        id: nanoid(),
        url: 'https://purecss.bootcss.com/',
        img: 'purecss.bootcss.com.png',
        title: 'Pure.CSS',
        tags: ['Pure', 'css', '框架'],
        content: 'Pure 是一组小巧且支持响应式布局的 CSS 模块，可用于任何 web 项目',
      },
      {
        id: nanoid(),
        url: 'https://www.sass.hk/',
        img: 'www.sass.hk.png',
        title: 'Sass',
        tags: ['sass', '预处理器'],
        content: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
      },
      {
        id: nanoid(),
        url: 'https://www.stylus-lang.cn/',
        img: 'www.stylus-lang.cn.png',
        title: 'Stylus',
        tags: ['stylus', '预处理器'],
        content: '富于表现力、动态的、健壮的 CSS',
      },
      {
        id: nanoid(),
        url: 'https://less.devjs.cn/',
        img: 'lesscss.org.png',
        title: 'less',
        tags: ['less', '预处理器'],
        content: 'Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言',
      },
    ],
  }

  return {
    navList,
    audioList,
    menuList,
  }
}
