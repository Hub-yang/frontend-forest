<script setup lang="ts">
// import './config/audioList'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useGray from '@/hooks/useGray'
import setTitle from '@/utils/setTitle'
// Element Plus 设置中文
const locale = zhCn

// 置灰
const { isGrayTime } = useGray()

onMounted(() => {
  setTitle({
    enterTitle: 'ヾ(^▽^*)))欢迎回来!',
    leaveTitle: '(｡í _ ì｡)不要走呀',
    showPreTitle: true,
  })
})
</script>

<template>
  <el-config-provider :locale="locale">
    <div id="app" :class="[{ grayAll: isGrayTime }]">
      <router-view />
    </div>
  </el-config-provider>
</template>

<style lang="scss">
.grayAll {
  filter: grayscale(0.95);
  -webkit-filter: grayscale(0.95);
  // 兼容ie
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.95);
}
</style>
