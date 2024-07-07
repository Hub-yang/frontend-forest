interface Options {
  defaultTitle?: string
  enterTitle: string
  leaveTitle: string
  // 返回后是否重新显示原title
  showPreTitle?: boolean
}

const setTitle = (function () {
  const currentTitle = document.title
  return function (options: Options) {
    const defaultTitle = options.defaultTitle || currentTitle
    let timer: any
    // 设置默认title
    document.title = defaultTitle
    // 设置进出title
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        document.title = options.leaveTitle
      }
      else {
        document.title = options.enterTitle
        if (options.showPreTitle) {
          timer = setTimeout(() => {
            document.title = defaultTitle
            clearTimeout(timer)
          }, 1500)
        }
      }
    })
  }
})()

export default setTitle
