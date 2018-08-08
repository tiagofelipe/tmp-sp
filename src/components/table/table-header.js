import UProgress from '../progress/UProgress.js'
import UCheckbox from '../checkbox/UCheckbox.js'
import UTh from './UTh.js'

export default {
  methods: {
    getTableHeader (h) {
      const child = [ this.getTableHeaderRow(h) ]

      if (this.loading) {
        child.push(h('tr', { staticClass: 'u-table-progress animate-fade' }, [
          h('td', { attrs: {colspan: '100%'} }, [
            h(UProgress, {
              props: {
                color: this.color,
                indeterminate: true,
                height: '2px'
              }
            })
          ])
        ]))
      }

      return h('thead', child)
    },
    getTableHeaderRow (h) {
      const
        header = this.$scopedSlots.header,
        headerCell = this.$scopedSlots['header-cell']

      if (header) {
        return header(this.addTableHeaderRowMeta({header: true, cols: this.computedCols, sort: this.sort, colsMap: this.computedColsMap}))
      }

      let mapFn

      if (headerCell) {
        mapFn = col => headerCell({col, cols: this.computedCols, sort: this.sort, colsMap: this.computedColsMap})
      }
      else {
        mapFn = col => h(UTh, {
          key: col.name,
          props: {
            props: {
              col,
              cols: this.computedCols,
              sort: this.sort,
              colsMap: this.computedColsMap
            }
          }
        }, col.label)
      }
      const child = this.computedCols.map(mapFn)

      if (this.singleSelection && !this.grid) {
        child.unshift(h('th', { staticClass: 'u-table-col-auto-width' }, [' ']))
      }
      else if (this.multipleSelection) {
        child.unshift(h('th', { staticClass: 'u-table-col-auto-width' }, [
          h(UCheckbox, {
            props: {
              color: this.color,
              value: this.someRowsSelected ? null : this.allRowsSelected,
              dark: this.dark
            },
            on: {
              input: val => {
                if (this.someRowsSelected) {
                  val = false
                }
                this.__updateSelection(
                  this.computedRows.map(row => row[this.rowKey]),
                  this.computedRows,
                  val
                )
              }
            }
          })
        ]))
      }

      return h('tr', child)
    },
    addTableHeaderRowMeta (data) {
      if (this.multipleSelection) {
        Object.defineProperty(data, 'selected', {
          get: () => this.someRowsSelected ? 'some' : this.allRowsSelected,
          set: val => {
            if (this.someRowsSelected) {
              val = false
            }
            this.__updateSelection(
              this.computedRows.map(row => row[this.rowKey]),
              this.computedRows,
              val
            )
          }
        })
        data.partialSelected = this.someRowsSelected
        data.multipleSelect = true
      }

      return data
    }
  }
}
