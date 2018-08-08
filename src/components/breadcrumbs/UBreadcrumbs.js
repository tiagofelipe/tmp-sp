import AlignMixin from '../../mixins/align.js'

export default {
  name: 'UBreadcrumbs',
  mixins: [AlignMixin],
  props: {
    color: {
      type: String,
      default: 'faded'
    },
    activeColor: {
      type: String,
      default: 'primary'
    },
    separator: {
      type: String,
      default: '/'
    },
    align: Object.assign({}, AlignMixin.props.align, {
      default: 'left'
    })
  },
  computed: {
    classes () {
      return [`text-${this.color}`, this.alignClass]
    }
  },
  render (h) {
    if (!this.$slots.default) {
      return
    }

    const
      child = [],
      len = this.$slots.default.filter(c => c.tag !== void 0 && c.tag.endsWith('-UBreadcrumbsEl')).length,
      separator = this.$scopedSlots.separator || (() => this.separator),
      color = `text-${this.color}`,
      active = `text-${this.activeColor}`
    let els = 1

    for (const i in this.$slots.default) {
      const comp = this.$slots.default[i]
      if (comp.tag !== void 0 && comp.tag.endsWith('-UBreadcrumbsEl')) {
        const middle = els < len
        els++

        child.push(h('div', {
          staticClass: 'flex items-center',
          'class': [ middle ? active : color, middle ? 'text-weight-bold' : 'u-breadcrumbs-last' ]
        }, [ comp ]))

        if (middle) {
          child.push(h('div', { staticClass: `u-breadcrumbs-separator`, 'class': color }, [ separator() ]))
        }
      }
      else {
        child.push(comp)
      }
    }

    return h('div', {
      staticClass: 'u-breadcrumbs flex gutter-xs items-center overflow-hidden',
      'class': this.classes
    }, child)
  }
}
