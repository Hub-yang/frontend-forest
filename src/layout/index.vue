<template>
  <div class="container">
    <div :class="['start_screen', start ? 'up' : '']">
      <h1>Wwlcome To My Page</h1>
      <button class="btn" @click="start = true">Let's Start</button>
    </div>

    <div class="main_page" v-show="start">
      <nav :class="['nav', navActive ? 'active' : '']" ref="nav">
        <div class="nav_container">
          <h1>My Website</h1>
          <ul>
            <li v-for="(nav, index) in navList" :key="nav.id">
              <a href="#" :class="[nav.active ? 'current' : '']" @click="handleNav(index)">{{ nav.title }}</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="main_container">
        <el-row justify="space-around">
          <el-col :span="5">
            <div class="card">1</div>
          </el-col>
          <el-col :span="5">
            <div class="card">2</div>
          </el-col>
          <el-col :span="5">
            <div class="card">3</div>
          </el-col>
          <el-col :span="5">
            <div class="card">4</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
const start = ref(false)


const nav = ref()
const navActive = ref(false)
const navList = reactive([
  { id: 0, active: true, title: "Home" },
  { id: 1, active: false, title: "About" },
  { id: 2, active: false, title: "Services" },
  { id: 3, active: false, title: "Contact" },
])
onMounted(() => {
  window.addEventListener("scroll", fixNav)
})

function fixNav() {
  if (window.scrollY > nav.value.offsetHeight + 150) {
    navActive.value = true
  } else {
    navActive.value = false
  }
}

function handleNav(id) {
  navList.forEach(nav => {
    nav.active = false
    if (nav.id === id) {
      nav.active = true
    }
  })
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.container {
  background-color: #516dff;
  color: #fff;
  font-family: 'Press Start 2P', sans-serif;
  height: 100vh;
  width: 100vw;
  margin: 0;
  text-align: center;
  position: relative;
  overflow-x: hidden;

  .start_screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    transition: margin 0.5s ease-out;

    &.up {
      margin-top: -100vh;
    }

    h1 {
      line-height: 1.4;
      font-size: 1.5rem;
      margin: 35px 0;
    }

    .btn {
      border: 0;
      background-color: #fff;
      color: #516dff;
      padding: 15px 20px;
      font-family: inherit;
      cursor: pointer;
      outline: none;

      &:hover {
        opacity: .9;
      }
    }
  }

  .main_page {
    background-color: #42d0fc;
    font-family: 'Open Sans', sans-serif;
    color: #222;
    // overflow: hidden;
    width: 100vw;
    min-height: 100%;

    .nav {
      position: fixed;
      width: 100vw;
      background-color: #222;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;

      .nav_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        transition: all 0.3s ease-in-out;
      }

      h1 {
        font-size: 1.5rem;
        color: #fff;
        margin-left: 15px;
      }

      a {
        color: #fff;
        text-decoration: none;
        padding: 7px 15px;
        transition: all 0.3s ease-in-out;
      }

      ul {
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
      }
    }

    .nav.active {
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

      a,
      h1 {
        color: #000;
      }

      .nav_container {
        padding: 0;
      }
    }

    .nav a.current,
    .nav a:hover {
      color: #c0392b;
      font-weight: bold;
    }

    .main_container {
      width: 100vw;
      padding-top: 80px;

      .card {
        height: 100px;
        background-color: #000;
      }
    }
  }
}
</style>
