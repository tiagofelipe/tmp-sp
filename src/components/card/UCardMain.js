export default {
  name: 'UCardMain',
  render (h) {
    return h('div', {
      staticClass: 'u-card-main u-card-container'
    }, this.$slots.default)
  }
}
