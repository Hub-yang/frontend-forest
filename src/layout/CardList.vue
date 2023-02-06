<template>
  <div class="ary_container">
    <!-- 类别分组标题 -->
    <div class="ary_title">{{ title }}</div>
    <el-row justify="space-between" :gutter="15">
      <el-col :span="6" v-for="tab in tabList" :key="tab.id">
        <el-card shadow="hover" :body-style="{ padding: 0 }" @click="handleRedirect(tab.url)">
          <div class="card_main">
            <div class="card_l">
              <div class="logo">
                <img :src="`https://api.iowen.cn/favicon/${tab.img}`" alt="err" />
              </div>
            </div>
            <div class="card_m">
              <p class="title">{{ tab.title }}</p>
              <div class="tags">
                <el-tag v-for="(tag, index) in tab.tags" :key="index" :type="handleTagColor(tag)" round>
                  {{ tag }}
                </el-tag>
              </div>
              <el-tooltip
                :content="tab.content"
                placement="bottom"
                effect="dark"
                :show-arrow="false"
                :offset="5"
                :show-after="300"
              >
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
  </div>
</template>

<script setup>
defineProps(['title', 'tabList'])

const handleTagColor = (tag) => {
  const type = {
    js: 'warning',
    css: 'primary',
    vue: 'success',
  }

  return Object.keys(type).includes(tag) ? type[tag] : ''
}
const handleRedirect = (url) => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
@import '@/styles/homepage.scss';
</style>
