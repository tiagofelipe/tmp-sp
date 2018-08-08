import FrameMixin from '../../mixins/input-frame.js'
import ParentFieldMixin from '../../mixins/parent-field.js'
import UIcon from '../icon/UIcon.js'

export default {
  name: 'UInputFrame',
  mixins: [FrameMixin, ParentFieldMixin],
  props: {
    topAddons: Boolean,
    focused: Boolean,
    length: Number,
    focusable: Boolean,
    additionalLength: Boolean
  },
  computed: {
    hasStackLabel () {
      return typeof this.stackLabel === 'string' && this.stackLabel.length > 0
    },
    hasLabel () {
      return this.hasStackLabel || (typeof this.floatLabel === 'string' && this.floatLabel.length > 0)
    },
    label () {
      return this.hasStackLabel ? this.stackLabel : this.floatLabel
    },
    addonClass () {
      return {
        'u-if-addon-visible': !this.hasLabel || this.labelIsAbove,
        'self-start': this.topAddons
      }
    },
    classes () {
      const cls = [{
        'u-if-has-label': this.label,
        'u-if-focused': this.focused,
        'u-if-error': this.hasError,
        'u-if-warning': this.hasWarning,
        'u-if-disabled': this.disable,
        'u-if-focusable': this.focusable && !this.disable,
        'u-if-inverted': this.isInverted,
        'u-if-inverted-light': this.isInvertedLight,
        'u-if-light-color': this.lightColor,
        'u-if-dark': this.dark,
        'u-if-hide-underline': !this.isInverted && this.hideUnderline
      }]

      const color = this.hasError ? 'negative' : (this.hasWarning ? 'warning' : this.color)

      if (this.isInverted) {
        cls.push(`bg-${color}`)
        cls.push(`text-${this.isInvertedLight ? 'black' : 'white'}`)
      }
      else if (color) {
        cls.push(`text-${color}`)
      }

      return cls
    }
  },
  methods: {
    __onClick (e) {
      this.$emit('click', e)
    },
    __onMouseDown (e) {
      this.$nextTick(() => this.$emit('focus', e))
    },
    __additionalHidden (item, hasError, hasWarning, length) {
      if (item.condition !== void 0) {
        return item.condition === false
      }
      return (
        (item.content !== void 0 && !item.content === (length > 0)) ||
        (item.error !== void 0 && !item.error === hasError) ||
        (item.warning !== void 0 && !item.warning === hasWarning)
      )
    },
    __baHandler (evt, item) {
      if (!item.allowPropagation) {
        evt.stopPropagation()
      }
      if (item.handler) {
        item.handler(evt)
      }
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'u-if row no-wrap items-end relative-position',
      'class': this.classes,
      attrs: { tabindex: this.focusable && !this.disable ? 0 : -1 },
      on: { click: this.__onClick }
    }, [
      (this.before && this.before.map(item => {
        return h(UIcon, {
          key: `b${item.icon}`,
          staticClass: 'u-if-control u-if-control-before',
          'class': {
            hidden: this.__additionalHidden(item, this.hasError, this.hasWarning, this.length)
          },
          props: {
            name: item.icon
          },
          nativeOn: {
            mousedown: this.__onMouseDown,
            touchstart: this.__onMouseDown,
            click: e => { this.__baHandler(e, item) }
          }
        })
      })) || void 0,

      h('div', {
        staticClass: 'u-if-inner col row no-wrap relative-position'
      }, [
        (this.hasLabel && h('div', {
          staticClass: 'u-if-label ellipsis full-width absolute self-start',
          'class': { 'u-if-label-above': this.labelIsAbove },
          domProps: {
            innerHTML: this.label
          }
        })) || void 0,

        (this.prefix && h('span', {
          staticClass: 'u-if-addon u-if-addon-left',
          'class': this.addonClass,
          domProps: {
            innerHTML: this.prefix
          }
        })) || void 0
      ].concat(this.$slots.default).concat([
        (this.suffix && h('span', {
          staticClass: 'u-if-addon u-if-addon-right',
          'class': this.addonClass,
          domProps: {
            innerHTML: this.suffix
          }
        })) || void 0
      ])),

      (this.after && this.after.map(item => {
        return h(UIcon, {
          key: `a${item.icon}`,
          staticClass: 'u-if-control',
          'class': {
            hidden: this.__additionalHidden(item, this.hasError, this.hasWarning, this.length)
          },
          props: {
            name: item.icon
          },
          nativeOn: {
            mousedown: this.__onMouseDown,
            touchstart: this.__onMouseDown,
            click: e => { this.__baHandler(e, item) }
          }
        })
      })) || void 0
    ].concat(this.$slots.after))
  }
}
