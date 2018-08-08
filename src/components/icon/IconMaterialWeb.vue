<script>
  export default {
    name: 'u-ico-material-web',
    props: [
      'name',
      'size',
      'tag'
    ],
    computed: {
      content () {
        return this.$props.name ? this.$props.name.replace(/ /g, '_') : ''
      },
    },
    render (h) {
      let props = JSON.parse(JSON.stringify(this.$props))
      let name = props.name
      let tag = props.tag
      delete props.name
      delete props.size
      delete props.type
      delete props.tag
      return h(
        !tag ? 'i' : tag, {attrs: props, 'class': 'material-icons'}, [this.content, this.$slots.default]
      )
    }
  }
</script>
