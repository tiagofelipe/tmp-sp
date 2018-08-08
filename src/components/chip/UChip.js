import { UIcon } from '../icon'
import { getEventKey, stopAndPrevent } from '../../utils/event.js'

export default {
  name: 'UChip',
  props: {
    small: Boolean,
    dense: Boolean,
    tag: Boolean,
    square: Boolean,
    floating: Boolean,
    pointing: {
      type: String,
      validator: v => ['up', 'right', 'down', 'left'].includes(v)
    },
    color: String,
    textColor: String,
    icon: String,
    iconRight: String,
    avatar: String,
    closable: Boolean,
    detail: Boolean
  },
  computed: {
    classes () {
      const cls = []

      this.pointing && cls.push(`u-chip-pointing-${this.pointing}`)
      ;['tag', 'square', 'floating', 'pointing', 'small', 'dense'].forEach(prop => {
        this[prop] && cls.push(`u-chip-${prop}`)
      })
      if (this.floating) {
        !this.dense && cls.push('u-chip-dense')
        !this.square && cls.push('u-chip-square')
      }

      if (this.color) {
        cls.push(`bg-${this.color}`)
        !this.textColor && cls.push(`text-white`)
      }
      if (this.textColor) {
        cls.push(`text-${this.textColor}`)
      }

      return cls
    }
  },
  methods: {
    __onClick (e) {
      this.$emit('click', e)
    },
    __onMouseDown (e) {
      this.$emit('focus', e)
    },
    __handleKeyDown (e) {
      if (this.closable && [8, 13, 32].includes(getEventKey(e))) {
        stopAndPrevent(e)
        this.$emit('hide')
      }
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-chip row no-wrap inline items-center',
      'class': this.classes,
      on: {
        mousedown: this.__onMouseDown,
        touchstart: this.__onMouseDown,
        click: this.__onClick,
        keydown: this.__handleKeyDown
      }
    }, [
      this.icon || this.avatar
        ? h('div', {
          staticClass: 'u-chip-side u-chip-left row flex-center',
          'class': { 'u-chip-detail': this.detail }
        }, [
          this.icon
            ? h(UIcon, { staticClass: 'u-chip-icon', props: { name: this.icon, type: 'material' } })
            : (this.avatar ? h('img', { attrs: { src: this.avatar } }) : null)
        ])
        : null,

      h('div', { staticClass: 'u-chip-main ellipsis' }, this.$slots.default),

      this.iconRight
        ? h(UIcon, {
          props: { name: this.iconRight, type: 'material' },
          'class': this.closable ? 'on-right u-chip-icon' : 'u-chip-side u-chip-right'
        })
        : null,

      this.closable
        ? h('div', { staticClass: 'u-chip-side u-chip-close u-chip-right row flex-center' }, [
          h(UIcon, {
            props: { name: this.$uloc.icon.chip.close, type: 'material' },
            staticClass: 'cursor-pointer',
            nativeOn: {
              click: e => {
                e && e.stopPropagation()
                this.$emit('hide')
              }
            }
          })
        ])
        : null
    ])
  }
}
