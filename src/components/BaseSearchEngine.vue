<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold, Search } from '@element-plus/icons-vue'

// 搜索框
const showModal = ref(false)
const isOpen = ref(false)
const curIndex = ref(0)
const keyWord = ref('')
const searchMainLeft = ref(-453)
const searchImgList = [
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
]

let timer: NodeJS.Timeout | null
const startSwitch = ref(false)

onMounted(() => {
  // 监听按钮事件
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen.value || e.key === 'Enter' && !isOpen.value) {
      e.preventDefault()
      handleSearchMainOpen()
    }

    if (e.key === 'Tab' && isOpen.value) {
      e.preventDefault()
      if (curIndex.value === 3)
        curIndex.value = 0
      else
        curIndex.value += 1
    }
  })

  timer = setInterval(() => {
    startSwitch.value = !startSwitch.value
  }, 2000)

  const searchEl = document.querySelector('.el-input-group__prepend') as HTMLElement
  searchEl.onclick = () => showModal.value = !showModal.value
})

function handlerSearch() {
  const searchUrlList = [
    `http://www.baidu.com/baidu?word=${keyWord.value}`,
    `https://www.google.com/search?q=${keyWord.value}`,
    `https://cn.bing.com/search?q=${keyWord.value}`,
    `https://sg.search.yahoo.com/search?p=${keyWord.value}`,
  ]
  window.open(searchUrlList[curIndex.value], '_blank')
  keyWord.value = ''
}

function handleModalClose(index: number) {
  showModal.value = false
  curIndex.value = index
}

function handleSearchMainOpen() {
  searchMainLeft.value = searchMainLeft.value === 10 ? -453 : 10
  isOpen.value = !isOpen.value
}

onUnmounted(() => clearInterval(timer as NodeJS.Timeout))
const switchIcon = computed(() => startSwitch.value ? Search : ArrowRightBold)
</script>

<template>
  <!-- 搜索框 -->
  <div class="search_main wobble-ver-left" :style="{ left: `${searchMainLeft}px` }">
    <el-form @submit="handlerSearch">
      <el-input v-model.trim="keyWord" placeholder="输入并搜索" type="text" name="word" autofocus>
        <template #prepend>
          <div class="search_icon">
            <img
              draggable="false"
              class="search-icon-img"
              :src="searchImgList[curIndex].src"
              :alt="searchImgList[curIndex].alt"
            >
            <el-icon>
              <CaretBottom />
            </el-icon>
          </div>
        </template>
        <template #append>
          <el-button :icon="isOpen ? ArrowLeftBold : switchIcon" @click="handleSearchMainOpen" />
        </template>
      </el-input>
    </el-form>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="modal-mask" @click="showModal = false">
          <div class="search_box">
            <div v-for="({ name, src, alt }, idx) in searchImgList" :key="name" @click="handleModalClose(idx)">
              <img draggable="false" class="icon-img" :src :alt>
              <span>{{ name }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

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

  :deep(.el-input-group__prepend) {
    cursor: pointer;
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

.wobble-ver-left {
  -webkit-animation: 1s wobble-ver-left 1s 2 both;
  animation: 1s wobble-ver-left 1s 2 both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-4-13 16:57:53
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation wobble-ver-left
 * ----------------------------------------
 */
@-webkit-keyframes wobble-ver-left {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
    transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  15% {
    -webkit-transform: translateY(-30px) rotate(-6deg);
    transform: translateY(-30px) rotate(-6deg);
  }

  30% {
    -webkit-transform: translateY(15px) rotate(6deg);
    transform: translateY(15px) rotate(6deg);
  }

  45% {
    -webkit-transform: translateY(-15px) rotate(-3.6deg);
    transform: translateY(-15px) rotate(-3.6deg);
  }

  60% {
    -webkit-transform: translateY(9px) rotate(2.4deg);
    transform: translateY(9px) rotate(2.4deg);
  }

  75% {
    -webkit-transform: translateY(-6px) rotate(-1.2deg);
    transform: translateY(-6px) rotate(-1.2deg);
  }
}

@keyframes wobble-ver-left {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
    transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  15% {
    -webkit-transform: translateY(-30px) rotate(-6deg);
    transform: translateY(-30px) rotate(-6deg);
  }

  30% {
    -webkit-transform: translateY(15px) rotate(6deg);
    transform: translateY(15px) rotate(6deg);
  }

  45% {
    -webkit-transform: translateY(-15px) rotate(-3.6deg);
    transform: translateY(-15px) rotate(-3.6deg);
  }

  60% {
    -webkit-transform: translateY(9px) rotate(2.4deg);
    transform: translateY(9px) rotate(2.4deg);
  }

  75% {
    -webkit-transform: translateY(-6px) rotate(-1.2deg);
    transform: translateY(-6px) rotate(-1.2deg);
  }
}
</style>
