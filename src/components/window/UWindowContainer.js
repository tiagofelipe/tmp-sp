import {css} from '../../utils/dom.js'

export default {
  name: 'UWindowContainer',
  provide () {
    return {
      container: this
    }
  },
  data () {
    return {
      instances: [],
      instanceActive: null,
      zindex: 9999
    }
  },
  created () {
    // this.instances = []
  },
  methods: {
  },
  mounted () {
    const body = document.body
    body.appendChild(this.$el)
    css(this.$el, {'z-index': this.zindex})
  },
  beforeDestroy () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-window-container'
    }, this.$slots.default)
  }
}
