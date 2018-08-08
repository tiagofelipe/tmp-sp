import Platform from '../plugins/platform.js'

let handlers = []
let disabled = false

export default {
  __installed: false,
  __install () {
    this.__installed = true
    window.addEventListener('keyup', evt => {
      if (disabled) return
      if (handlers.length === 0) {
        return
      }

      if (evt.which === 27 || evt.keyCode === 27) {
        handlers[handlers.length - 1]()
      }
    })
  },

  register (handler) {
    if (Platform.is.desktop) {
      if (!this.__installed) {
        this.__install()
      }

      handlers.push(handler)
    }
  },

  pop () {
    if (Platform.is.desktop) {
      handlers.pop()
    }
  },

  findAndPop (handler) {
    if (Platform.is.desktop) {
      handlers.splice(handlers.indexOf(handler), 1)
    }
  },

  disable () {
    disabled = true
    return disabled
  },

  enable () {
    disabled = false
    return disabled
  }
}
