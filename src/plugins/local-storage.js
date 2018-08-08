import { onSSR, hasWebStorage } from './platform.js'
import { getEmptyStorage, getStorage } from '../utils/web-storage.js'

export default {
  install ({ $uloc }) {
    if (onSSR) {
      $uloc.localStorage = getEmptyStorage()
      return
    }

    if (hasWebStorage()) {
      const storage = getStorage('local')
      $uloc.localStorage = storage
      Object.assign(this, storage)
    }
  }
}
