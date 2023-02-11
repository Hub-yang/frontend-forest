export default function () {
  onMounted(() => {
    let text = document.getElementById('text')
    let bird1 = document.getElementById('bird1')
    let bird2 = document.getElementById('bird2')
    let btn = document.getElementById('btn')
    let rocks = document.getElementById('rocks')
    let forest = document.getElementById('forest')

    window.addEventListener('scroll', () => {
      let value = window.scrollY

      text.style.top = 35 + (value / 50) * -0.5 + '%'
      bird1.style.top = (value / 50) * -1.5 + 'px'
      bird1.style.left = (value / 50) * 2 + 'px'
      bird2.style.top = (value / 50) * -1.5 + 'px'
      bird2.style.left = (value / 50) * -5 + 'px'
      btn.style.marginTop = value * 1.5 + 'px'
      rocks.style.top = value * -0.12 + 'px'
      forest.style.top = value * 0.25 + 'px'
    })
  })

  return { onMounted }
}
