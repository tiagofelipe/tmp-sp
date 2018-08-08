export default {
  name: 'UListHeader',
  props: {
    inset: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'u-list-header',
      'class': {
        'u-list-header-inset': this.inset
      }
    }, this.$slots.default)
  }
}
