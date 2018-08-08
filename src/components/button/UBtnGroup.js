export default {
  name: 'UBtnGroup',
  props: {
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean
  },
  computed: {
    classes () {
      return ['outline', 'flat', 'rounded', 'push']
        .filter(t => this[t])
        .map(t => `u-btn-group-${t}`).join(' ')
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-btn-group row no-wrap inline',
      'class': this.classes
    }, this.$slots.default)
  }
}
