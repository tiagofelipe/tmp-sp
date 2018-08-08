export default {
  name: 'UItemSeparator',
  props: {
    inset: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'u-item-separator-component',
      'class': {
        'u-item-separator-inset-component': this.inset
      }
    }, this.$slots.default)
  }
}
