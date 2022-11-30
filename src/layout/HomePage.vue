<template>
  <div class="body">
    <nav :class="['nav', navActive ? 'active' : '']" ref="nav">
      <div class="container">
        <h1 class="logo"><a href="#">My Website</a></h1>
        <ul>
          <li v-for="nav in navList" :key="nav.id" @click="handleClickNav(nav.id)"><a href="#"
              :class="[nav.active ? 'current' : '']">{{ nav.navName
              }}</a></li>
        </ul>
      </div>
    </nav>

    <div class="hero">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </div>
    </div>

    <section class="main_container">
      <el-row justify="space-around">
        <el-col :span="7" v-for="tab in tabList" :key="tab.id">
          <el-card shadow="hover" :body-style="{ padding: 0 }" @click="handleRedirect(tab.url)">
            <div class="card_main">
              <div class="card_l">
                <div class="logo">
                  <svg viewBox="0 0 128 128" width="40" height="40">
                    <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path>
                    <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="card_m">
                <p class="title">{{ tab.title }}</p>
                <div class="tags">
                  <el-tag v-for="(tag, index) in tab.tags" :key="index" type="success" round color="#fff">{{ tag
                  }}</el-tag>
                </div>
                <el-tooltip :content="tab.content" placement="bottom" effect="dark" :show-arrow="false" :offset="5">
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
import { nanoid } from "nanoid"
import useNavFixed from "USE/useNavFixed.js"
const { nav, navActive, navList, handleClickNav } = useNavFixed()


const tabList = ref([
  { id: nanoid(), url: "https://cn.vuejs.org/", title: "Vue.js", tags: ['one', 'two', 'three'], content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。' },
  { id: nanoid(), url: "https://cn.vuejs.org/", title: "Vue.js", tags: ['one', 'two', 'three'], content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。' },
  { id: nanoid(), url: "https://cn.vuejs.org/", title: "Vue.js", tags: ['one', 'two', 'three'], content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。' },
])

const handleRedirect = (url) => {
  window.open(url, "_blank")
}

</script>

<style scoped lang="scss">
@import "@/styles/homepage.scss"
</style>
