import USelect from '../select/USelect.js'
import UBtn from '../button/UBtn.js'
import UIcon from '../icon/UIcon.js'

export default {
  computed: {
    navIcon () {
      const ico = [ this.$uloc.icon.table.prevPage, this.$uloc.icon.table.nextPage ]
      return this.$uloc.i18n.rtl ? ico.reverse() : ico
    }
  },
  methods: {
    getBottom (h) {
      if (this.hideBottom) {
        return
      }

      if (this.nothingToDisplay) {
        const message = this.filter
          ? this.noResultsLabel || this.$uloc.i18n.table.noResults
          : (this.loading ? this.loadingLabel || this.$uloc.i18n.table.loading : this.noDataLabel || this.$uloc.i18n.table.noData)

        return h('div', { staticClass: 'u-table-bottom row items-center u-table-nodata' }, [
          h(UIcon, {props: { name: this.$uloc.icon.table.warning }}),
          message
        ])
      }

      const bottom = this.$scopedSlots.bottom

      return h('div', {
        staticClass: 'u-table-bottom row items-center',
        'class': bottom ? null : 'justify-end'
      }, bottom ? [ bottom(this.marginalsProps) ] : this.getPaginationRow(h))
    },
    getPaginationRow (h) {
      const
        { rowsPerPage } = this.computedPagination,
        paginationLabel = this.paginationLabel || this.$uloc.i18n.table.pagination,
        paginationSlot = this.$scopedSlots.pagination

      return [
        h('div', { staticClass: 'u-table-control' }, [
          h('div', [
            this.hasSelectionMode && this.rowsSelectedNumber > 0
              ? (this.selectedRowsLabel || this.$uloc.i18n.table.selectedRecords)(this.rowsSelectedNumber)
              : ''
          ])
        ]),
        h('div', { staticClass: 'u-table-separator col' }),
        h('div', { staticClass: 'u-table-control' }, [
          h('span', { staticClass: 'u-table-bottom-item' }, [
            this.rowsPerPageLabel || this.$uloc.i18n.table.recordsPerPage
          ]),
          h(USelect, {
            staticClass: 'inline u-table-bottom-item',
            props: {
              color: this.color,
              value: rowsPerPage,
              options: this.computedRowsPerPageOptions,
              dark: this.dark,
              hideUnderline: true
            },
            on: {
              input: rowsPerPage => {
                this.setPagination({
                  page: 1,
                  rowsPerPage
                })
              }
            }
          })
        ]),
        h('div', { staticClass: 'u-table-control' }, [
          paginationSlot
            ? paginationSlot(this.marginalsProps)
            : [
              h('span', { staticClass: 'u-table-bottom-item' }, [
                rowsPerPage
                  ? paginationLabel(this.firstRowIndex + 1, Math.min(this.lastRowIndex, this.computedRowsNumber), this.computedRowsNumber)
                  : paginationLabel(1, this.computedRowsNumber, this.computedRowsNumber)
              ]),
              h(UBtn, {
                props: {
                  color: this.color,
                  round: true,
                  icon: this.navIcon[0],
                  dense: true,
                  flat: true,
                  disable: this.isFirstPage
                },
                on: { click: this.prevPage }
              }),
              h(UBtn, {
                props: {
                  color: this.color,
                  round: true,
                  icon: this.navIcon[1],
                  dense: true,
                  flat: true,
                  disable: this.isLastPage
                },
                on: { click: this.nextPage }
              })
            ]
        ])
      ]
    }
  }
}
