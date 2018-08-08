export default {
  name: 'UPageContainer',
  inject: {
    layout: {
      default () {
        console.error('UPageContainer needs to be child of ULayout')
      }
    }
  },
  provide: {
    pageContainer: true
  },
  computed: {
    computedStyle () {
      const css = {}

      if (this.layout.header.space) {
        css.paddingTop = `${this.layout.header.size}px`
      }
      if (this.layout.right.space) {
        css[`padding${this.$uloc.i18n.rtl ? 'Left' : 'Right'}`] = `${this.layout.right.size}px`
      }
      if (this.layout.footer.space) {
        css.paddingBottom = `${this.layout.footer.size}px`
      }
      if (this.layout.left.space) {
        css[`padding${this.$uloc.i18n.rtl ? 'Right' : 'Left'}`] = `${this.layout.left.size}px`
      }

      return css
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-layout-page-container u-layout-transition',
      style: this.computedStyle
    }, this.$slots.default)
  }
}
