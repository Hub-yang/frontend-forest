<template>
  <!-- 搜索框 -->
  <div class="search_main" :style="{ left: searchMainLeft + 'px' }">
    <el-form @submit="handlerSearch">
      <el-input placeholder="输入并搜索" type="text" name="word" v-model.trim="keyWord">
        <template #prepend>
          <div class="search_icon" @click="showModal = !showModal">
            <img draggable="false" class="search-icon-img" :src="searchImgList[curIndex].src"
              :alt="searchImgList[curIndex].alt" />
            <el-icon>
              <CaretBottom />
            </el-icon>
          </div>
        </template>
        <template #append>
          <el-button :icon="isOpen ? ArrowLeftBold : switchIcon" @click="openSearchMain" />
        </template>
      </el-input>
    </el-form>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="modal-mask" @click="showModal = false">
          <div class="search_box">
            <div v-for="(img, index) in searchImgList" key="img.name" @click="closeModel(index)">
              <img draggable="false" class="icon-img" :src="img.src" :alt="img.alt" />
              <span>{{ img.name }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ArrowRightBold, ArrowLeftBold, Search } from '@element-plus/icons-vue'
// 搜索框
const showModal = ref(false)
const isOpen = ref(false)
const curIndex = ref(0)
const keyWord = ref('')
const searchMainLeft = ref(-453)
const searchImgList = ref([
  {
    name: '百度',
    alt: 'baidu',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
  },
  {
    name: '谷歌',
    alt: 'google',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
  },
  {
    name: '必应',
    alt: 'bing',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
  },
  {
    name: '雅虎',
    alt: 'yahoo',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/yahoo.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
  },
])
const handlerSearch = () => {
  const searchUrlList = [
    `http://www.baidu.com/baidu?word=${keyWord.value}`,
    `https://www.google.com/search?q=${keyWord.value}`,
    `https://cn.bing.com/search?q=${keyWord.value}`,
    `https://sg.search.yahoo.com/search?p=${keyWord.value}`,
  ]
  window.open(searchUrlList[curIndex.value], '_blank')
  keyWord.value = ''
}
const closeModel = (index) => {
  showModal.value = false
  curIndex.value = index
}

const openSearchMain = () => {
  searchMainLeft.value = searchMainLeft.value == 10 ? -453 : 10
  isOpen.value = !isOpen.value
}

let timer = null
const startSwitch = ref(false)
onMounted(() => {
  timer = setInterval(() => {
    startSwitch.value = !startSwitch.value
  }, 2000)
})
onUnmounted(() => {
  clearInterval(timer)
})
const switchIcon = computed(() => {
  return startSwitch.value ? Search : ArrowRightBold
})
</script>

<style scoped lang="scss">
$search-height: 48px;
$search-box-size: 78px;
$base-top: 70px;

.search_main {
  transition: all ease-in-out 0.35s;
  width: 500px;
  position: fixed;
  z-index: 999;
  top: $base-top;

  // 修改el-input
  :deep(.el-input-group) {
    height: 50px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);

    .el-input-group__append,
    .el-input-group__prepend {
      border-radius: 0 !important;
    }
  }

  .search-icon-img {
    border-radius: 4px;
    width: calc($search-height * 0.485);
    height: calc($search-height * 0.485);
    margin-right: calc($search-height * 0.1);
    object-fit: cover;
  }

  .search_icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.search_box {
  position: fixed;
  top: calc($base-top + 60px);
  left: 10px;
  background-color: #ffffff;
  // margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  width: calc(4 * $search-box-size);

  div:first-child {
    border-left: 1px solid rgb(243, 243, 243);
  }

  div {
    width: $search-box-size;
    height: $search-box-size;
    padding: calc($search-height * 0.31) 4px calc($search-height * 0.22);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(243, 243, 243);
    border-right: 1px solid rgb(243, 243, 243);
    border-bottom: 1px solid rgb(243, 243, 243);
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background-color: rgb(243, 243, 243);
    }
  }
}

.icon-img {
  width: calc($search-height * 0.543);
  height: calc($search-height * 0.543);
  margin-bottom: calc($search-height * 0.18);
  object-fit: cover;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  // display: flex;
  transition: opacity 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
