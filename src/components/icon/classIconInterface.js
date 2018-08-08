export default function (props, prefix) {
  props = props || ['name', 'size']
  prefix = prefix || null
  return {
    name: 'u-ico',
    props: [
      ...props
    ],
    render (h) {
      let attrs = this.$props
      let iconClass = attrs.name
      delete attrs.name
      return h(
        'i', {attrs: attrs, class: [prefix, iconClass]}, this.$slots.default
      )
    }
  }
}
