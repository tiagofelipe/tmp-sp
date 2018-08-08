import * as t from './mutations-types'

export default {
  [t.appTheme] (state, val) {
    state.appTheme = val
  },
  [t.appThemeColors] (state, val) {
    state.appThemeColors = val
  },
  [t.appDrawerFixed] (state, val) {
    state.appDrawerFixed = val
  },
  [t.appDrawerFolded] (state, val) {
    state.appDrawerFolded = val
  },
  [t.appDrawerDock] (state, val) {
    state.appDrawerDock = val
  },
  [t.appDrawerTheme] (state, val) {
    state.appDrawerTheme = val
  }
}
