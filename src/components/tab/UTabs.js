import { width, css, cssTransform } from '../../utils/dom.js'
import debounce from '../../utils/debounce.js'
import UIcon from '../icon/Icon.vue'
import { listenOpts } from '../../utils/event.js'

const
  scrollNavigationSpeed = 5, // in pixels
  debounceDelay = 50 // in ms

export default {
  name: 'UTabs',
  provide () {
    return {
      data: this.data,
      selectTab: this.selectTab,
      selectTabRouter: this.selectTabRouter
    }
  },
  props: {
    value: String,
    align: {
      type: String,
      default: process.env.THEME === 'ios' ? 'center' : 'left',
      validator: v => ['left', 'center', 'right', 'justify'].includes(v)
    },
    position: {
      type: String,
      default: 'top',
      validator: v => ['top', 'bottom'].includes(v)
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: String,
    inverted: Boolean,
    twoLines: Boolean,
    noPaneBorder: Boolean,
    glossy: Boolean,
    panesContainerClass: String
  },
  data () {
    return {
      currentEl: null,
      posbar: {
        width: 0,
        left: 0
      },
      data: {
        highlight: true,
        tabName: this.value || '',
        color: this.color,
        textColor: this.textColor,
        inverted: this.inverted
      }
    }
  },
  watch: {
    value (name) {
      this.selectTab(name)
    },
    color (v) {
      this.data.color = v
    },
    textColor (v) {
      this.data.textColor = v
    },
    inverted (v) {
      this.data.inverted = v
    }
  },
  computed: {
    classes () {
      return [
        `u-tabs-position-${this.position}`,
        `u-tabs-${this.inverted ? 'inverted' : 'normal'}`,
        this.noPaneBorder ? 'u-tabs-no-pane-border' : '',
        this.twoLines ? 'u-tabs-two-lines' : ''
      ]
    },
    innerClasses () {
      const cls = [ `u-tabs-align-${this.align}` ]
      this.glossy && cls.push('glossy')
      if (this.inverted) {
        cls.push(`text-${this.textColor || this.color}`)
      }
      else {
        cls.push(`bg-${this.color}`)
        cls.push(`text-${this.textColor || 'white'}`)
      }
      return cls
    },
    posbarClasses () {
      const cls = []
      this.inverted && cls.push(`text-${this.textColor || this.color}`)
      this.data.highlight && cls.push('highlight')
      return cls
    }
  },
  methods: {
    selectTab (value) {
      if (this.data.tabName === value) {
        return
      }

      this.data.tabName = value
      this.$emit('input', value)
      this.$emit('select', value)

      const el = this.__getTabElByName(value)

      if (el) {
        this.__scrollToTab(el)

        if (process.env.THEME !== 'ios') {
          this.currentEl = el

          if (this.oldEl) {
            this.__repositionBar()
          }
          else {
            this.oldEl = el
          }
        }
      }
      else {
        this.oldEl = null
      }
    },
    selectTabRouter (params) {
      const
        { value, selectable, exact, selected, priority } = params,
        first = !this.buffer.length,
        existingIndex = first ? -1 : this.buffer.findIndex(t => t.value === value)

      if (existingIndex > -1) {
        const buffer = this.buffer[existingIndex]
        exact && (buffer.exact = exact)
        selectable && (buffer.selectable = selectable)
        selected && (buffer.selected = selected)
        priority && (buffer.priority = priority)
      }
      else {
        this.buffer.push(params)
      }

      if (first) {
        this.bufferTimer = setTimeout(() => {
          let tab = this.buffer.find(t => t.exact && t.selected) ||
            this.buffer.find(t => t.selectable && t.selected) ||
            this.buffer.find(t => t.exact) ||
            this.buffer.filter(t => t.selectable).sort((t1, t2) => t2.priority - t1.priority)[0] ||
            this.buffer[0]

          this.buffer.length = 0
          this.selectTab(tab.value)
        }, 100)
      }
    },
    __repositionBar () {
      clearTimeout(this.timer)

      let needsUpdate = false
      const
        ref = this.$refs.posbar,
        el = this.currentEl

      if (this.data.highlight !== false) {
        this.data.highlight = false
        needsUpdate = true
      }

      if (!el) {
        this.finalPosbar = {width: 0, left: 0}
        this.__setPositionBar(0, 0)
        return
      }

      const offsetReference = ref.parentNode.offsetLeft

      if (needsUpdate && this.oldEl) {
        this.__setPositionBar(
          this.oldEl.getBoundingClientRect().width,
          this.oldEl.offsetLeft - offsetReference
        )
      }

      this.timer = setTimeout(() => {
        const
          width = el.getBoundingClientRect().width,
          left = el.offsetLeft - offsetReference

        ref.classList.remove('contract')
        this.oldEl = el
        this.finalPosbar = {width, left}
        this.__setPositionBar(
          this.posbar.left < left
            ? left + width - this.posbar.left
            : this.posbar.left + this.posbar.width - left,
          this.posbar.left < left
            ? this.posbar.left
            : left
        )
      }, 20)
    },
    __setPositionBar (width = 0, left = 0) {
      if (this.posbar.width === width && this.posbar.left === left) {
        this.__updatePosbarTransition()
        return
      }
      this.posbar = {width, left}
      const xPos = this.$uloc.i18n.rtl
        ? left + width
        : left
      css(this.$refs.posbar, cssTransform(`translateX(${xPos}px) scaleX(${width})`))
    },
    __updatePosbarTransition () {
      if (
        this.finalPosbar.width === this.posbar.width &&
        this.finalPosbar.left === this.posbar.left
      ) {
        this.posbar = {}
        if (this.data.highlight !== true) {
          this.data.highlight = true
        }
        return
      }

      this.$refs.posbar.classList.add('contract')
      this.__setPositionBar(this.finalPosbar.width, this.finalPosbar.left)
    },
    __redraw () {
      if (!this.$uloc.platform.is.desktop) {
        return
      }
      this.scrollerWidth = width(this.$refs.scroller)
      if (this.scrollerWidth === 0 && this.$refs.scroller.scrollWidth === 0) {
        return
      }
      if (this.scrollerWidth + 5 < this.$refs.scroller.scrollWidth) {
        this.$refs.tabs.classList.add('scrollable')
        this.scrollable = true
        this.__updateScrollIndicator()
      }
      else {
        this.$refs.tabs.classList.remove('scrollable')
        this.scrollable = false
      }
    },
    __updateScrollIndicator () {
      if (!this.$uloc.platform.is.desktop || !this.scrollable) {
        return
      }
      let action = this.$refs.scroller.scrollLeft + width(this.$refs.scroller) + 5 >= this.$refs.scroller.scrollWidth ? 'add' : 'remove'
      this.$refs.leftScroll.classList[this.$refs.scroller.scrollLeft <= 0 ? 'add' : 'remove']('disabled')
      this.$refs.rightScroll.classList[action]('disabled')
    },
    __getTabElByName (value) {
      const tab = this.$children.find(child => child.name === value && child.$el && child.$el.nodeType === 1)
      if (tab) {
        return tab.$el
      }
    },
    __findTabAndScroll (name, noAnimation) {
      setTimeout(() => {
        this.__scrollToTab(this.__getTabElByName(name), noAnimation)
      }, debounceDelay * 4)
    },
    __scrollToTab (tab, noAnimation) {
      if (!tab || !this.scrollable) {
        return
      }

      let
        contentRect = this.$refs.scroller.getBoundingClientRect(),
        rect = tab.getBoundingClientRect(),
        tabWidth = rect.width,
        offset = rect.left - contentRect.left

      if (offset < 0) {
        if (noAnimation) {
          this.$refs.scroller.scrollLeft += offset
        }
        else {
          this.__animScrollTo(this.$refs.scroller.scrollLeft + offset)
        }
        return
      }

      offset += tabWidth - this.$refs.scroller.offsetWidth
      if (offset > 0) {
        if (noAnimation) {
          this.$refs.scroller.scrollLeft += offset
        }
        else {
          this.__animScrollTo(this.$refs.scroller.scrollLeft + offset)
        }
      }
    },
    __animScrollTo (value) {
      this.__stopAnimScroll()
      this.__scrollTowards(value)

      this.scrollTimer = setInterval(() => {
        if (this.__scrollTowards(value)) {
          this.__stopAnimScroll()
        }
      }, 5)
    },
    __scrollToStart () {
      this.__animScrollTo(0)
    },
    __scrollToEnd () {
      this.__animScrollTo(9999)
    },
    __stopAnimScroll () {
      clearInterval(this.scrollTimer)
    },
    __scrollTowards (value) {
      let
        scrollPosition = this.$refs.scroller.scrollLeft,
        direction = value < scrollPosition ? -1 : 1,
        done = false

      scrollPosition += direction * scrollNavigationSpeed
      if (scrollPosition < 0) {
        done = true
        scrollPosition = 0
      }
      else if (
        (direction === -1 && scrollPosition <= value) ||
        (direction === 1 && scrollPosition >= value)
      ) {
        done = true
        scrollPosition = value
      }

      this.$refs.scroller.scrollLeft = scrollPosition
      return done
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-tabs flex no-wrap',
      'class': this.classes
    }, [
      h('div', {
        staticClass: 'u-tabs-head row',
        ref: 'tabs',
        'class': this.innerClasses
      }, [
        h('div', {
          ref: 'scroller',
          staticClass: 'u-tabs-scroller row no-wrap'
        }, [
          this.$slots.title,
          process.env.THEME !== 'ios'
            ? h('div', {
              staticClass: 'relative-position self-stretch u-tabs-global-bar-container',
              'class': this.posbarClasses
            }, [
              h('div', {
                ref: 'posbar',
                staticClass: 'u-tabs-bar u-tabs-global-bar',
                on: {
                  transitionend: this.__updatePosbarTransition
                }
              })
            ])
            : null
        ]),

        h('div', {
          ref: 'leftScroll',
          staticClass: 'row flex-center u-tabs-left-scroll',
          on: {
            mousedown: this.__scrollToStart,
            touchstart: this.__scrollToStart,
            mouseup: this.__stopAnimScroll,
            mouseleave: this.__stopAnimScroll,
            touchend: this.__stopAnimScroll
          }
        }, [
          h(UIcon, {
            props: { name: this.$uloc.icon.tabs.left }
          })
        ]),

        h('div', {
          ref: 'rightScroll',
          staticClass: 'row flex-center u-tabs-right-scroll',
          on: {
            mousedown: this.__scrollToEnd,
            touchstart: this.__scrollToEnd,
            mouseup: this.__stopAnimScroll,
            mouseleave: this.__stopAnimScroll,
            touchend: this.__stopAnimScroll
          }
        }, [
          h(UIcon, {
            props: { name: this.$uloc.icon.tabs.right }
          })
        ])
      ]),

      h('div', {
        staticClass: 'u-tabs-panes',
        'class': this.panesContainerClass
      }, this.$slots.default)
    ])
  },
  created () {
    this.timer = null
    this.scrollTimer = null
    this.bufferTimer = null
    this.buffer = []
    this.scrollable = !this.$uloc.platform.is.desktop

    // debounce some costly methods;
    // debouncing here because debounce needs to be per instance
    this.__redraw = debounce(this.__redraw, debounceDelay)
    this.__updateScrollIndicator = debounce(this.__updateScrollIndicator, debounceDelay)
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.$refs.scroller) {
        return
      }
      this.$refs.scroller.addEventListener('scroll', this.__updateScrollIndicator, listenOpts.passive)
      window.addEventListener('resize', this.__redraw, listenOpts.passive)

      if (this.data.tabName !== '' && this.value) {
        this.selectTab(this.value)
      }

      this.__redraw()
      this.__findTabAndScroll(this.data.tabName, true)
    })
  },
  beforeDestroy () {
    clearTimeout(this.timer)
    clearTimeout(this.bufferTimer)
    this.__stopAnimScroll()
    this.$refs.scroller.removeEventListener('scroll', this.__updateScrollIndicator, listenOpts.passive)
    window.removeEventListener('resize', this.__redraw, listenOpts.passive)
    this.__redraw.cancel()
    this.__updateScrollIndicator.cancel()
  }
}
