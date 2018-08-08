export default {
  name: 'UTimeline',
  provide () {
    return {
      __timeline: this
    }
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    dark: Boolean
  },
  render (h) {
    return h('ul', {
      staticClass: 'u-timeline',
      'class': { 'u-timeline-dark': this.dark }
    }, this.$slots.default)
  }
}
