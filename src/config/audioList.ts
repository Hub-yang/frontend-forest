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

// 读取audios文件夹
const modules = import.meta.glob('../../public/audios/*')
for (const path in modules) {
  const fileName = path.replace(/..\/..\/public.audios\//, '')
  audioList.push({
    name: autoReading(fileName).name,
    artist: autoReading(fileName).artist,
    url: path,
  })
}

// 添加歌词与封面
audioList.forEach((item) => {
  console.log(item.name)
  if (item.name) {
    item.cover = `../../public/cover/${item.name}.jpg`
    item.lrc = `../../public/lrc/${item.name}.lrc`
  }
})

export {
  audioList
} 