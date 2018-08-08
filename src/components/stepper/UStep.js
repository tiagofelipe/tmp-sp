import USlideTransition from '../slide-transition/USlideTransition.js'
import StepTab from './StepTab.js'
import uid from '../../utils/uid.js'

export default {
  name: 'UStep',
  inject: {
    __stepper: {
      default () {
        console.error('UStep needs to be child of UStepper')
      }
    }
  },
  props: {
    name: {
      type: [Number, String],
      default () {
        return uid()
      }
    },
    default: Boolean,
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    icon: String,
    order: [Number, String],
    error: Boolean,
    activeIcon: String,
    errorIcon: String,
    doneIcon: String,
    disable: Boolean
  },
  watch: {
    order () {
      this.__stepper.__sortSteps()
    }
  },
  data () {
    return {
      innerOrder: 0,
      first: false,
      last: false
    }
  },
  computed: {
    stepIcon () {
      const data = this.__stepper

      if (this.active) {
        return this.activeIcon || data.activeIcon || this.$uloc.icon.stepper.active
      }
      if (this.error) {
        return this.errorIcon || data.errorIcon || this.$uloc.icon.stepper.error
      }
      if (this.done && !this.disable) {
        return this.doneIcon || data.doneIcon || this.$uloc.icon.stepper.done
      }

      return this.icon
    },
    actualOrder () {
      return parseInt(this.order || this.innerOrder, 10)
    },
    active () {
      return this.__stepper.step === this.name
    },
    done () {
      return !this.disable && this.__stepper.currentOrder > this.innerOrder
    },
    waiting () {
      return !this.disable && this.__stepper.currentOrder < this.innerOrder
    },
    style () {
      const ord = this.actualOrder
      return {
        '-webkit-box-ordinal-group': ord,
        '-ms-flex-order': ord,
        order: ord
      }
    }
  },
  methods: {
    select () {
      if (this.done) {
        this.__stepper.goToStep(this.name)
      }
    }
  },
  mounted () {
    this.__stepper.__registerStep(this)
    if (this.default) {
      this.select()
    }
  },
  beforeDestroy () {
    this.__stepper.__unregisterStep(this)
  },
  render (h) {
    return h('div', {
      staticClass: 'u-stepper-step',
      style: this.style
    }, [
      this.__stepper.vertical
        ? h(StepTab, { props: { vm: this } })
        : null,
      h(USlideTransition, [
        this.active
          ? h('div', {
            staticClass: 'u-stepper-step-content'
          }, [
            h('div', {
              staticClass: 'u-stepper-step-inner'
            }, this.$slots.default)
          ])
          : null
      ])
    ])
  }
}
