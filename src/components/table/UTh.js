import UIcon from '../icon/UIcon.js'

export default {
  name: 'UTh',
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
    const
      name = this.$vnode.key,
      child = [].concat(this.$slots.default)

    if (name) {
      col = this.props.colsMap[name]
      if (!col) { return }
    }
    else {
      col = this.props.col
    }

    if (col.sortable) {
      const action = col.align === 'right'
        ? 'unshift'
        : 'push'

      child[action](
        h(UIcon, {
          props: { name: this.$uloc.icon.table.arrowUp },
          staticClass: col.__iconClass
        })
      )
    }

    return h('th', {
      'class': [col.__thClass, {
        'u-table-col-auto-width': this.autoWidth
      }],
      on: col.sortable
        ? { click: () => { this.props.sort(col) } }
        : null
    }, child)
  }
}
