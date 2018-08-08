export default {
  name: 'UTd',
  props: {
    props: Object,
    autoWidth: Boolean
  },
  render (h) {
    if (!this.props) {
      return h('td', {
        'class': { 'u-table-col-auto-width': this.autoWidth }
      }, this.$slots.default)
    }

    let col
    const name = this.$vnode.key

    if (name) {
      col = this.props.colsMap[name]
      if (!col) { return }
    }
    else {
      col = this.props.col
    }

    return h('td', {
      'class': [col.__tdClass, {
        'u-table-col-auto-width': this.autoWidth
      }]
    }, this.$slots.default)
  }
}
