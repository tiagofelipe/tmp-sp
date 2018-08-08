import {height, width} from '../../utils/dom.js'

export default {
  name: 'UWindowResizable',
  props: {
    resize: Boolean,
    areaPixels: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      wclass: ''
    }
  },
  methods: {
    hover (e) {
      const area = this.areaPixels
      const {offsetX, offsetY} = e
      const _width = width(this.$el) - (area * 2)
      const _height = height(this.$el) - (area * 2)
      let _class = ''
      if (offsetX <= area && offsetY <= area) {
        _class = 'r-top-left'
      } else if (offsetX <= area && ((_height - offsetY) < (area * 2))) {
        _class = 'r-bottom-left'
      } else if (offsetX <= area && offsetY > area) {
        _class = 'r-left'
      } else if (offsetY <= area && ((_width - offsetX) < (area * 2))) {
        _class = 'r-top-right'
      } else if (offsetX > area && offsetY <= area) {
        _class = 'r-top'
      } else if (offsetX >= (_width + (area / 2)) && offsetY >= (_height + (area / 2))) {
        _class = 'r-bottom-right'
      } else if (((offsetX - _width) >= area) && offsetY > area) {
        _class = 'r-right'
      } else if (offsetX > area && offsetY > area) {
        _class = 'r-bottom'
      } else {
        _class = ''
      }
      this.wclass = _class
    },
    leave () {
      this.wclass = ''
    },
    mousedown (e) {
      if (this.resize) {
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
        this.$emit('rmousedown', e, this.wclass)
      }
    },
    mouseup (e) {
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
      this.$emit('rmouseup', e, this.wclass)
    },
    mousemove (e) {
      this.$emit('rmousemove', e, this.wclass)
    }
  },
  mounted () {

  },
  render (h) {
    const styleFixed = ['top', 'left', 'right', 'bottom'].map((v) => {
      return {[v]: `-${this.areaPixels}px`}
    })
    return this.resize ? h('div', {
      staticClass: 'u-window-resizable-area',
      'class': this.wclass,
      style: [...styleFixed],
      on: {
        mousemove: this.hover,
        mouseleave: this.leave,
        mousedown: this.mousedown
      }
    }) : null
  }
}
