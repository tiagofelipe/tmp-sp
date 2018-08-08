export default {
  name: 'UList',
  props: {
    noBorder: Boolean,
    dark: Boolean,
    dense: Boolean,
    sparse: Boolean,
    striped: Boolean,
    stripedOdd: Boolean,
    separator: Boolean,
    insetSeparator: Boolean,
    multiline: Boolean,
    highlight: Boolean,
    link: Boolean
  },
  computed: {
    classes () {
      return {
        'no-border': this.noBorder,
        'u-list-dark': this.dark,
        'u-list-dense': this.dense,
        'u-list-sparse': this.sparse,
        'u-list-striped': this.striped,
        'u-list-striped-odd': this.stripedOdd,
        'u-list-separator': this.separator,
        'u-list-inset-separator': this.insetSeparator,
        'u-list-multiline': this.multiline,
        'u-list-highlight': this.highlight,
        'u-list-link': this.link
      }
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-list',
      'class': this.classes
    }, this.$slots.default)
  }
}
