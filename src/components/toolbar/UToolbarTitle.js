export default {
  name: 'UToolbarTitle',
  props: {
    shrink: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'u-toolbar-title',
      'class': this.shrink ? 'col-auto' : null
    }, [
      this.$slots.default,
      this.$slots.subtitle
        ? h('div', { staticClass: 'u-toolbar-subtitle' }, this.$slots.subtitle)
        : null
    ])
  }
}
