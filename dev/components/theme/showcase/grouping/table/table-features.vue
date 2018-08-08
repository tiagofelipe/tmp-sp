<template>
  <u-page padding class="docs-table bg-white">
    <p class="caption">Basic example</p>
    <u-table
      title="Table Title"
      :data="tableData"
      :columns="columns"
      row-key="name"
    />

    <div class="caption" style="margin: 20px 0 16px">
      Grid mode (v0.17+) - click on items.
      <br class="desktop-hide">
      <span class="desktop-hide">Best viewed on a desktop view.</span>
    </div>
    <u-table
      grid
      hide-header
      :data="tableData"
      :columns="columns"
      :filter="filter"
      :selection="selection"
      :selected.sync="selected"
      :visible-columns="visibleColumns"
      row-key="name"
    >
      <template slot="top-right" slot-scope="props">
        <u-search hide-underline clearable v-model="filter" />
      </template>

      <div
        slot="item"
        slot-scope="props"
        class="u-pa-xs col-xs-12 col-sm-6 col-md-4 transition-generic"
        :style="props.selected ? 'transform: scale(0.95);' : ''"
      >
        <u-card
          class="transition-generic cursor-pointer"
          :class="props.selected ? 'bg-grey-2' : ''"
          @click.native="props.selected = !props.selected"
        >
          <u-card-title class="relative-position">
            {{ props.row.name }}
          </u-card-title>
          <u-card-separator />
          <u-card-main class="u-pa-none">
            <u-list no-border>
              <u-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <u-item-main>
                  <u-item-tile label>{{ col.label }}</u-item-tile>
                </u-item-main>
                <u-item-side right>
                  <u-item-tile>{{ col.value }}</u-item-tile>
                </u-item-side>
              </u-item>
            </u-list>
          </u-card-main>
        </u-card>
      </div>
    </u-table>

    <p class="caption">Force dense mode (see on wide windows)</p>
    <u-table
      dense
      title="Table Title"
      :data="tableData"
      :columns="columns"
      row-key="name"
    />

    <p class="caption">Filter, Column selection, Separators, Toggle fullscreen</p>
    <u-table
      :data="tableData"
      :columns="columns"
      :filter="filter"
      :visible-columns="visibleColumns"
      :separator="separator"
      row-key="name"
      color="secondary"
    >
      <template slot="top-left" slot-scope="props">
        <u-search
          hide-underline
          color="secondary"
          v-model="filter"
          class="col-6"
        />
      </template>
      <template slot="top-right" slot-scope="props">
        <u-table-columns
          color="secondary"
          class="m-r-sm"
          v-model="visibleColumns"
          :columns="columns"
        />
        <u-select
          color="secondary"
          v-model="separator"
          :options="[
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Cell', value: 'cell' },
            { label: 'None', value: 'none' }
          ]"
          hide-underline
        />
        <u-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>
    </u-table>

    <p class="caption">Row selection, Extra top/bottom rows, Loading state</p>
    <u-table
      :data="tableData"
      :columns="columns"
      :selection="selection"
      :selected.sync="selected"
      :loading="loading"
      :dark="dark"
      row-key="name"
      color="secondary"
      :class="tableClass"
    >
      <u-tr slot="top-row" slot-scope="props">
        <u-td colspan="100%">
          <strong>Extra top row</strong>
        </u-td>
      </u-tr>

      <u-tr slot="bottom-row" slot-scope="props">
        <u-td colspan="100%">
          <strong>Extra bottom row</strong>
        </u-td>
      </u-tr>

      <template slot="top-left" slot-scope="props">
        <u-select
          v-model="selection"
          stack-label="Selection"
          hide-underline
          :options="[
            { label: 'Single', value: 'single' },
            { label: 'Multiple', value: 'multiple' },
            { label: 'None', value: 'none' }
          ]"
          color="secondary"
          :dark="dark"
          style="min-width: 100px"
        />
      </template>
      <div slot="top-right" slot-scope="props" class="column">
        <u-toggle
          v-model="loading"
          label="Loading state"
          color="secondary"
          :dark="dark"
          class="m-b-sm"
        />
        <u-toggle
          v-model="dark"
          label="On dark background"
          color="secondary"
          :dark="dark"
        />
      </div>
    </u-table>

    <p class="caption">Controlling pagination, custom controls & watching for page navigation</p>
    <u-table
      :data="tableData"
      :columns="columns"
      :pagination.sync="paginationControl"
      row-key="name"
      color="primary"
    >
      <div slot="pagination" slot-scope="props" class="row flex-center u-py-sm">
        <u-btn
          round dense size="sm" icon="undo" color="secondary" class="m-r-sm"
          :disable="props.isFirstPage"
          @click="props.prevPage"
        />
        <div class="m-r-sm" style="font-size: small">Page {{ props.pagination.page }} / {{ props.pagesNumber }}</div>
        <u-btn
          round dense size="sm" icon="redo" color="secondary"
          :disable="props.isLastPage"
          @click="props.nextPage"
        />
      </div>
    </u-table>

    <p class="caption">Row selection actions</p>
    <u-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedSecond"
      row-key="name"
      color="secondary"
      title="Select some rows"
    >
      <template slot="top-selection" slot-scope="props">
        <u-btn color="secondary" flat label="Action 1" class="m-r-sm" />
        <u-btn color="secondary" flat label="Action 2" />
        <div class="col" />
        <u-btn color="negative" flat round icon="delete" @click="deleteRow" />
      </template>
    </u-table>

    <p class="caption">Hide header & bottom</p>
    <u-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="primary"
      hide-header
      hide-bottom
    />
  </u-page>
</template>

<script>
  import tableData from '../../../sample-data/table-data'

export default {
  data () {
    return {
      tableData,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],

      filter: '',
      visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'],
      separator: 'horizontal',
      selection: 'multiple',
      selected: [
        // initial selection
        { name: 'Ice cream sandwich' }
      ],
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 3, page: 1 },
      loading: false,
      dark: true,
      selectedSecond: [
        { name: 'Eclair' }
      ]
    }
  },
  watch: {
    'paginationControl.page' (page) {
      this.$uloc.notify({
        color: 'secondary',
        message: `Navigated to page ${page}`,
        actions: page < 4
          ? [{
            label: 'Go to last page',
            handler: () => {
              this.paginationControl.page = 4
            }
          }]
          : null
      })
    }
  },
  computed: {
    tableClass () {
      if (this.dark) {
        return 'bg-black'
      }
    }
  },
  methods: {
    deleteRow () {
      this.$uloc.notify({
        color: 'secondary',
        icon: 'delete',
        message: `Will delete the selected row${this.selectedSecond.length > 1 ? 's' : ''} later, ok?`
      })
    }
  }
}
</script>
