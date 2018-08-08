import UResizeObservable from '../observables/UResizeObservable.js'
import ULayoutHeaderTop from './ULayoutHeaderTop.js'

export default {
  name: 'ULayoutHeader',
  inject: {
    layout: {
      default () {
        console.error('ULayoutHeader needs to be child of ULayout')
      }
    }
  },
  provide () {
    return {
      layout: this.layout,
      header: this
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    default: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    }
  },
  data () {
    return {
      size: 0,
      revealed: true
    }
  },
  computed: {
    fixed () {
      return this.reveal || this.layout.view.indexOf('H') > -1
    },
    offset () {
      if (!this.value) {
        return 0
      }
      if (this.fixed) {
        return this.revealed ? this.size : 0
      }
      const offset = this.size - this.layout.scroll.position
      return offset > 0 ? offset : 0
    },
    computedClass () {
      return {
        'fixed-top': this.fixed,
        'u-header-default': this.default,
        'absolute-top': !this.fixed,
        'u-layout-header-hidden': !this.value || (this.fixed && !this.revealed)
      }
    },
    computedStyle () {
      const
        view = this.layout.rows.top,
        css = {}

      if (view[0] === 'l' && this.layout.left.space) {
        css[this.$uloc.i18n.rtl ? 'right' : 'left'] = `${this.layout.left.size}px`
      }
      if (view[2] === 'r' && this.layout.right.space) {
        css[this.$uloc.i18n.rtl ? 'left' : 'right'] = `${this.layout.right.size}px`
      }

      return css
    }
  },
  render (h) {
    return h('header', {
      staticClass: 'u-header',
      'class': this.computedClass,
      style: this.computedStyle
    }, [
      h(ULayoutHeaderTop, {
        scopedSlots: {
          header: props => this.$slots.header,
          'drawer-button': props => this.$slots['drawer-button'],
          'header-title': props => this.$slots['header-title'],
          'header-right-side': props => this.$slots['header-right-side']
        }
      }),
      h(UResizeObservable, {
        props: {debounce: 0},
        on: {resize: this.__onResize}
      }),
      this.$slots.default
    ])
  },
  created () {
    this.layout.instances.header = this
    this.__update('space', this.value)
    this.__update('offset', this.offset)
  },
  beforeDestroy () {
    if (this.layout.instances.header === this) {
      this.layout.instances.header = null
      this.__update('size', 0)
      this.__update('offset', 0)
      this.__update('space', false)
    }
  },
  watch: {
    offset (val) {
      this.__update('offset', val)
    }
  },
  methods: {
    __onResize ({height}) {
      this.__updateLocal('size', height)
      this.__update('size', height)
    },
    __update (prop, val) {
      if (this.layout.header[prop] !== val) {
        this.layout.header[prop] = val
      }
    },
    __updateLocal (prop, val) {
      if (this[prop] !== val) {
        this[prop] = val
      }
    }
  }
}
