import UIcon from '../icon/UIcon'

export default {
  name: 'ULayoutHeaderTop',
  inject: {
    layout: {
      default () {
        console.error('ULayoutHeaderTop needs to be child of ULayout')
      }
    },
    header: {
      default () {
        console.error('ULayoutHeaderTop needs to be child of ULayoutHeader')
      }
    }
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  render (h) {
    return h('div', {
      staticClass: 'u-top-header'
    }, [
      this.$scopedSlots.header() || h('div', {
        staticClass: 'u-left-side'
      }, [
        this.$scopedSlots['drawer-button']() || h('a', {
          staticClass: 'ico-menu hidden-drawer-fixed',
          on: {
            click: this.layout.__openDrawer
          }
        }, [
          h(UIcon, {
            props: {
              name: 'menu'
            }
          })
        ]),
        this.$scopedSlots['header-title']() || h('a', {
          staticClass: 'u-app-name no-m-drawer-fixed no-select',
          attrs: {
            href: '/'
          }
        }, 'Uloc')
      ]),
      h('div', {
        staticClass: 'u-header-right-side'
      }, this.$scopedSlots['header-right-side']() || null)
    ])
  }
}
