interface Audio {
  name?: string
  artist?: string
  url?: string
  cover?: string
  lrc?: string
}

export const audioList: Audio[] = [
  {
    name: '黑色泡沫',
    artist: '林俊杰',
    url: 'https://mochenghualei.com.cn/audios/%E6%9E%97%E4%BF%8A%E6%9D%B0/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
    cover: 'https://mochenghualei.com.cn/covers/%E6%9E%97%E4%BF%8A%E6%9D%B0/%E9%87%8D%E6%8B%BE_%E5%BF%AB%E4%B9%90.jpg',
    lrc: 'https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.lrc',
  },
  {
    name: 'FIND YOU',
    artist: '邓紫棋',
    url: 'https://mochenghualei.com.cn/audios/%E9%82%93%E7%B4%AB%E6%A3%8B/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-FIND%20YOU.flac',
    cover: 'https://mochenghualei.com.cn/covers/%E9%82%93%E7%B4%AB%E6%A3%8B/%E5%90%AF%E7%A4%BA%E5%BD%95.jpg',
    lrc: 'https://mochenghualei.com.cn/lrcs/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-FIND%20YOU.lrc',
  },
  {
    name: '粉色海洋',
    artist: '周杰伦',
    url: 'https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.flac',
    cover:
      'https://mochenghualei.com.cn/covers/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BD%9C%E5%93%81.jpg',
    lrc: 'https://mochenghualei.com.cn/lrcs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.lrc',
  },
]
