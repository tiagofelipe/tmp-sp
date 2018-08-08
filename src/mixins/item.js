export function textStyle (n) {
  return n === void 0 || n < 2
    ? {}
    : {overflow: 'hidden', display: '-webkit-box', '-webkit-box-orient': 'vertical', '-webkit-line-clamp': n}
}

export const subItemProps = {
  icon: String,
  rightIcon: String,
  image: String,
  rightImage: String,
  avatar: String,
  rightAvatar: String,
  letter: String,
  rightLetter: String,
  label: String,
  sublabel: String,
  labelLines: [String, Number],
  sublabelLines: [String, Number]
}

export default {
  props: {
    dark: Boolean,

    link: Boolean,
    dense: Boolean,
    sparse: Boolean,
    separator: Boolean,
    insetSeparator: Boolean,
    multiline: Boolean,
    highlight: Boolean,

    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    itemClasses () {
      return {
        'u-item': true,
        'u-item-division': true,
        'relative-position': true,
        'u-item-dark': this.dark,
        'u-item-dense': this.dense,
        'u-item-sparse': this.sparse,
        'u-item-separator': this.separator,
        'u-item-inset-separator': this.insetSeparator,
        'u-item-multiline': this.multiline,
        'u-item-highlight': this.highlight,
        'u-item-link': this.to || this.link
      }
    }
  }
}
