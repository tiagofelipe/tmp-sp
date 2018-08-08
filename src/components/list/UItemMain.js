import { textStyle } from '../../mixins/item.js'

function text (h, name, val, n) {
  n = parseInt(n, 10)
  return h('div', {
    staticClass: `u-item-${name}${n === 1 ? ' ellipsis' : ''}`,
    style: textStyle(n)
  }, [ val ])
}

export default {
  name: 'UItemMain',
  props: {
    label: String,
    labelLines: [String, Number],
    sublabel: String,
    sublabelLines: [String, Number],
    inset: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h) {
    return h(this.tag, {
      staticClass: 'u-item-main u-item-section',
      'class': {
        'u-item-main-inset': this.inset
      }
    }, [
      this.label ? text(h, 'label', this.label, this.labelLines) : null,
      this.sublabel ? text(h, 'sublabel', this.sublabel, this.sublabelLines) : null,
      this.$slots.default
    ])
  }
}
