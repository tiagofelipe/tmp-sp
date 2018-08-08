import UItem from '../list/UItem.js'
import UItemSide from '../list/UItemSide.js'
import UItemTile from '../list/UItemTile.js'
import UItemWrapper from '../list/UItemWrapper.js'
import USlideTransition from '../slide-transition/USlideTransition.js'
import ModelToggleMixin from '../../mixins/model-toggle.js'
import ItemMixin, { subItemProps } from '../../mixins/item.js'

const eventName = 'q:collapsible:close'

export default {
  name: 'UCollapsible',
  mixins: [
    ModelToggleMixin,
    ItemMixin,
    { props: subItemProps }
  ],
  modelToggle: {
    history: false
  },
  props: {
    disable: Boolean,
    popup: Boolean,
    indent: Boolean,
    group: String,
    iconToggle: Boolean,
    collapseIcon: String,
    opened: Boolean,

    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  computed: {
    classes () {
      return {
        'u-collapsible-opened': this.popup && this.showing,
        'u-collapsible-closed': this.popup && !this.showing,
        'u-collapsible-cursor-pointer': !this.iconToggle,
        'u-item-dark': this.dark,
        'u-item-separator': this.separator,
        'u-item-inset-separator': this.insetSeparator,
        disabled: this.disable
      }
    }
  },
  watch: {
    showing (val) {
      if (val && this.group) {
        this.$root.$emit(eventName, this)
      }
    }
  },
  methods: {
    __toggleItem () {
      if (!this.iconToggle) {
        this.toggle()
      }
    },
    __toggleIcon (e) {
      if (this.iconToggle) {
        e && e.stopPropagation()
        this.toggle()
      }
    },
    __eventHandler (comp) {
      if (this.group && this !== comp && comp.group === this.group) {
        this.hide()
      }
    },
    __getToggleSide (h, slot) {
      return [
        h(UItemTile, {
          slot: slot ? 'right' : undefined,
          staticClass: 'cursor-pointer transition-generic relative-position u-collapsible-toggle-icon',
          'class': {
            'rotate-180': this.showing,
            invisible: this.disable
          },
          nativeOn: {
            click: this.__toggleIcon
          },
          props: { icon: this.collapseIcon || this.$uloc.icon.collapsible.icon }
        })
      ]
    },
    __getItemProps (wrapper) {
      return {
        props: { cfg: this.$props },
        style: this.headerStyle,
        'class': this.headerClass,
        nativeOn: {
          click: this.__toggleItem
        }
      }
    }
  },
  created () {
    this.$root.$on(eventName, this.__eventHandler)
    if (this.opened || this.value) {
      this.show()
    }
  },
  beforeDestroy () {
    this.$root.$off(eventName, this.__eventHandler)
  },
  render (h) {
    return h(this.tag, {
      staticClass: 'u-collapsible u-item-division relative-position',
      'class': this.classes
    }, [
      h('div', {
        staticClass: 'u-collapsible-inner'
      }, [
        this.$slots.header
          ? h(UItem, this.__getItemProps(), [
            this.$slots.header,
            h(UItemSide, { props: { right: true }, staticClass: 'relative-position' }, this.__getToggleSide(h))
          ])
          : h(UItemWrapper, this.__getItemProps(true), this.__getToggleSide(h, true)),

        h(USlideTransition, [
          h('div', {
            directives: [{ name: 'show', value: this.showing }]
          }, [
            h('div', {
              staticClass: 'u-collapsible-sub-item relative-position',
              'class': { indent: this.indent }
            }, this.$slots.default)
          ])
        ])
      ])
    ])
  }
}
