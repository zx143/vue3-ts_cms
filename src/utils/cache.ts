/*
 * @Description:
 * @Author: zgq
 * @Date: 2021-08-03 21:27:17
 * @LastEditors: zgq
 * @LastEditTime: 2021-08-03 21:33:50
 */

class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const val = window.localStorage.getItem(key)
    if (val) return JSON.parse(val)
  }

  delCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
