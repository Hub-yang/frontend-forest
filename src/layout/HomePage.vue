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
            <a :href="nav.href" :class="[nav.active ? 'current' : '']" target="_blank">{{ nav.navName }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="section">
      <h2 id="text"><span>欢迎来到我的站点</span><br /><span>前端森林</span></h2>
      <img src="/images/bird1.png" id="bird1" />
      <img src="/images/bird2.png" id="bird2" />
      <img src="/images/forest.png" id="forest" />
      <span id="btn" @click="handlerScroll">前往</span>
      <img src="/images/rocks.png" id="rocks" />
      <img src="/images/water.png" id="water" />
    </section>

    <main class="main_container">
      <BaseSearchEngine />
      <cardList title="框架与生态" :tabList="tabListOne"></cardList>
      <cardList title="打包/构建工具" :tabList="tabListTwo"></cardList>
      <cardList title="css/组件库" :tabList="tabListThree"></cardList>
    </main>
    <!-- 页脚 -->
    <footer class="footer_container">
      <span>&#169; Mocheng.shuai 2022 - 2023 </span>
    </footer>
  </div>
</template>

<script setup>
import { list1, list2, list3 } from './list.ts'
import useNavFixed from 'USE/useNavFixed.js'
import useParallaxRolling from 'USE/useParallaxRolling.js'
const cardList = defineAsyncComponent(() => import('./cardList.vue'))
const BaseSearchEngine = defineAsyncComponent(() => import('@/components/BaseSearchEngine.vue'))
const { nav, navActive, navList, handleClickNav } = useNavFixed()
const { onMounted } = useParallaxRolling()

const tabListOne = ref(list1)
const tabListTwo = ref(list2)
const tabListThree = ref(list3)

const handlerScroll = () => {
  let main = document.querySelector('.main_container')
  let value = main.getBoundingClientRect().top - 60
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  })
}
</script>

<style scoped lang="scss">
@import '@/styles/homepage.scss';
</style>
