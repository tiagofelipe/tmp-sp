import UScrollObservable from '../observables/UScrollObservable.js'
import UResizeObservable from '../observables/UResizeObservable.js'
import UWindowResizeObservable from '../observables/UWindowResizeObservable.js'

export default {
  name: 'ULayout',
  provide () {
    return {
      layout: this
    }
  },
  props: {
    view: {
      type: String,
      default: 'hhh lpr fff',
      validator: v => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    }
  },
  data () {
    return {
      height: window.innerHeight,
      width: window.innerWidth,

      header: {
        size: 0,
        offset: 0,
        space: false
      },
      right: {
        size: 300,
        offset: 0,
        space: false
      },
      footer: {
        size: 0,
        offset: 0,
        space: false
      },
      left: {
        size: 300,
        offset: 0,
        space: false
      },

      scrollHeight: 0,
      scroll: {
        position: 0,
        direction: 'down'
      }
    }
  },
  computed: {
    rows () {
      const rows = this.view.toLowerCase().split(' ')
      return {
        top: rows[0].split(''),
        middle: rows[1].split(''),
        bottom: rows[2].split('')
      }
    }
  },
  created () {
    this.instances = {
      header: null,
      right: null,
      footer: null,
      left: null,
      main: null,
      menuDrawer: null
    }
  },
  render (h) {
    return h('div', {staticClass: 'u-layout'}, [
      h(UScrollObservable, {
        on: {scroll: this.__onPageScroll}
      }),
      h(UResizeObservable, {
        on: {resize: this.__onLayoutResize}
      }),
      h(UWindowResizeObservable, {
        on: {resize: this.__onWindowResize}
      }),
      this.$slots.default
    ])
  },
  methods: {
    __animate () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      else {
        document.body.classList.add('u-layout-animate')
      }
      this.timer = setTimeout(() => {
        document.body.classList.remove('u-layout-animate')
        this.timer = null
      }, 150)
    },
    __onPageScroll (data) {
      this.scroll = data
      this.$emit('scroll', data)
    },
    __onLayoutResize () {
      this.scrollHeight = this.$el.scrollHeight
      this.$emit('scrollHeight', this.scrollHeight)
    },
    __onWindowResize ({height, width}) {
      if (this.height !== height) {
        this.height = height
      }
      if (this.width !== width) {
        this.width = width
      }
      this.$emit('resize', {height, width})
    },
    __openDrawer () {
      this.instances.menuDrawer && this.instances.menuDrawer.show()
    }
  }
}
