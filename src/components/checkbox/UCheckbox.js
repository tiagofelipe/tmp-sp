import CheckboxMixin from '../../mixins/checkbox.js'
import OptionMixin from '../../mixins/option.js'
import UIcon from '../icon/UIcon.js'

export default {
  name: 'UCheckbox', /* TODO: BUG */
  mixins: [CheckboxMixin, OptionMixin],
  props: {
    toggleIndeterminate: Boolean,
    indeterminateValue: { default: null },
    indeterminateIcon: String
  },
  computed: {
    isIndeterminate () {
      return this.value === void 0 || this.value === this.indeterminateValue
    },
    checkedStyle () {
      return this.isTrue
        ? {transition: 'opacity 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', opacity: 1, transform: 'scale(1)'}
        : {transition: 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms', opacity: 0, transform: 'scale(0)'}
    },
    indeterminateStyle () {
      return this.isIndeterminate
        ? {transition: 'opacity 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', opacity: 1, transform: 'scale(1)'}
        : {transition: 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms', opacity: 0, transform: 'scale(0)'}
    },
    uncheckedStyle () {
      return this.isFalse
        ? {opacity: 1}
        : {transition: 'opacity 650ms cubic-bezier(0.23, 1, 0.32, 1) 150ms', opacity: 0}
    }
  },
  methods: {
    __getContent (h) {
      return [
        h(UIcon, {
          staticClass: 'u-checkbox-icon cursor-pointer',
          props: { name: this.uncheckedIcon || this.$uloc.icon.checkbox.unchecked[process.env.THEME] },
          style: this.uncheckedStyle
        }),
        h(UIcon, {
          staticClass: 'u-checkbox-icon cursor-pointer absolute-full',
          props: { name: this.indeterminateIcon || this.$uloc.icon.checkbox.indeterminate[process.env.THEME] },
          style: this.indeterminateStyle
        }),
        h(UIcon, {
          staticClass: 'u-checkbox-icon cursor-pointer absolute-full',
          props: { name: this.checkedIcon || this.$uloc.icon.checkbox.checked[process.env.THEME] },
          style: this.checkedStyle
        })
      ]
    }
  },
  beforeCreate () {
    this.__kebabTag = 'u-checkbox'
  }
}
