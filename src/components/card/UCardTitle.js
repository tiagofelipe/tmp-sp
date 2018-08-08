export default {
  name: 'UCardTitle',
  render (h) {
    return h('div', {
      staticClass: 'u-card-primary u-card-container row no-wrap'
    }, [
      h('div', {staticClass: 'col column'}, [
        h('div', {staticClass: 'u-card-title'}, this.$slots.default),
        h('div', {staticClass: 'u-card-subtitle'}, [ this.$slots.subtitle ])
      ]),
      h('div', {staticClass: 'col-auto self-center u-card-title-extra'}, [ this.$slots.right ])
    ])
  }
}
