export default {
  name: 'UModalLayout',
  inject: {
    __qmodal: {
      default () {
        console.error('UModalLayout needs to be child of UModal')
      }
    }
  },
  props: {
    headerStyle: [String, Object, Array],
    headerClass: [String, Object, Array],

    contentStyle: [String, Object, Array],
    contentClass: [String, Object, Array],

    footerStyle: [String, Object, Array],
    footerClass: [String, Object, Array]
  },
  watch: {
    __qmodal (newModal, oldModal) {
      oldModal && oldModal.unregister(this)
      newModal && newModal.register(this)
    }
  },
  mounted () {
    this.__qmodal && this.__qmodal.register(this)
  },
  beforeDestroy () {
    this.__qmodal && this.__qmodal.unregister(this)
  },
  render (h) {
    const child = []

    if (this.$slots.header || (process.env.THEME !== 'ios' && this.$slots.navigation)) {
      child.push(h('div', {
        staticClass: 'u-layout-header',
        style: this.headerStyle,
        'class': this.headerClass
      }, [
        this.$slots.header,
        process.env.THEME !== 'ios' ? this.$slots.navigation : null
      ]))
    }

    child.push(h('div', {
      staticClass: 'u-modal-layout-content col scroll',
      style: this.contentStyle,
      'class': this.contentClass
    }, this.$slots.default))

    if (this.$slots.footer || (process.env.THEME === 'ios' && this.$slots.navigation)) {
      child.push(h('div', {
        staticClass: 'u-layout-footer',
        style: this.footerStyle,
        'class': this.footerClass
      }, [
        this.$slots.footer,
        process.env.THEME === 'ios' ? this.$slots.navigation : null
      ]))
    }

    return h('div', {
      staticClass: 'u-modal-layout col column no-wrap'
    }, child)
  }
}
