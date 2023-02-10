<template>
  <div class="body">
    <!-- 返回顶部 -->
    <el-backtop :right="30" :bottom="80" :visibility-height="100" />
    <!-- 导航栏 -->
    <nav :class="['nav', navActive ? 'active' : '']" ref="nav">
      <div class="container">
        <h1 class="logo"><a href="#">前端森林</a></h1>
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
      <cardList title="框架与生态" :tabList="tabListOne"></cardList>
      <cardList title="打包/构建工具" :tabList="tabListTwo"></cardList>
      <cardList title="css/组件库" :tabList="tabListThree"></cardList>
    </section>
  </div>
</template>

<script setup>
import { list1, list2, list3 } from './list.js'
import useNavFixed from 'USE/useNavFixed.js'
const cardList = defineAsyncComponent(() => import('./cardList.vue'))
const { nav, navActive, navList, handleClickNav } = useNavFixed()

const tabListOne = ref(list1)
const tabListTwo = ref(list2)
const tabListThree = ref(list3)
</script>

<style scoped lang="scss">
@import '@/styles/homepage.scss';
</style>
