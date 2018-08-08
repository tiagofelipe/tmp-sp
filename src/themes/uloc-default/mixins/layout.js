import state from '../store/state'

export default {
  computed: {
    appTheme: () => state.appTheme,
    appThemeColors: () => state.appThemeColors
  },
  methods: {
    updateTheme (theme) {
      this.$store.commit('APP/SET_THEME', theme)
    },
    updateThemeColors (newColors) {
      this.$store.commit('APP/SET_THEME_COLORS', newColors)
    }
  }
}
