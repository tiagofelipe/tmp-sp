import AlignMixin from '../../mixins/align.js'

const sizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
  form: 12.446,
  'form-label': 17.11,
  'form-hide-underline': 9.335,
  'form-label-hide-underline': 14,
  'form-inverted': 15.555,
  'form-label-inverted': 20.22
}

export default {
  mixins: [AlignMixin],
  props: {
    type: String,
    loading: Boolean,
    disable: Boolean,
    label: [Number, String],
    noCaps: Boolean,
    noWrap: Boolean,
    icon: String,
    iconType: String,
    iconStyle: String,
    iconRight: String,
    iconRightType: String,
    iconRightStyle: String,
    round: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    color: String,
    textColor: String,
    glossy: Boolean,
    dense: Boolean,
    tabindex: Number,
    to: [Object, String],
    replace: Boolean
  },
  computed: {
    style () {
      if (this.size && !this.fab && !this.fabMini) {
        return {
          fontSize: this.size in sizes ? `${sizes[this.size]}px` : this.size
        }
      }
    },
    isRectangle () {
      return !this.isRound
    },
    isRound () {
      return this.round || this.fab || this.fabMini
    },
    shape () {
      return `u-btn-${this.isRound ? 'round' : 'rectangle'}`
    },
    isDisabled () {
      return this.disable || this.loading
    },
    computedTabIndex () {
      return this.isDisabled ? -1 : this.tabindex || 0
    },
    isLink () {
      return this.type === 'a' || this.to !== void 0
    },
    attrs () {
      const att = { tabindex: this.computedTabIndex }
      if (this.type !== 'a') {
        att.type = this.type || 'button'
      }
      if (this.to !== void 0) {
        att.href = this.$router.resolve(this.to).href
      }
      return att
    },
    classes () {
      const cls = [ this.shape ]

      if (this.fab) {
        cls.push('u-btn-fab')
      }
      else if (this.fabMini) {
        cls.push('u-btn-fab-mini')
      }

      if (this.flat) {
        cls.push('u-btn-flat')
      }
      else if (this.outline) {
        cls.push('u-btn-outline')
      }
      else if (this.push) {
        cls.push('u-btn-push')
      }

      if (this.isDisabled) {
        cls.push('disabled')
      }
      else {
        cls.push('u-focusable u-hoverable')
        this.active && cls.push('active')
      }

      if (this.color) {
        if (this.flat || this.outline) {
          cls.push(`text-${this.textColor || this.color}`)
        }
        else {
          cls.push(`bg-${this.color}`)
          cls.push(`text-${this.textColor || 'white'}`)
        }
      }
      else if (this.textColor) {
        cls.push(`text-${this.textColor}`)
      }

      cls.push({
        'u-btn-no-uppercase': this.noCaps,
        'u-btn-rounded': this.rounded,
        'u-btn-dense': this.dense,
        'glossy': this.glossy
      })

      return cls
    },
    innerClasses () {
      const classes = [ this.alignClass ]
      this.noWrap && classes.push('no-wrap', 'text-no-wrap')
      this.repeating && classes.push('no-select')
      return classes
    }
  }
}
