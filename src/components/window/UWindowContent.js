export default {
  name: 'UWindowContent',
  props: {},
  render (h) {
    return h('div', {
      staticClass: 'u-window-content'
    }, this.$slots.default)
  }
}
