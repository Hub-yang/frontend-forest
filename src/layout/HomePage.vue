<template>
  <div class="body">
    <!-- 返回顶部 -->
    <el-backtop :right="30" :bottom="80" :visibility-height="100" />
    <!-- 导航栏 -->
    <nav :class="['nav', navActive ? 'active' : '']" ref="nav">
      <div class="container">
        <h1 class="logo"><a href="#">前端资源导航</a></h1>
        <ul>
          <li v-for="nav in navList" :key="nav.id" @click="handleClickNav(nav.id)">
            <a href="#" :class="[nav.active ? 'current' : '']">{{ nav.navName }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hero">
      <div class="container">
        <h1>欢迎来到我的站点--前端资源导航</h1>
        <p>这里汇聚一些前端必备知识库网站与工具导航，开发查询一站搞定</p>
      </div>
    </div>

    <section class="main_container">
      <cardList title="标题一" :tabList="tabList"></cardList>
      <cardList title="标题二" :tabList="tabList"></cardList>
    </section>
  </div>
</template>

<script setup>
import { nanoid } from 'nanoid'
import useNavFixed from 'USE/useNavFixed.js'
const cardList = defineAsyncComponent(() => import('./cardList.vue'))
const { nav, navActive, navList, handleClickNav } = useNavFixed()

const tabList = ref([
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
    url: 'https://react.docschina.org/',
    img: 'react.docschina.org.png',
    title: 'React',
    tags: ['react', 'js', '框架'],
    content: '用于构建用户界面的 JavaScript 库',
  },
  {
    id: nanoid(),
    url: 'https://cn.vitejs.dev/',
    img: 'cn.vitejs.dev.png',
    title: 'Vite',
    tags: ['vite', 'js', '工具链'],
    content: '下一代的前端工具链，为开发提供极速响应',
  },
  {
    id: nanoid(),
    url: 'http://nodejs.cn/',
    img: 'nodejs.cn.png',
    title: 'Node.js',
    tags: ['nodejs', 'js'],
    content: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
  },
])
</script>

<style scoped lang="scss">
@import '@/styles/homepage.scss';
</style>
