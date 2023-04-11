export default function () {
  const isGrayTime = ref(false)

  onMounted(() => {
    setGray()
  })

  function setGray() {
    let date = new Date()
    let nowMonth = date.getMonth() + 1
    let nowDate = date.getDate()
    let now = `${nowMonth}${nowDate}`

    let someTime = ['44', '1213'] // 4月4日· 和 12月13日国家公祭日 选择置灰
    if (someTime.indexOf(now) > -1) {
      isGrayTime.value = true
    }
  }
  return { isGrayTime, setGray }
}
