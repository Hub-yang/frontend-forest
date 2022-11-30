import { nanoid } from 'nanoid'
export default function () {
  const nav = ref()
  const navActive = ref(false)
  const navList = ref([
    { id: nanoid(), navName: 'Home', active: true },
    { id: nanoid(), navName: 'About', active: false },
    { id: nanoid(), navName: 'Services', active: false },
    { id: nanoid(), navName: 'Contact', active: false },
  ])
  onMounted(() => {
    window.addEventListener('scroll', fixNav)
  })
  const fixNav = () => {
    if (window.scrollY > nav.value.offsetHeight + 150) {
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
