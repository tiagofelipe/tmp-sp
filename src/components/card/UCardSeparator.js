export default {
  name: 'UCardSeparator',
  props: {
    inset: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'u-card-separator',
      'class': { inset: this.inset }
    }, this.$slots.default)
  }
}
