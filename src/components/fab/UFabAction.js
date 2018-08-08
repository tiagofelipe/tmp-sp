import { UBtn } from '../button'
import FabMixin from './fab-mixin'

export default {
  name: 'UFabAction',
  mixins: [FabMixin],
  inject: {
    __uFabClose: {
      default () {
        console.error('UFabAction needs to be child of UFab')
      }
    }
  },
  methods: {
    click (e) {
      this.__uFabClose().then(() => {
        this.$emit('click', e)
      })
    }
  },
  render (h) {
    return h(UBtn, {
      props: {
        fabMini: true,
        outline: this.outline,
        push: this.push,
        flat: this.flat,
        color: this.color,
        textColor: this.textColor,
        glossy: this.glossy,
        icon: this.icon,
        iconType: this.iconType || 'material',
        iconStyle: this.iconStyle
      },
      on: {
        click: this.click
      }
    }, [
      this.$slots.default
    ])
  }
}
