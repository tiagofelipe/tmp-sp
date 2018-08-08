export default {
  name: 'UCardMedia',
  props: {
    overlayPosition: {
      type: String,
      default: 'bottom',
      validator: v => ['top', 'bottom', 'full'].includes(v)
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-card-media relative-position'
    }, [
      this.$slots.default,
      this.$slots.overlay
        ? h('div', {
          staticClass: 'u-card-media-overlay',
          'class': `absolute-${this.overlayPosition}`
        }, [
          this.$slots.overlay
        ])
        : null
    ])
  }
}
