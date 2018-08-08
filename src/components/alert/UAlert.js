import { UIcon } from '../icon'
import { UBtn } from '../button'

export default {
  name: 'UAlert',
  props: {
    type: {
      type: String,
      validator: v => ['positive', 'negative', 'warning', 'info'].includes(v)
    },
    color: {
      type: String,
      default: 'negative'
    },
    textColor: String,
    message: String,
    detail: String,
    icon: String,
    iconType: String,
    iconStyle: String,
    avatar: String,
    actions: Array
  },
  computed: {
    computedIcon () {
      return this.icon
        ? this.icon
        : this.$uloc.icon.type[this.type || this.color] // TODO: Verificar necessidade de $uloc.icon
    },
    classes () {
      return `bg-${this.type || this.color} text-${this.textColor || 'white'}`
    }
  },
  render (h) {
    const side = []

    if (this.avatar) {
      side.push(
        h('img', {
          staticClass: 'avatar',
          domProps: {src: this.avatar}
        })
      )
    } else if (this.icon || this.type) {
      side.push(
        h(UIcon, {
          props: {name: this.computedIcon, type: this.iconType, iconStyle: this.iconStyle}
        })
      )
    }

    return h('div', [
      h('div', {
        staticClass: 'u-alert row no-wrap shadow-2',
        'class': this.classes
      }, [
        side.length
          ? h('div', {staticClass: 'u-alert-side col-auto row flex-center'}, side)
          : null,
        h('div', {
          staticClass: 'u-alert-content col self-center'
        }, [
          h('div', this.$slots.default || this.message),
          this.detail ? h('div', {staticClass: 'u-alert-detail'}, [this.detail]) : null
        ]),
        this.actions && this.actions.length
          ? h('div', {
            staticClass: 'u-alert-actions col-auto gutter-xs column flex-center'
          },
          this.actions.map(action =>
            h('div', {staticClass: 'full-width'}, [
              h(UBtn, {
                staticClass: 'full-width',
                props: {
                  flat: true,
                  dense: true,
                  align: 'left',
                  icon: action.icon,
                  label: action.closeBtn === true
                    ? (typeof action.label === 'string' ? action.label : this.$uloc.i18n.label.close) // TODO: verificar necessidade de $uloc.i18n
                    : action.label
                },
                on: {
                  click: () => action.handler()
                }
              })
            ])
          ))
          : null
      ])
    ])
  }
}
