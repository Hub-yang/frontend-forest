<script setup lang="ts">
defineProps(['title', 'tabList'])

interface TagTypes {
  js: 'warning'
  css: 'danger'
  vue: 'success'
  react: 'primary'
}

const tagTypes: TagTypes = {
  js: 'warning',
  css: 'danger',
  vue: 'success',
  react: 'primary',
}

function handleTagColor(tag: string[]) {
  const keys = Object.keys(tagTypes)
  let curTag = ''
  keys.forEach((item) => {
    if (tag.includes(item))
      curTag = item as keyof TagTypes
  })

  return tagTypes[curTag as keyof TagTypes] || (tagTypes[curTag as keyof TagTypes] === 'primary' ? '' : 'info')
}

function handleRedirect(url: string) {
  window.open(url, '_blank')
}

// 图片加载失败的默认行为
function imgerror(event: anyKey) {
  const img = event.srcElement
  img.src = new URL('../../public/error.gif', import.meta.url).href
  img.onerror = null
  img.classList.add('err')
}
</script>

<template>
  <div class="ary_container">
    <!-- 类别分组标题 -->
    <div class="ary_title">
      {{ title }}
    </div>
    <el-row :gutter="15">
      <el-col v-for="tab in tabList" :key="tab.id" :span="6">
        <el-card shadow="hover" :body-style="{ padding: 0 }" @click="handleRedirect(tab.url)">
          <div class="card_main">
            <div class="card_l">
              <div class="logo">
                <img :src="`https://api.iowen.cn/favicon/${tab.img}`" :onerror="(e:anyKey) => imgerror(e)">
              </div>
            </div>
            <div class="card_m">
              <p class="title">
                {{ tab.title }}
              </p>
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
                <p class="des">
                  {{ tab.content }}
                </p>
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

<style lang="scss" scoped>
@import '@/styles/homepage.scss';
</style>
