import { nanoid } from 'nanoid'
export default function () {
  const nav = ref()
  const navActive = ref(false)
  const navList = ref([
    // { id: nanoid(), navName: '首页', active: true },
    { id: nanoid(), navName: '我的博客', active: false, href: 'https://mochenghualei.github.io/personal-blog/' },
    { id: nanoid(), navName: '个人健身管理系统', active: false, href: '' },
    { id: nanoid(), navName: '个人摄影作品集', active: false, href: '' },
    { id: nanoid(), navName: 'GitHub', active: false, href: 'https://github.com/Mochenghualei' },
  ])
  onMounted(() => {
    window.addEventListener('scroll', fixNav)
  })
  const fixNav = () => {
    if (window.scrollY > nav.value.offsetHeight) {
      navActive.value = true
    } else {
      navActive.value = false
    }
  }

  const handleClickNav = (id) => {
    navList.value.forEach((nav) => {
      nav.active = false
      if (id === nav.id) {
        nav.active = true
      }
    })
  }

  return { nav, navActive, navList, handleClickNav }
}
