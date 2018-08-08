import { onSSR, hasWebStorage } from './platform.js'
import { getEmptyStorage, getStorage } from '../utils/web-storage.js'

export default {
  install ({ $uloc }) {
    if (onSSR) {
      $uloc.sessionStorage = getEmptyStorage()
      return
    }

    if (hasWebStorage()) {
      const storage = getStorage('session')
      $uloc.sessionStorage = storage
      Object.assign(this, storage)
    }
  }
}
