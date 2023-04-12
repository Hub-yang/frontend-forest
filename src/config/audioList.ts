type audiolist = { [name: string]: any }
const audioList: audiolist[] = []

// 获取歌曲名和作者
function autoReading(audioName: string): { name: string, artist: string } {
  const audioArr = audioName.split("-")
  const name = audioArr[1].split(".")[0] || "--"
  const artist = audioArr[0] || "--"
  return {
    name,
    artist
  }
}

// 返回绝对路径
function absPath(path: string): string {
  return new URL(path, import.meta.url).href
}


// 读取audios文件夹
const modules = import.meta.glob('../assets/audios/*')
for (const path in modules) {
  const fileName = path.replace(/..\/assets.audios\//, '')
  audioList.push({
    name: autoReading(fileName).name,
    artist: autoReading(fileName).artist,
    url: absPath(path),
  })
}

// 添加歌词与封面
audioList.forEach((item) => {
  if (item.name) {
    item.cover = absPath(`../assets/cover/${item.name}.jpg`)
    item.lrc = absPath(`../assets/lrc/${item.name}.lrc`)
  }
})

export {
  audioList
} 