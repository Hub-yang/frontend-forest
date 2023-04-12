// type audiolist = { [name: string]: any }
// const audioList: audiolist[] = []

// // 获取歌曲名和作者
// function autoReading(audioName: string): { name: string, artist: string } {
//   const audioArr = audioName.split("-")
//   const name = audioArr[1] ? audioArr[1].split(".")[0] : "--"
//   const artist = audioArr[0] || "--"
//   return {
//     name,
//     artist
//   }
// }

// // 返回绝对路径
// function absPath(path: string): string {
//   return new URL(path, import.meta.url).href
// }


// // 读取audios文件夹
// const modules = import.meta.glob('../assets/audios/*')
// for (const path in modules) {
//   const fileName = path.replace(/..\/assets.audios\//, '')
//   audioList.push({
//     name: autoReading(fileName).name,
//     artist: autoReading(fileName).artist,
//     // url: absPath(path),
//     url: "http://rszfze984.hn-bkt.clouddn.com/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-%E5%8F%A6%E4%B8%80%E4%B8%AA%E7%AB%A5%E8%AF%9D.flac",
//   })
// }

// // 添加歌词与封面
// audioList.forEach((item) => {
//   if (item.name) {
//     item.cover = absPath(`../assets/cover/${item.name}.jpg`)
//     item.lrc = absPath(`../assets/lrc/${item.name}.lrc`)
//   }
// })

// export {
//   audioList
// } 

type Audio = {
  name?: string,
  artist?: string,
  url?: string,
  cover?: string,
  lrc?: string
}

export const audioList: Audio[] = [
  {
    name: "另一个童话",
    artist: "G.E.M.邓紫棋",
    url: "http://rszfvyav9.hn-bkt.clouddn.com/audios/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-%E5%8F%A6%E4%B8%80%E4%B8%AA%E7%AB%A5%E8%AF%9D.flac",
    cover: "http://rszfvyav9.hn-bkt.clouddn.com/covers/%E5%8F%A6%E4%B8%80%E4%B8%AA%E7%AB%A5%E8%AF%9D.jpg",
    lrc: "http://rszfvyav9.hn-bkt.clouddn.com/lrc/%E5%8F%A6%E4%B8%80%E4%B8%AA%E7%AB%A5%E8%AF%9D.lrc"
  },
  {
    name: "天空没有极限",
    artist: "G.E.M.邓紫棋",
    url: "http://rszfvyav9.hn-bkt.clouddn.com/audios/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.flac",
    cover: "http://rszfvyav9.hn-bkt.clouddn.com/covers/%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.jpg",
    lrc: "http://rszfvyav9.hn-bkt.clouddn.com/lrc/%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.lrc"
  },
  {
    name: "再见深海 (微亮的瞬间)",
    artist: "唐汉霄",
    url: "http://rszfvyav9.hn-bkt.clouddn.com/audios/%E5%94%90%E6%B1%89%E9%9C%84-%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7%20%28%E5%BE%AE%E4%BA%AE%E7%9A%84%E7%9E%AC%E9%97%B4%29.flac",
    cover: "http://rszfvyav9.hn-bkt.clouddn.com/covers/%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7%20%28%E5%BE%AE%E4%BA%AE%E7%9A%84%E7%9E%AC%E9%97%B4%29.jpg",
    lrc: "http://rszfvyav9.hn-bkt.clouddn.com/lrc/%E5%86%8D%E8%A7%81%E6%B7%B1%E6%B5%B7%20%28%E5%BE%AE%E4%BA%AE%E7%9A%84%E7%9E%AC%E9%97%B4%29.lrc"
  },

] 