import state from './store/state'
import mutations from './store/mutations'
import * as actions from './store/actions'
import * as getters from './store/getters'

import MixinLayout from './mixins/layout'

const UlocTheme = {
  install (Vue, options) { // now your plugin depend on store
    if (typeof options['store'] === 'undefined') {
      // Uloc theme require vuex store for control state theme
      throw new Error('Please provide vuex store.')
    }
    // register your own vuex module
    options.store.registerModule('app', { state, actions, mutations, getters })

    // globals mixins
    Vue.mixin(MixinLayout)

    // hook vue
  }
}

export default UlocTheme
