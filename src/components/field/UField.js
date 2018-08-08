import UIcon from '../icon/Icon.vue'
import CanRenderMixin from '../../mixins/can-render.js'

export default {
  name: 'UField',
  mixins: [ CanRenderMixin ],
  props: {
    inset: {
      type: String,
      validator: v => ['icon', 'label', 'full'].includes(v)
    },
    label: String,
    count: {
      type: [Number, Boolean],
      default: false
    },
    error: Boolean,
    errorLabel: String,
    warning: Boolean,
    warningLabel: String,
    helper: String,
    icon: String,
    iconColor: String,
    dark: Boolean,
    orientation: {
      type: String,
      validator: v => ['vertical', 'horizontal'].includes(v)
    },
    labelWidth: {
      type: [Number, String],
      default: 5,
      validator (val) {
        const v = parseInt(val, 10)
        return v > 0 && v < 13
      }
    }
  },
  data () {
    return {
      input: {}
    }
  },
  computed: {
    hasError () {
      return this.input.error || this.error
    },
    hasWarning () {
      return !this.hasError && (this.input.warning || this.warning)
    },
    childHasLabel () {
      return this.input.floatLabel || this.input.stackLabel
    },
    isDark () {
      return this.input.dark || this.dark
    },
    insetIcon () {
      return ['icon', 'full'].includes(this.inset)
    },
    hasNoInput () {
      return this.canRender && (!this.input.$options || this.input.__needsBorder)
    },
    counter () {
      if (this.count) {
        const length = this.input.length || '0'
        return Number.isInteger(this.count)
          ? `${length} / ${this.count}`
          : length
      }
    },
    classes () {
      return {
        'u-field-responsive': !this.isVertical && !this.isHorizontal,
        'u-field-vertical': this.isVertical,
        'u-field-horizontal': this.isHorizontal,
        'u-field-floating': this.childHasLabel,
        'u-field-no-label': !this.label && !this.$slots.label,
        'u-field-with-error': this.hasError,
        'u-field-with-warning': this.hasWarning,
        'u-field-dark': this.isDark
      }
    },
    computedLabelWidth () {
      return parseInt(this.labelWidth, 10)
    },
    isVertical () {
      return this.orientation === 'vertical' || this.computedLabelWidth === 12
    },
    isHorizontal () {
      return this.orientation === 'horizontal'
    },
    labelClasses () {
      return this.isVertical
        ? `col-12`
        : (this.isHorizontal ? `col-${this.labelWidth}` : `col-xs-12 col-sm-${this.labelWidth}`)
    },
    inputClasses () {
      return this.isVertical
        ? `col-xs-12`
        : (this.isHorizontal ? 'col' : 'col-xs-12 col-sm')
    },
    iconProps () {
      const prop = { name: this.icon }
      if (this.iconColor && !this.hasError && !this.hasWarning) {
        prop.color = this.iconColor
      }
      return prop
    },
    insetHasLabel () {
      return ['label', 'full'].includes(this.inset)
    }
  },
  provide () {
    return {
      __field: this
    }
  },
  methods: {
    __registerInput (vm) {
      this.input = vm
    },
    __unregisterInput (vm) {
      if (!vm || vm === this.input) {
        this.input = {}
      }
    },
    __getBottomContent (h) {
      let label

      if (this.hasError && (label = this.$slots['error-label'] || this.errorLabel)) {
        return h('div', { staticClass: 'u-field-error col' }, label)
      }
      if (this.hasWarning && (label = this.$slots['warning-label'] || this.warningLabel)) {
        return h('div', { staticClass: 'u-field-warning col' }, label)
      }
      if ((label = this.$slots.helper || this.helper)) {
        return h('div', { staticClass: 'u-field-helper col' }, label)
      }
      return h('div', { staticClass: 'col' })
    },
    __hasBottom () {
      return (this.hasError && (this.$slots['error-label'] || this.errorLabel)) ||
        (this.hasWarning && (this.$slots['warning-label'] || this.warningLabel)) ||
        (this.$slots.helper || this.helper) ||
        this.count
    }
  },
  render (h) {
    const label = this.$slots.label || this.label

    return h('div', {
      staticClass: 'u-field row no-wrap items-start',
      'class': this.classes
    }, [
      this.icon
        ? h(UIcon, {
          props: this.iconProps,
          staticClass: 'u-field-icon u-field-margin'
        })
        : (this.insetIcon ? h('div', { staticClass: 'u-field-icon' }) : null),

      h('div', { staticClass: 'row col' }, [
        label || this.insetHasLabel
          ? h('div', {
            staticClass: 'u-field-label u-field-margin',
            'class': this.labelClasses
          }, [
            h('div', { staticClass: 'u-field-label-inner row items-center' }, [
              this.$slots.label || this.label
            ])
          ])
          : null,

        h('div', {
          staticClass: 'u-field-content',
          'class': this.inputClasses
        }, [
          this.$slots.default,
          this.__hasBottom()
            ? h('div', {
              staticClass: 'u-field-bottom row no-wrap',
              'class': { 'u-field-no-input': this.hasNoInput }
            }, [
              this.__getBottomContent(h),
              this.counter
                ? h('div', { staticClass: 'u-field-counter col-auto' }, [ this.counter ])
                : null
            ])
            : null
        ])
      ])
    ])
  }
}
