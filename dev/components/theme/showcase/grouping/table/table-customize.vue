<template>
  <u-page padding class="docs-table bg-white">
    <p class="caption">Custom table top & bottom</p>
    <u-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="primary"
    >
      <div slot="top" slot-scope="props" class="row flex-center fit">
        <img src="~assets/uloc-logo-full.svg">
      </div>
      <div slot="bottom" slot-scope="props" class="row flex-center fit">
        <u-btn
          round dense icon="chevron_left" color="primary" class="m-r-md"
          :disable="props.isFirstPage"
          @click="props.prevPage"
        />
        <u-btn
          round dense icon="chevron_right" color="primary"
          :disable="props.isLastPage"
          @click="props.nextPage"
        />
      </div>
    </u-table>

    <p class="caption">Custom column cell</p>
    <u-table
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="secondary"
    >
      <!-- slot name syntax: body-cell-<column_name> -->
      <u-td slot="body-cell-desc" slot-scope="props" :props="props">
        <u-chip small color="secondary">{{ props.value }}</u-chip>
      </u-td>
    </u-table>

    <p class="caption">Custom rows</p>
    <u-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <u-tr slot="body" slot-scope="props" :props="props">
        <u-td key="desc" :props="props">
          <span class="text-italic">{{ props.row.name }}</span>
          <u-tooltip>I'd like to eat "{{ props.row.name }}"</u-tooltip>
        </u-td>
        <u-td key="calories" :props="props">
          <div class="row items-center justify-between no-wrap">
            <u-btn size="sm" round dense color="secondary" icon="remove" @click="props.row.calories--" class="m-r-xs" />
            <u-btn size="sm" round dense color="tertiary" icon="add" @click="props.row.calories++" class="m-r-sm" />
            <div>{{ props.row.calories }}</div>
          </div>
        </u-td>
        <u-td key="fat" :props="props">{{ props.row.fat }}</u-td>
        <u-td key="carbs" :props="props">
          <u-chip small square color="amber">{{ props.row.carbs }}</u-chip>
        </u-td>
        <u-td key="protein" :props="props">{{ props.row.protein }}</u-td>
        <u-td key="sodium" :props="props">{{ props.row.sodium }}</u-td>
        <u-td key="calcium" :props="props">{{ props.row.calcium }}</u-td>
        <u-td key="iron" :props="props">
          {{ props.row.iron }}
        </u-td>
      </u-tr>
    </u-table>

    <p class="caption">Alternative custom rows</p>
    <u-table
      :data="tableData"
      :columns="columns"
      title="Click on a row"
      dark
      class="bg-black"
      color="amber"
      row-key="name"
    >
      <u-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <u-td v-for="col in props.cols" :key="col.name" :props="props">
          # {{ col.value }} #
        </u-td>
      </u-tr>
    </u-table>

    <p class="caption">Custom header (has tooltips)</p>
    <u-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <tr slot="header" slot-scope="props">
        <u-th key="desc" :props="props">
          Dessert
          <u-tooltip>Pick a desert</u-tooltip>
        </u-th>
        <u-th key="calories" :props="props">
          Calories
          <u-tooltip>These are the calories</u-tooltip>
        </u-th>
        <u-th key="fat" :props="props">
          Fat
          <u-tooltip>This is the fat</u-tooltip>
        </u-th>
        <u-th key="carbs" :props="props">
          Carbs
          <u-tooltip>These are the carbohydrates</u-tooltip>
        </u-th>
        <u-th key="protein" :props="props">
          Protein
          <u-tooltip>These are the proteins</u-tooltip>
        </u-th>
        <u-th key="sodium" :props="props">
          Sodium
          <u-tooltip>This is the sodium</u-tooltip>
        </u-th>
        <u-th key="calcium" :props="props">
          Calcium
          <u-tooltip>This is the calcium</u-tooltip>
        </u-th>
        <u-th key="iron" :props="props">
          Iron
          <u-tooltip>This is the iron</u-tooltip>
        </u-th>
      </tr>
    </u-table>

    <p class="caption">Alternative custom header</p>
    <u-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <u-tr slot="header" slot-scope="props" :props="props">
        <u-th v-for="col in props.cols" :key="col.name" :props="props">
          # {{ col.label }} #
        </u-th>
      </u-tr>
    </u-table>

    <p class="caption">Custom header & rows with selection & expandable rows</p>
    <u-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selected"
      row-key="name"
    >
      <u-tr slot="header" slot-scope="props">
        <u-th auto-width>
          <u-checkbox
            v-if="props.multipleSelect"
            v-model="props.selected"
            indeterminate-value="some"
          />
        </u-th>
        <u-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </u-th>
      </u-tr>

      <template slot="body" slot-scope="props">
        <u-tr :props="props">
          <u-td auto-width>
            <u-checkbox color="primary" v-model="props.selected" />
          </u-td>
          <u-td key="desc" :props="props">
            <u-checkbox color="primary" v-model="props.expand" checked-icon="remove" unchecked-icon="add" class="m-r-md" />
            {{ props.row.name }}
          </u-td>
          <u-td key="calories" :props="props">{{ props.row.calories }}</u-td>
          <u-td key="fat" :props="props">{{ props.row.fat }}</u-td>
          <u-td key="carbs" :props="props">{{ props.row.carbs }}</u-td>
          <u-td key="protein" :props="props">{{ props.row.protein }}</u-td>
          <u-td key="sodium" :props="props">{{ props.row.sodium }}</u-td>
          <u-td key="calcium" :props="props">{{ props.row.calcium }}</u-td>
          <u-td key="iron" :props="props">
            <u-chip small square color="amber">{{ props.row.iron }}</u-chip>
          </u-td>
        </u-tr>
        <u-tr v-show="props.expand" :props="props">
          <u-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </u-td>
        </u-tr>
      </template>
    </u-table>
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

      selected: []
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
    },
    rowClick (row) {
      this.$uloc.notify({
        color: 'primary',
        icon: 'local_dining',
        message: `Hmm, are you sure? It has ${row.calories} calories.`,
        actions: [{
          label: 'Yes, eat!',
          handler: () => {
            this.$uloc.notify({ color: 'positive', icon: 'done', message: 'Yummy. Thanks! Now one more.' })
          }
        }]
      })
    }
  }
}
</script>
