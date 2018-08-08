/* eslint-disable */

const MenuStore = {
  state: [],
  removeItem (index) {
    this.state.splice(index, 1)
  },
  add (menuItem) {
    this.state.push(menuItem)
  },
  set (menu) {
    this.state = menu
  }
}

const Menu = {
  __installed: false,
  install ({ $uloc }) {
    if (this.__installed) { return }
    this.__installed = true

    Object.defineProperty($uloc, 'menu', {
      get () {
        return MenuStore
      }
    })
  },

  get () {
    return MenuStore
  }
}

export default Menu
