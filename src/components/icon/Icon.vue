<!-- borrowed from Tiago! -->
<script>
  import IconLibrary from './IconLibrary'

  export default {
    functional: true,
    name: 'u-icon',
    props: [
      'name',
      'type', // Default (Default Font for Project), Material, FontAwesome...
      'size',
      'color',
      'style',
      'extraClass',
      'extraStyle',
      'tag'
    ],
    render: function (h, context) {
      function element () {
        var type = context.props.type
        if (!type) {
          // Default IconLibrary
          type = 'default'
        }
        var library = IconLibrary.get(type)
        if (!library) {
          throw Error('Icon Library \'' + type + '\' not found')
        }
        var element = library.component
        return element
      }

      let sclass = []
      context.data.staticClass && sclass.push(context.data.staticClass)
      context.data.class && sclass.push(context.data.class)
      let sstyle = context.data.staticStyle ? context.data.staticStyle : ''
      let data = Object.assign({}, context.data.attrs, context.data.props, context.props, {'aria-hidden': true}) // TODO: data.props new? data.attrs is valid?
      context.props.color && sclass.push(`text-${context.props.color}`)
      return h(
        element(), {
          attrs: data,
          'class': [...sclass, 'app-icon u-icon', context.props.extraClass || null],
          'style': [sstyle || null, context.data.style || null, context.props.extraStyle || null],
          nativeOn: context.data.nativeOn
        }, context.children
      )
    }
  }
</script>
