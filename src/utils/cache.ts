class LocalCache {
  setCache(key: string, value: any) {
    // 因为value可以传对象数组多种类型但是setitem第二个值固定要字符串所以强转
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
