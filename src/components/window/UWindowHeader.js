import UIcon from '../icon/UIcon'
import UIconMaximize from './UIconMaximize.vue'
import UIconMinimize from './UIconMinimize.vue'
import UIconClose from './UIconClose.vue'
const btnClass = 'u-window-btn'
import {doubleClick} from '../../utils/event.js'

export default {
  name: 'UWindowHeader',
  props: {
    move: Boolean,
    maximize: Boolean,
    close: Boolean,
    fullscreen: Boolean,
    title: String,
    icon: [String, Object],
    headerButtons: Array
  },
  data () {
    return {
      maximized: this.fullscreen
    }
  },
  computed: {
    isMaximized () {
      return this.maximized
    },
    computedClass () {
      let css = []
      if (this.move) {
        css.push('u-window-header-moved')
      }
      return css
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.maximized && this.$emit('maximize')
    })
  },
  methods: {
    __close (e) {
      this.$emit('close', e)
    },
    __maximizeMinimize (e) {
      if (this.isMaximized) {
        this.maximized = false
        this.$emit('minimize', e)
      } else {
        this.maximized = true
        this.$emit('maximize', e)
      }
    },
    mousedown (e) {
      if (this.maximize) {
        if (doubleClick()) {
          this.__maximizeMinimize(e)
        }
      }
      if (this.move) {
        // document.addEventListener('mousedown', this.mousedown)
        document.addEventListener('mouseup', this.mouseup)
        document.addEventListener('mousemove', this.mousemove)
        this.$emit('hmousedown', e)
      }
    },
    mouseup (e) {
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
      this.$emit('hmouseup', e)
    },
    mousemove (e) {
      this.$emit('hmousemove', e)
    }
  },
  render (h) {
    let childs = []

    if (this.maximize) {
      let componentMaximized = this.isMaximized ? UIconMinimize : UIconMaximize
      childs.push(
        h('button', {
          staticClass: `${btnClass} u-window-btn-maximize`,
          on: {
            click: this.__maximizeMinimize
          }
        }, [h(componentMaximized)])
      )
    }

    if (this.close) {
      childs.push(
        h('button', {
          staticClass: `${btnClass} u-window-btn-close`,
          on: {
            click: this.__close
          }
        }, [h(UIconClose, {
          props: {
            name: 'close'
          }
        })])
      )
    }

    let title = null
    let icon = typeof this.icon === 'string' ? {name: this.icon} : this.icon
    if (this.title && this.icon) {
      title = h('span', [h(UIcon, {
        props: icon,
        'class': 'u-window-header-title-ico'
      }), this.title])
    } else if (this.title) {
      title = this.title
    } else if (this.icon) {
      title = h(UIcon, {
        props: icon
      })
    }

    return h('div', {
      staticClass: 'u-window-header',
      'class': this.computedClass,
      on: {
        mousedown: this.mousedown
      }
    }, [
      h('div', {
        staticClass: 'u-window-header-title'
      }, [title]),
      h('div', {
        staticClass: 'u-window-header-buttons'
      }, childs)
    ])
  }
}
