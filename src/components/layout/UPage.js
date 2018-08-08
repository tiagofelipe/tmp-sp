export default {
  name: 'UPage',
  inject: {
    pageContainer: {
      default () {
        console.error('UPage needs to be child of UPageContainer')
      }
    },
    layout: {}
  },
  props: {
    padding: Boolean,
    scroll: {
      type: Boolean,
      default: true
    },
    styleFn: Function
  },
  computed: {
    computedStyle () {
      const offset =
        (this.layout.header.space ? this.layout.header.size : 0) +
        (this.layout.footer.space ? this.layout.footer.size : 0)

      return typeof this.styleFn === 'function'
        ? this.styleFn(offset)
        : {height: offset ? `calc(100vh - ${offset}px)` : '100vh'}
    },
    computedClass () {
      let css = []
      if (this.padding) {
        css.push('layout-padding')
      }
      if (this.scroll) {
        css.push('scroll')
      }
      return css
    }
  },
  render (h) {
    return h('main', {
      staticClass: 'u-layout-page',
      style: this.computedStyle,
      'class': this.computedClass
    }, this.$slots.default)
  }
}
