import { UBtn } from '../button'
import { UIcon } from '../icon'
import FabMixin from './fab-mixin'
import ModelToggleMixin from '../../mixins/model-toggle'

export default {
  name: 'UFab',
  mixins: [FabMixin, ModelToggleMixin],
  provide () {
    return {
      __uFabClose: this.hide
    }
  },
  props: {
    activeIcon: String,
    direction: {
      type: String,
      default: 'right'
    }
  },
  watch: {
    $route () {
      this.hide()
    }
  },
  created () {
    if (this.value) {
      this.show()
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-fab z-fab row inline justify-center',
      'class': {
        'u-fab-opened': this.showing
      }
    }, [
      h(UBtn, {
        props: {
          fab: true,
          outline: this.outline,
          push: this.push,
          flat: this.flat,
          color: this.color,
          textColor: this.textColor,
          glossy: this.glossy
        },
        on: {
          click: this.toggle
        }
      }, [
        this.$slots.tooltip,
        h(UIcon, {
          staticClass: 'u-fab-icon absolute-full',
          props: { name: this.icon || 'add', type: this.iconType || 'material', iconStyle: this.iconStyle } // this.$uloc.icon.fab.icon
        }),
        h(UIcon, {
          staticClass: 'u-fab-active-icon absolute-full',
          props: { name: this.activeIcon || 'close', type: this.iconType || 'material', iconStyle: this.iconStyle } // this.$uloc.icon.fab.activeIcon
        })
      ]),

      h('div', {
        staticClass: 'u-fab-actions flex no-wrap inline items-center',
        'class': `u-fab-${this.direction}`
      }, [
        this.$slots.default
      ])
    ])
  }
}
