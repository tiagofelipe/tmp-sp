import UIcon from '../icon/Icon.vue'
import Ripple from '../../directives/ripple.js'

export default {
  name: 'UStepTab',
  directives: {
    Ripple
  },
  props: ['vm'],
  computed: {
    hasNavigation () {
      return !this.vm.__stepper.noHeaderNavigation
    },
    classes () {
      return {
        'step-error': this.vm.error,
        'step-active': this.vm.active,
        'step-done': this.vm.done,
        'step-navigation': this.vm.done && this.hasNavigation,
        'step-waiting': this.vm.waiting,
        'step-disabled': this.vm.disable,
        'step-colored': this.vm.active || this.vm.done,
        'items-center': !this.vm.__stepper.vertical,
        'items-start': this.vm.__stepper.vertical,
        'u-stepper-first': this.vm.first,
        'u-stepper-last': this.vm.last
      }
    }
  },
  methods: {
    __select () {
      if (this.hasNavigation) {
        this.vm.select()
      }
    }
  },
  render (h) {
    const icon = this.vm.stepIcon
      ? h(UIcon, { props: { name: this.vm.stepIcon } })
      : h('span', [ (this.vm.innerOrder + 1) ])

    return h('div', {
      staticClass: 'u-stepper-tab col-grow flex no-wrap relative-position',
      'class': this.classes,
      on: {
        click: this.__select
      },
      directives: process.env.THEME === 'mat' && this.hasNavigation
        ? [{
          name: 'ripple',
          value: this.vm.done
        }]
        : null
    }, [
      h('div', { staticClass: 'u-stepper-dot row flex-center u-stepper-line relative-position' }, [
        h('span', { staticClass: 'row flex-center' }, [ icon ])
      ]),
      this.vm.title
        ? h('div', {
          staticClass: 'u-stepper-label u-stepper-line relative-position'
        }, [
          h('div', { staticClass: 'u-stepper-title' }, [ this.vm.title ]),
          h('div', { staticClass: 'u-stepper-subtitle' }, [ this.vm.subtitle ])
        ])
        : null
    ])
  }
}
