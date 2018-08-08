import { USpinner } from '../spinner'

export default {
  name: 'UInnerLoading',
  props: {
    dark: Boolean,
    visible: Boolean,
    size: {
      type: [String, Number],
      default: 42
    },
    color: String
  },
  render (h) {
    if (!this.visible) {
      return
    }

    return h('div', {
      staticClass: 'u-inner-loading animate-fade absolute-full column flex-center',
      'class': { dark: this.dark }
    }, [
      this.$slots.default ||
      h(USpinner, {
        props: {
          size: this.size,
          color: this.color
        }
      })
    ])
  }
}
