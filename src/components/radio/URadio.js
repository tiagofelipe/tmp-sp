import OptionMixin from '../../mixins/option.js'
import { UIcon } from '../icon'
import { stopAndPrevent } from '../../utils/event.js'

export default {
  name: 'URadio',
  mixins: [OptionMixin],
  props: {
    val: {
      required: true
    }
  },
  computed: {
    isTrue () {
      return this.value === this.val
    }
  },
  methods: {
    toggle (evt, blur = true) {
      if (this.disable || this.readonly) {
        return
      }
      evt && stopAndPrevent(evt)
      blur && this.$el.blur()

      if (!this.isTrue) {
        this.__update(this.val)
      }
    },
    __getContent (h) {
      return [
        h(UIcon, {
          staticClass: 'u-radio-unchecked cursor-pointer absolute-full',
          props: {
            name: this.uncheckedIcon || this.$uloc.icon.radio.unchecked[process.env.THEME],
            type: 'material'
          }
        }),
        h(UIcon, {
          staticClass: 'u-radio-checked cursor-pointer absolute-full',
          props: {
            name: this.checkedIcon || this.$uloc.icon.radio.checked[process.env.THEME],
            type: 'material'
          }
        }),
        process.env.THEME === 'mat'
          ? h('div', { ref: 'ripple', staticClass: 'u-radial-ripple' })
          : null
      ]
    }
  },
  beforeCreate () {
    this.__kebabTag = 'u-radio'
  }
}
