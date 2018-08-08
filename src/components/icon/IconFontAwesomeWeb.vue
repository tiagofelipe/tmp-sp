<script>
  const getPrefix = function (t) {
    t = t || null
    if (!t) {
      return 'fas'
    }
    let type
    if (t === 'solid') {
      type = 'fas'
    } else if (t === 'regular') {
      type = 'far'
    } else if (t === 'light') {
      type = 'fal'
    } else if (t === 'brand') {
      type = 'fab'
    } else {
      throw Error('Font type \'' + t + '\' do not exists')
    }
    return type
  }

  export default {
    name: 'u-ico-font-awesome-web',
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
      'symbol',
      'iconStyle'
    ],
    render (h) {
      // [prefix, 'fa-' + iconClass, props.class || null]
      let props = this.$props
      let classGroup = []
      let type = props.iconStyle
      classGroup.push(getPrefix(type))
      classGroup.push('fa-' + props.name)
      if (typeof props.spin !== 'undefined' && props.spin !== null) {
        classGroup.push('fa-spin')
      }
      delete props.name
      delete props.size
      delete props.spin
      delete props.iconStyle
      return h(
        'i', {attrs: props, 'class': classGroup}, [this.$slots.default]
      )
    }
  }
</script>
