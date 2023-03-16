import initWidget from './testsrc/index'

export const init = () => {
  // 封装异步加载资源的方法
  function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
      let tag

      if (type === 'css') {
        tag = document.createElement('link')
        tag.rel = 'stylesheet'
        tag.href = url
      } else if (type === 'js') {
        tag = document.createElement('script')
        tag.src = url
      }
      if (tag) {
        tag.onload = () => resolve(url)
        tag.onerror = () => reject(url)
        document.head.appendChild(tag)
      }
    })
  }

  // 加载 waifu.css live2d.min.js waifu-tips.js
  if (screen.width >= 768) {
    Promise.all([
      loadExternalResource(new URL('./testsrc/waifu.css', import.meta.url).href, 'css'),
      loadExternalResource(new URL('./testsrc/live2d.min.js', import.meta.url).href, 'js'),
    ]).then(() => {
      // 配置选项的具体用法见 README.md
      initWidget({
        waifuPath: new URL('./testsrc/waifu-tips.json', import.meta.url).href,
        //apiPath: "https://live2d.fghrsh.net/api/",
        cdnPath: 'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/',
        // tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
        tools: ['hitokoto', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
      })
    })
  }
}
