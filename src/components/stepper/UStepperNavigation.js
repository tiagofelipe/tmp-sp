export default {
  name: 'UStepperNavigation',
  render (h) {
    return h('div', {
      staticClass: 'u-stepper-nav order-last row items-center'
    }, [
      this.$slots.left,
      h('div', { staticClass: 'col' }),
      this.$slots.default
    ])
  }
}
