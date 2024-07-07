<script setup lang="ts">
import APlayer from 'APlayer'
import useNavFixed from '../hooks/useNavFixed'
import useParallaxRolling from '../hooks/useParallaxRolling'
import config from '@/config'

// 播放器
const cardList = defineAsyncComponent(() => import('./CardList.vue'))
const BaseSearchEngine = defineAsyncComponent(() => import('@/components/BaseSearchEngine.vue'))
const { nav: navEl, navActive, navList, handleClickNav } = useNavFixed()
const { onMounted } = useParallaxRolling()

const { list1, list2, list3 } = config().menuList

function handlerScroll() {
  const main = document.querySelector('.main_container') as HTMLElement
  const value = main.getBoundingClientRect().top - 60
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  })
}

// 播放器
onMounted(() => {
  (window as any).ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    lrcType: 3,
    audio: config().audioList,
  })
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="body">
    <!-- 播放器 -->
    <div id="player" />
    <!-- 返回顶部 -->
    <el-backtop :right="30" :bottom="80" :visibility-height="100" />
    <!-- 导航栏 -->
    <nav ref="navEl" class="nav" :class="[navActive ? 'active' : '']">
      <div class="container">
        <h1 class="logo">
          <a href="#">前端森林</a>
        </h1>
        <ul>
          <li v-for="{ id, href, active, navName } in navList" :key="id" @click="handleClickNav(id)">
            <a :href :class="[active ? 'current' : '']" target="_blank">{{ navName }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="section">
      <h2 id="text">
        <span>欢迎来到我的站点</span><br><span>前端森林</span>
      </h2>
      <img id="bird1" src="/images/bird1.png">
      <img id="bird2" src="/images/bird2.png">
      <img id="forest" src="/images/forest.png">
      <span id="btn" @click="handlerScroll">前往</span>
      <img id="rocks" src="/images/rocks.png">
      <img id="water" src="/images/water.png">
    </section>

    <main class="main_container">
      <BaseSearchEngine />
      <cardList title="框架与生态" :tab-list="list1" />
      <cardList title="打包/构建工具" :tab-list="list2" />
      <cardList title="css框架/组件库" :tab-list="list3" />
    </main>

    <!-- 页脚 -->
    <footer class="footer_container">
      <span>&#169; HuberyYang 2022 - {{ currentYear }} </span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/homepage.scss';
</style>
