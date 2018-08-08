import uid from '../../utils/uid.js'
import UIcon from '../icon/Icon'
import UChip from '../chip/UChip.js'
import Ripple from '../../directives/ripple.js'

export default {
  directives: {
    Ripple
  },
  props: {
    label: String,
    icon: String,
    disable: Boolean,
    hidden: Boolean,
    hide: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default () {
        return uid()
      }
    },
    alert: Boolean,
    count: [Number, String],
    color: String,
    tabindex: Number
  },
  inject: {
    data: {
      default () {
        console.error('UTab/URouteTab components need to be child of UTabs')
      }
    },
    selectTab: {}
  },
  watch: {
    active (val) {
      if (val) {
        this.$emit('select', this.name)
      }
    }
  },
  computed: {
    active () {
      return this.data.tabName === this.name
    },
    classes () {
      const cls = {
        active: this.active,
        hidden: this.hidden,
        disabled: this.disable,
        'u-tab-full': this.icon && this.label,
        'u-tab-only-label': !this.icon && this.label,
        'hide-none': !this.hide,
        'hide-icon': this.hide === 'icon',
        'hide-label': this.hide === 'label'
      }

      const color = this.data.inverted
        ? this.color || this.data.textColor || this.data.color
        : this.color

      if (color) {
        cls[`text-${color}`] = process.env.THEME === 'ios' ? this.active : true
      }

      return cls
    },
    barStyle () {
      if (!this.active || !this.data.highlight) {
        return 'display: none;'
      }
    },
    computedTabIndex () {
      return this.disable || this.active ? -1 : this.tabindex || 0
    }
  },
  methods: {
    __getTabMeta (h) {
      if (this.count) {
        return [
          h(UChip, {
            staticClass: 'u-tab-meta',
            props: {
              floating: true
            }
          }, [ this.count ])
        ]
      }
      if (this.alert) {
        return [
          h('div', { staticClass: 'u-tab-meta u-dot' })
        ]
      }
    },
    __getTabContent (h) {
      let child = []

      this.icon && child.push(
        h('div', { staticClass: 'u-tab-icon-parent relative-position' }, [
          h(UIcon, {
            staticClass: 'u-tab-icon',
            props: {
              name: this.icon
            }
          }),
          this.__getTabMeta(h)
        ])
      )

      this.label && child.push(
        h('div', { staticClass: 'u-tab-label-parent relative-position' }, [
          h('div', {
            staticClass: 'u-tab-label'
          }, [ this.label ]),
          this.__getTabMeta(h)
        ])
      )

      child = child.concat(this.$slots.default)
      if (process.env.THEME !== 'ios') {
        child.push(h('div', {
          staticClass: 'u-tabs-bar',
          style: this.barStyle
        }))
      }

      child.push(h('div', {
        staticClass: 'u-tab-focus-helper absolute-full',
        attrs: { tabindex: this.computedTabIndex }
      }))

      return child
    }
  }
}
