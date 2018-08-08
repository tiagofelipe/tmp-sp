export default {
  name: 'UToolbar',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    textColor: String,
    inverted: Boolean,
    glossy: Boolean
  },
  computed: {
    classes () {
      const cls = [ `u-toolbar-${this.inverted ? 'inverted' : 'normal'}` ]

      this.glossy && cls.push('glossy')

      if (this.inverted) {
        cls.push(`text-${this.textColor || this.color}`)
      }
      else {
        cls.push(`bg-${this.color}`)
        cls.push(`text-${this.textColor || 'white'}`)
      }

      return cls
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-toolbar row no-wrap items-center relative-position',
      'class': this.classes
    }, this.$slots.default)
  }
}
