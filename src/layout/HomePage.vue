<template>
  <div class="body">
    <!-- 返回顶部 -->
    <el-backtop :right="40" :bottom="80" :visibility-height="100" />
    <!-- 导航栏 -->
    <nav :class="['nav', navActive ? 'active' : '']" ref="nav">
      <div class="container">
        <h1 class="logo"><a href="#">My Website</a></h1>
        <ul>
          <li v-for="nav in navList" :key="nav.id" @click="handleClickNav(nav.id)">
            <a href="#" :class="[nav.active ? 'current' : '']">{{ nav.navName }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hero">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
      </div>
    </div>

    <section class="main_container">
      <el-row justify="space-around">
        <el-col :span="5" v-for="tab in tabList" :key="tab.id">
          <el-card shadow="hover" :body-style="{ padding: 0 }" @click="handleRedirect(tab.url)">
            <div class="card_main">
              <div class="card_l">
                <div class="logo">
                  <img :src="tab.img" alt="err" />
                </div>
              </div>
              <div class="card_m">
                <p class="title">{{ tab.title }}</p>
                <div class="tags">
                  <el-tag v-for="(tag, index) in tab.tags" :key="index" :type="handleTagColor(tag)" round>{{
                      tag
                  }}</el-tag>
                </div>
                <el-tooltip :content="tab.content" placement="bottom" effect="dark" :show-arrow="false" :offset="5"
                  :show-after="300">
                  <p class="des">{{ tab.content }}</p>
                </el-tooltip>
              </div>
              <div class="card_r">
                <el-icon :size="15">
                  <DArrowRight />
                </el-icon>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script setup>
import { nanoid } from 'nanoid'
import useNavFixed from 'USE/useNavFixed.js'
const { nav, navActive, navList, handleClickNav } = useNavFixed()

const handleTagColor = (tag) => {
  switch (tag) {
    case 'js':
      return 'warning'
    case 'css':
      return 'primary'
    case 'vue':
      return 'success'
    default:
      return ''
  }
}

const tabList = ref([
  {
    id: nanoid(),
    url: 'https://cn.vuejs.org/',
    img: 'https://cn.vuejs.org/logo.svg',
    title: 'Vue.js',
    tags: ['vue', 'js', '框架'],
    content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架',
  },
  {
    id: nanoid(),
    url: 'https://react.docschina.org/',
    img: 'https://react.docschina.org/favicon.ico',
    title: 'React',
    tags: ['react', 'js', '框架'],
    content: '用于构建用户界面的 JavaScript 库',
  },
  {
    id: nanoid(),
    url: 'https://cn.vitejs.dev/',
    img: 'https://cn.vitejs.dev/logo.svg',
    title: 'Vite',
    tags: ['vite', 'js', '工具链'],
    content: '下一代的前端工具链，为开发提供极速响应',
  },
  {
    id: nanoid(),
    url: 'http://nodejs.cn/',
    img: 'http://img.nodejs.cn/favicon.png',
    title: 'Node.js',
    tags: ['nodejs', 'js'],
    content: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
  }
])

const handleRedirect = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped lang="scss">
@import '@/styles/homepage.scss';
</style>
