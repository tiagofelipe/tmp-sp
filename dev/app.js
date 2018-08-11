import '../src/ie-compat/ie'
import Vue from 'vue'
import App from './Root.vue'

import { createRouter } from './router'

// this imports everything from Uloc
import Uloc, * as UlocAll from 'uloc'
import UlocTheme from 'uloc-src/themes/uloc-default'
import store from './store'
import { createIcons } from './icons'

Vue.use(Uloc, {
  components: UlocAll,
  directives: UlocAll,
  plugins: UlocAll,
  config: {}
})

createIcons()

Vue.prototype.$uloc.menu.set(require('./menu.json'))

Vue.use(UlocTheme, {store})

export function createApp () {
  const router = createRouter()

  const app = {
    router,
    store,
    render: h => h(App)
  }

  return {
    app: new Vue(app),
    router
  }
}
