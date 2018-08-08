import BtnMixin from './btn-mixin.js'
import UIcon from '../icon/UIcon.js'
import UBtn from './UBtn.js'
import UBtnGroup from './UBtnGroup.js'
import UPopover from '../popover/UPopover.js'

export default {
  name: 'UBtnDropdown',
  mixins: [BtnMixin],
  props: {
    value: Boolean,
    split: Boolean,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    popoverAnchor: {
      type: String,
      default: 'bottom right'
    },
    popoverSelf: {
      type: String,
      default: 'top right'
    }
  },
  data () {
    return {
      showing: this.value
    }
  },
  watch: {
    value (val) {
      this.$refs.popover && this.$refs.popover[val ? 'show' : 'hide']()
    }
  },
  render (h) {
    const
      Popover = h(
        UPopover,
        {
          ref: 'popover',
          props: {
            disable: this.disable,
            fit: true,
            anchorClick: !this.split,
            anchor: this.popoverAnchor,
            self: this.popoverSelf
          },
          'class': this.contentClass,
          style: this.contentStyle,
          on: {
            show: e => {
              this.showing = true
              this.$emit('show', e)
              this.$emit('input', true)
            },
            hide: e => {
              this.showing = false
              this.$emit('hide', e)
              this.$emit('input', false)
            }
          }
        },
        this.$slots.default
      ),
      Icon = h(UIcon, {
        props: {
          name: this.$uloc.icon.input.dropdown
        },
        staticClass: 'transition-generic___no',
        'class': {
          'rotate-180': this.showing,
          'on-right': !this.split,
          'u-btn-dropdown-arrow': !this.split
        }
      }),
      Btn = h(UBtn, {
        props: Object.assign({}, this.$props, {
          iconRight: this.split ? this.iconRight : null
        }),
        'class': this.split ? 'u-btn-dropdown-current' : 'u-btn-dropdown u-btn-dropdown-simple',
        on: {
          click: e => {
            this.split && this.hide()
            if (!this.disable) {
              this.$emit('click', e)
            }
          }
        }
      }, this.split ? null : [ Icon, Popover ])

    if (!this.split) {
      return Btn
    }

    return h(UBtnGroup, {
      props: {
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push
      },
      staticClass: 'u-btn-dropdown u-btn-dropdown-split no-wrap u-btn-item'
    },
    [
      Btn,
      h(UBtn, {
        props: {
          disable: this.disable,
          outline: this.outline,
          flat: this.flat,
          rounded: this.rounded,
          push: this.push,
          size: this.size,
          color: this.color,
          textColor: this.textColor,
          dense: this.dense,
          glossy: this.glossy,
          noRipple: this.noRipple,
          waitForRipple: this.waitForRipple
        },
        staticClass: 'u-btn-dropdown-arrow',
        on: { click: () => { this.toggle() } }
      }, [ Icon ]),
      [ Popover ]
    ])
  },
  methods: {
    toggle () {
      return this.$refs.popover ? this.$refs.popover.toggle() : Promise.resolve()
    },
    show () {
      return this.$refs.popover ? this.$refs.popover.show() : Promise.resolve()
    },
    hide () {
      return this.$refs.popover ? this.$refs.popover.hide() : Promise.resolve()
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.value) {
        this.$refs.popover && this.$refs.popover.show()
      }
    })
  }
}
