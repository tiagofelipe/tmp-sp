export default {
  name: 'UJumbotron',
  props: {
    dark: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    imgSrc: String,
    gradient: String
  },
  computed: {
    gradientType () {
      if (this.gradient) {
        return this.gradient.indexOf('circle') > -1
          ? 'radial'
          : 'linear'
      }
    },
    computedStyle () {
      if (this.imgSrc) {
        return {
          'background-image': `url(${this.imgSrc})`
        }
      }
      if (this.gradientType) {
        return {
          background: `${this.gradientType}-gradient(${this.gradient})`
        }
      }
    }
  },
  render (h) {
    return h(this.tag, {
      staticClass: 'u-jumbotron',
      style: this.computedStyle,
      'class': {
        'u-jumbotron-dark': this.dark
      }
    }, this.$slots.default)
  }
}
