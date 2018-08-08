import UIcon from '../icon/UIcon.js'

export default {
  name: 'UTimelineEntry',
  inject: {
    __timeline: {
      default () {
        console.error('UTimelineEntry needs to be child of UTimeline')
      }
    }
  },
  props: {
    heading: Boolean,
    tag: {
      type: String,
      default: 'h3'
    },
    side: {
      type: String,
      default: 'right',
      validator: v => ['left', 'right'].includes(v)
    },
    icon: String,
    color: String,
    title: String,
    subtitle: String
  },
  computed: {
    colorClass () {
      return `text-${this.color || this.__timeline.color}`
    },
    classes () {
      return [
        `u-timeline-entry-${this.side === 'left' ? 'left' : 'right'}`,
        this.icon ? 'u-timeline-entry-with-icon' : ''
      ]
    }
  },
  render (h) {
    if (this.heading) {
      return h('div', { staticClass: 'u-timeline-heading' }, [
        h('div'),
        h('div'),
        h(
          this.tag,
          { staticClass: 'u-timeline-heading-title' },
          this.$slots.default
        )
      ])
    }

    return h('li', {
      staticClass: `u-timeline-entry`,
      'class': this.classes
    }, [
      h('div', { staticClass: 'u-timeline-subtitle' }, [
        h('span', this.subtitle)
      ]),

      h('div', {
        staticClass: 'u-timeline-dot',
        'class': this.colorClass
      }, [
        this.icon
          ? h(UIcon, { props: { name: this.icon } })
          : null
      ]),

      h(
        'div',
        { staticClass: 'u-timeline-content' },
        [
          h('h6', { staticClass: 'u-timeline-title' }, [ this.title ])
        ].concat(this.$slots.default)
      )
    ])
  }
}
