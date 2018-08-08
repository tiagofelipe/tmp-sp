export default {
  name: 'UCarouselSlide',
  inject: {
    carousel: {
      default () {
        console.error('UCarouselSlide needs to be child of UCarousel')
      }
    }
  },
  props: {
    imgSrc: String
  },
  computed: {
    computedStyle () {
      const style = {}
      if (this.imgSrc) {
        style.backgroundImage = `url(${this.imgSrc})`
        style.backgroundSize = `cover`
        style.backgroundPosition = `50%`
      }
      if (!this.carousel.inFullscreen && this.carousel.height) {
        style.maxHeight = this.carousel.height
      }
      return style
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-carousel-slide relative-position scroll',
      style: this.computedStyle
    }, this.$slots.default)
  },
  created () {
    this.carousel.__registerSlide()
  },
  beforeDestroy () {
    this.carousel.__unregisterSlide()
  }
}
