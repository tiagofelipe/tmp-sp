import '../src/ie-compat/ie'
import Vue from 'vue'
import App from './Root.vue'

import { createRouter } from './router'

// this imports everything from Uloc
import Uloc, * as UlocAll from 'uloc'
import UlocTheme from 'uloc-src/themes/uloc-default'
import store from './store'
import { menu } from './components/theme/routes'
import { createIcons } from './icons'

Vue.use(Uloc, {
  components: UlocAll,
  directives: UlocAll,
  plugins: UlocAll,
  config: {}
})

createIcons()

Vue.prototype.$uloc.menu.set(menu)

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
