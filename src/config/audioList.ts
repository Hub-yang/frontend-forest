interface Audio {
  name?: string,
  artist?: string,
  url?: string,
  cover?: string,
  lrc?: string
}

export const audioList: Audio[] = [
  {
    name: "黑色泡沫",
    artist: "林俊杰",
    url: "http://mochenghualei.com.cn/audios/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac",
    cover: "http://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg",
    lrc: "http://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.lrc"
  },
  {
    name: "天空没有极限",
    artist: "邓紫棋",
    url: "http://mochenghualei.com.cn/audios/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.flac",
    cover: "http://mochenghualei.com.cn/covers/%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.jpg",
    lrc: "http://mochenghualei.com.cn/lrcs/%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.lrc"
  },
]