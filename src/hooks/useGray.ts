export default function () {
  const isGrayTime = ref(false)

  onMounted(() => {
    setGray()
  })

  function setGray() {
    const date = new Date()
    const nowMonth = date.getMonth() + 1
    const nowDate = date.getDate()
    const now = `${nowMonth}${nowDate}`

    const someTime = ['44', '1213'] // 4月4日· 和 12月13日国家公祭日 选择置灰
    if (someTime.includes(now)) {
      isGrayTime.value = true
    }
  }
  return { isGrayTime, setGray }
}
