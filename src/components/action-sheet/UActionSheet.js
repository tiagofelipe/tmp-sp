import UModal from '../modal/UModal.js'
import { UIcon } from '../icon'
import UList from '../list/UList.js'
import UItem from '../list/UItem.js'
import UItemSide from '../list/UItemSide.js'
import UItemMain from '../list/UItemMain.js'
import UItemSeparator from '../list/UItemSeparator.js'
import { getEventKey } from '../../utils/event.js'

export default {
  name: 'UActionSheet',
  props: {
    value: Boolean,
    title: String,
    grid: Boolean,
    actions: Array,
    dismissLabel: String
  },
  computed: {
    contentCss () {
      if (process.env.THEME === 'ios') {
        return {backgroundColor: 'transparent'}
      }
    }
  },
  render (h) {
    let
      child = [],
      title = this.$slots.title || this.title

    if (title) {
      child.push(
        h('div', {
          staticClass: 'u-actionsheet-title column justify-center'
        }, [ title ])
      )
    }

    child.push(
      h(
        'div',
        { staticClass: 'u-actionsheet-body scroll' },
        this.actions
          ? [
            this.grid
              ? h('div', { staticClass: 'u-actionsheet-grid row wrap items-center justify-between' }, this.__getActions(h))
              : h(UList, { staticClass: 'no-border', props: { link: true } }, this.__getActions(h))
          ]
          : this.$slots.default
      )
    )

    if (process.env.THEME === 'ios') {
      child = [
        h('div', { staticClass: 'u-actionsheet' }, child),
        h('div', { staticClass: 'u-actionsheet' }, [
          h(UItem, {
            props: {
              link: true
            },
            attrs: {
              tabindex: 0
            },
            nativeOn: {
              click: this.__onCancel,
              keyup: this.__onKeyCancel
            }
          }, [
            h(UItemMain, { staticClass: 'text-center text-primary' }, [
              this.dismissLabel || this.$uloc.i18n.label.cancel
            ])
          ])
        ])
      ]
    }

    return h(UModal, {
      ref: 'modal',
      props: {
        value: this.value,
        position: 'bottom',
        contentCss: this.contentCss
      },
      on: {
        input: val => {
          this.$emit('input', val)
        },
        show: () => {
          this.$emit('show')
        },
        hide: () => {
          this.$emit('hide')
        },
        dismiss: () => {
          this.$emit('cancel')
        },
        'escape-key': () => {
          this.$emit('escape-key')
        }
      }
    }, child)
  },
  methods: {
    show () {
      return this.$refs.modal.show()
    },
    hide () {
      return this.$refs.modal ? this.$refs.modal.hide() : Promise.resolve()
    },
    __getActions (h) {
      return this.actions.map(action => action.label
        ? h(this.grid ? 'div' : UItem, {
          staticClass: this.grid
            ? 'u-actionsheet-grid-item cursor-pointer relative-position column inline flex-center'
            : null,
          'class': action.classes,
          attrs: {
            tabindex: 0
          },
          [this.grid ? 'on' : 'nativeOn']: {
            click: () => this.__onOk(action),
            keyup: e => {
              if (getEventKey(e) === /* Enter */ 13) {
                this.__onOk(action)
              }
            }
          }
        }, this.grid
          ? [
            action.icon ? h(UIcon, { props: { name: action.icon, color: action.color } }) : null,
            action.avatar ? h('img', { domProps: { src: action.avatar }, staticClass: 'avatar' }) : null,
            h('span', [ action.label ])
          ]
          : [
            h(UItemSide, { props: { icon: action.icon, color: action.color, avatar: action.avatar } }),
            h(UItemMain, { props: { inset: true, label: action.label } })
          ]
        )
        : h(UItemSeparator, { staticClass: 'col-12' })
      )
    },
    __onOk (action) {
      this.hide().then(() => {
        if (typeof action.handler === 'function') {
          action.handler()
        }
        this.$emit('ok', action)
      })
    },
    __onCancel () {
      this.hide().then(() => {
        this.$emit('cancel')
      })
    },
    __onKeyCancel (e) {
      if (getEventKey(e) === /* Enter */ 13) {
        this.__onCancel()
      }
    }
  }
}
