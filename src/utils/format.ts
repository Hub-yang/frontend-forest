/**
 * JSON转url参数
 * @param data Json格式数据
 */
export function formatJsonToUrlParams(data: anyKey) {
  return typeof data === 'object'
    ? Object.keys(data)
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      })
      .join('&')
    : ''
}

export default formatJsonToUrlParams
