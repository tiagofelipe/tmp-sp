<script>
  import fontawesome from '@fortawesome/fontawesome'
  import solid from '@fortawesome/fontawesome-pro-solid'
  import light from '@fortawesome/fontawesome-pro-light'
  import regular from '@fortawesome/fontawesome-pro-regular'
  import brands from '@fortawesome/fontawesome-free-brands'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  fontawesome.library.add(brands, solid, light, regular)
  export default {
    functional: true,
    props: [
      'border',
      'fixedWidth',
      'flip',
      'name',
      'mask',
      'listItem',
      'pull',
      'pulse',
      'rotation',
      'size',
      'spin',
      'transform',
      'symbol'
    ],
    render: function (h, context) {
      return h(
        FontAwesomeIcon, {attrs: context.props}, [this.$slots.default]
      )
    }
  }
</script>
