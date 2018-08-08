import UMenuDrawerHeader from './UMenuDrawerHeader.vue'
import UMenuDrawerContent from './UMenuDrawerContent.vue'
import TouchPan from '../../directives/touch-pan.js'
import {css, cssTransform} from '../../utils/dom.js'
import {between} from '../../utils/format.js'
import ModelToggleMixin from '../../mixins/model-toggle.js'
import PreventScroll from '../../mixins/prevent-scroll.js'
import EscapeKey from '../../utils/escape-key.js'

const
  bodyClass = 'u-body-drawer-toggle',
  duration = 150

export default {
  name: 'UMenuDrawer',
  inject: {
    layout: {
      default () {
        console.error('UMenuDrawer needs to be child of ULayout')
      }
    }
  },
  mixins: [ModelToggleMixin, PreventScroll],
  directives: {
    TouchPan
  },
  props: {
    menu: [Array],
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    escToClose: {
      type: Boolean,
      default: true
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    folded: {
      type: Boolean,
      default: false
    },
    dock: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'default'
    },

    side: {
      type: String,
      default: 'left',
      validator: v => ['left', 'right'].includes(v)
    },
    overlay: Boolean,
    width: {
      type: Number,
      default: 256
    },
    breakpoint: {
      type: Number,
      default: 992
    },
    noHideOnRouteChange: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean
  },
  data () {
    const
      showing = false

    return {
      showing,
      mobileLayout: this.layout.width <= this.breakpoint
    }
  },
  watch: {
    'layout.width' (val) {
      if (this.layout.width <= this.breakpoint) {
        this.mobileLayout = true
        if (this.fixed) {
          this.$refs['drawer-main'].classList.contains('drawer-fixed') && this.$refs['drawer-main'].classList.remove('drawer-fixed')
        }
      } else {
        this.mobileLayout = false
        if (this.fixed) {
          !this.$refs['drawer-main'].classList.contains('drawer-fixed') && this.$refs['drawer-main'].classList.add('drawer-fixed')
        }
      }
    },
    $route () {
      if (this.noHideOnRouteChange) {
        return
      }

      if (!this.fixed) {
        this.hide()
      }
    },
    fixed () {
      if (this.fixed) {
        this.layout.__animate()
      }
    },
    folded () {
      if (this.folded) {
        this.layout.__animate()
      }
    },
    dock () {
      if (this.dock) {
        this.layout.__animate()
      }
    }
  },
  computed: {
    computedDrawerClass () {
      let css = []
      css.push(`drawer-theme-${this.theme}`)

      if (this.fixed) {
        css.push(`drawer-fixed`)
      }

      if (this.folded) {
        css.push(`drawer-folded`)
      }

      if (this.dock) {
        css.push(`drawer-dock`)
      }

      return css
    },
    size () {
      return this.width
    },
    rightSide () {
      return false
    },
    onLayout () {
      return this.showing && this.fixed && !this.mobileLayout && !this.overlay
    },
    onScreenOverlay () {
      return this.showing && (this.mobileLayout || !this.fixed) && this.overlay
    },
    backdropClass () {
      return {
        'no-pointer-events': !this.showing || this.fixed
      }
    },
    mobileView () {
      return this.mobileLayout
    },
    belowClass () {
      return {
        'u-layout-drawer-delimiter': !this.fixed && this.showing,
        'u-layout-drawer-mobile': true
      }
    },
    aboveClass () {
      return {
        'u-layout-drawer-delimiter': !this.fixed && this.showing
      }
    },
    computedStyle () {
      return [{width: `${this.size}px`}]
    },
    computedClass () {
      return [this.mobileView ? this.belowClass : this.aboveClass]
    },
    stateDirection () {
      return (this.$uloc.i18n.rtl ? -1 : 1) * (this.rightSide ? 1 : -1)
    },
    onNativeEvents () {
      if (!this.mobileView) {
        return {
          '!click': e => {
            this.$emit('click', e)
          },
          mouseover: e => {
            this.$emit('mouseover', e)
          },
          mouseout: e => {
            this.$emit('mouseout', e)
          }
        }
      }
    }
  },
  methods: {
    applyPosition (position) {
      if (position === void 0) {
        this.$nextTick(() => {
          position = this.showing
            ? 0
            : (this.$uloc.i18n.rtl ? -1 : 1) * (this.rightSide ? 1 : -1) * this.size

          this.applyPosition(position)
        })
        return
      }
      this.$refs.content && css(this.$refs.content, cssTransform(`translateX(${position}px)`))
    },
    applyBackdrop (x) {
      this.$refs.backdrop && css(this.$refs.backdrop, {backgroundColor: `rgba(0,0,0,${x * 0.4})`})
    },
    __openByTouch (evt) {
      const
        width = this.size,
        position = between(evt.distance.x, 0, width)

      if (evt.isFinal) {
        const
          el = this.$refs.content,
          opened = position >= Math.min(75, width)

        el.classList.remove('no-transition')

        if (opened) {
          this.show()
        }
        else {
          this.layout.__animate()
          this.applyBackdrop(0)
          this.applyPosition(this.stateDirection * width)
          el.classList.remove('u-layout-drawer-delimiter')
        }

        return
      }

      this.applyPosition(
        (this.$uloc.i18n.rtl ? !this.rightSide : this.rightSide)
          ? Math.max(width - position, 0)
          : Math.min(0, position - width)
      )
      this.applyBackdrop(
        between(position / width, 0, 1)
      )

      if (evt.isFirst) {
        const el = this.$refs.content
        el.classList.add('no-transition')
        el.classList.add('u-layout-drawer-delimiter')
      }
    },
    __closeByTouch (evt) {
      if (!this.mobileLayout) {
        return
      }

      const
        width = this.size,
        dir = evt.direction === this.side,
        position = (this.$uloc.i18n.rtl ? !dir : dir)
          ? between(evt.distance.x, 0, width)
          : 0

      if (evt.isFinal) {
        const opened = Math.abs(position) < Math.min(75, width)
        this.$refs.content.classList.remove('no-transition')

        if (opened) {
          this.layout.__animate()
          this.applyBackdrop(1)
          this.applyPosition(0)
        }
        else {
          this.hide()
        }

        return
      }

      this.applyPosition(this.stateDirection * position)
      this.applyBackdrop(between(1 - position / width, 0, 1))

      if (evt.isFirst) {
        this.$refs.content.classList.add('no-transition')
      }
    },
    __show (animate = true) {
      animate && this.layout.__animate()
      this.applyPosition(0)

      if (this.mobileLayout || !this.fixed) {
        this.applyBackdrop(1)
        this.__preventScroll(true)
      }
      else {
        document.body.classList.add(bodyClass)
      }

      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.showPromise) {
          this.showPromise.then(() => {
            document.body.classList.remove(bodyClass)
          })
          this.showPromiseResolve()
        }
      }, duration)

      if (this.escToClose) {
        EscapeKey.register(() => {
          this.hide()
        })
      }
    },
    __hide (animate = true) {
      animate && this.layout.__animate()

      if (this.mobileLayout || !this.fixed) {
        this.__preventScroll(false)
      }

      this.applyPosition((this.$uloc.i18n.rtl ? -1 : 1) * (this.rightSide ? 1 : -1) * this.size)
      this.applyBackdrop(0)

      document.body.classList.remove(bodyClass)

      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.hidePromise && this.hidePromiseResolve()
      }, duration)

      if (this.escToClose) {
        EscapeKey.pop()
      }
    },

    __update (prop, val) {
      /* if (this.layout.menuDrawer[prop] !== val) {
        this.layout.menuDrawer[prop] = val
      } */
    },
    __updateLocal (prop, val) {
      if (this[prop] !== val) {
        this[prop] = val
      }
    }
  },
  created () {
    this.layout.instances.menuDrawer = this
    this.$on('closeDrawer', () => {
      this.hide()
    })
    this.__update('size', this.size)
    this.__update('space', this.onLayout)
  },
  mounted () {
    if (this.showing) {
      this.applyPosition(0)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
    if (this.layout.instances.menuDrawer === this) {
      this.layout.instances.menuDrawer = null
      this.__update('size', 0)
      this.__update('space', false)
    }
  },
  render (h) {
    const child = [
      !this.noSwipeOpen ? h('div', {
        staticClass: `u-layout-drawer-opener fixed-${this.side}`,
        'class': [{'hide': !this.mobileView}],
        directives: [{
          name: 'touch-pan',
          modifiers: {horizontal: true},
          value: this.__openByTouch
        }]
      }) : null,
      h('div', {
        ref: 'backdrop',
        staticClass: 'fullscreen u-layout-backdrop u-layout-transition',
        'class': this.backdropClass,
        on: {click: this.hide},
        directives: [{
          name: 'touch-pan',
          modifiers: {horizontal: true},
          value: this.__closeByTouch
        }]
      })
    ]

    return h('div', {
      ref: 'drawer-main',
      staticClass: 'drawer-aside',
      'class': this.computedDrawerClass
    }, child.concat([
      h('aside', {
        ref: 'content',
        staticClass: `drawer u-layout-transition`,
        'class': this.computedClass,
        style: this.computedStyle,
        attrs: this.$attrs,
        on: this.onNativeEvents,
        directives: this.mobileLayout && !this.noSwipeClose ? [{
          name: 'touch-pan',
          modifiers: {horizontal: true},
          value: this.__closeByTouch
        }] : null
      },
      [
        h(UMenuDrawerHeader, this.$slots['drawer-header']),
        h(UMenuDrawerContent, {
          scopedSlots: {
            'drawer-content': this.$slots['drawer-content'],
            'extra-content': this.$slots['extra-content']
          },
          props: {
            menu: this.menu,
            folded: this.folded
          }
        }),
        this.$slots.default
      ]
      )
    ]))
  }
}
