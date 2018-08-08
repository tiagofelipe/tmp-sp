export default {
  name: 'UTabPane',
  inject: {
    data: {
      default () {
        console.error('UTabPane needs to be child of UTabs')
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    keepAlive: Boolean
  },
  data () {
    return {
      shown: false
    }
  },
  computed: {
    active () {
      return this.data.tabName === this.name
    }
  },
  render (h) {
    const node = h(
      'div',
      {
        staticClass: 'u-tab-pane',
        'class': { hidden: !this.active }
      },
      this.$slots.default
    )

    if (this.keepAlive) {
      if (!this.shown && !this.active) {
        return
      }
      this.shown = true
      return node
    }
    else {
      this.shown = this.active
      if (this.active) {
        return node
      }
    }
  }
}
