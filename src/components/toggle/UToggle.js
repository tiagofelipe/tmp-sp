import CheckboxMixin from '../../mixins/checkbox.js'
import OptionMixin from '../../mixins/option.js'
import { UIcon } from '../icon'

export default {
  name: 'UToggle',
  mixins: [CheckboxMixin, OptionMixin],
  props: {
    icon: String
  },
  computed: {
    currentIcon () {
      return (this.isTrue ? this.checkedIcon : this.uncheckedIcon) || this.icon
    },
    iconColor () {
      return process.env.THEME === 'ios'
        ? 'dark'
        : (this.isTrue ? 'white' : 'dark')
    },
    baseClass () {
      if (process.env.THEME === 'ios' && this.dark) {
        return `u-toggle-base-dark`
      }
    }
  },
  methods: {
    __swipe (evt) {
      if (evt.direction === 'left') {
        if (this.isTrue) {
          this.toggle()
        }
      }
      else if (evt.direction === 'right') {
        if (this.isFalse) {
          this.toggle()
        }
      }
    },
    __getContent (h) {
      return [
        h('div', { staticClass: 'u-toggle-base', 'class': this.baseClass }),
        h('div', { staticClass: 'u-toggle-handle row flex-center' }, [
          this.currentIcon
            ? h(UIcon, {
              staticClass: 'u-toggle-icon',
              props: { name: this.currentIcon, color: this.iconColor, type: 'material' }
            })
            : null,
          process.env.THEME === 'mat'
            ? h('div', { ref: 'ripple', staticClass: 'u-radial-ripple' })
            : null
        ])
      ]
    }
  },
  beforeCreate () {
    this.__kebabTag = 'u-toggle'
  }
}
