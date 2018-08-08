import USelect from '../select/USelect.js'

export default {
  name: 'UTableColumns',
  props: {
    value: {
      type: Array,
      required: true
    },
    label: String,
    columns: {
      type: Array,
      required: true
    },
    color: String
  },
  computed: {
    computedOptions () {
      return this.columns.filter(col => !col.required).map(col => ({
        value: col.name,
        label: col.label
      }))
    }
  },
  render (h) {
    return h(USelect, {
      props: {
        multiple: true,
        toggle: true,
        value: this.value,
        options: this.computedOptions,
        displayValue: this.label || this.$uloc.i18n.table.columns,
        color: this.color,
        hideUnderline: true
      },
      on: {
        input: v => { this.$emit('input', v) },
        change: v => { this.$emit('change', v) }
      }
    })
  }
}
