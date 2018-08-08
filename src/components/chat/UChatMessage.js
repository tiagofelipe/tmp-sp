export default {
  name: 'UChatMessage',
  props: {
    sent: Boolean,
    label: String,
    bgColor: String,
    textColor: String,
    name: String,
    avatar: String,
    text: Array,
    stamp: String,
    size: String
  },
  computed: {
    textClass () {
      if (this.textColor) {
        return `text-${this.textColor}`
      }
    },
    messageClass () {
      if (this.bgColor) {
        return `bg-${this.bgColor}`
      }
    },
    sizeClass () {
      if (this.size) {
        return `col-${this.size}`
      }
    },
    classes () {
      return {
        'u-message-sent': this.sent,
        'u-message-received': !this.sent
      }
    }
  },
  methods: {
    __getText (h) {
      return this.text.map((msg, index) => h('div', {
        staticClass: 'u-message-text',
        'class': this.messageClass
      }, [
        h('span', {
          staticClass: 'u-message-text-content',
          'class': this.textClass
        }, [
          h('div', { domProps: { innerHTML: msg } }),
          this.stamp
            ? h('div', {
              staticClass: 'u-message-stamp',
              domProps: { innerHTML: this.stamp }
            })
            : null
        ])
      ]))
    },
    __getMessage (h) {
      return h('div', {
        staticClass: 'u-message-text',
        'class': this.messageClass
      }, [
        h('span', {
          staticClass: 'u-message-text-content',
          'class': this.textClass
        }, [
          this.$slots.default,
          this.stamp
            ? h('div', {
              staticClass: 'u-message-stamp',
              domProps: { innerHTML: this.stamp }
            })
            : null
        ])
      ])
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'u-message',
      'class': this.classes
    }, [
      this.label
        ? h('div', {
          staticClass: 'u-message-label text-center',
          domProps: { innerHTML: this.label }
        })
        : null,

      h('div', {
        staticClass: 'u-message-container row items-end no-wrap'
      }, [
        this.$slots.avatar || (
          this.avatar
            ? h('img', {
              staticClass: 'u-message-avatar',
              attrs: { src: this.avatar }
            })
            : null
        ),

        h('div', { 'class': this.sizeClass }, [
          this.name
            ? h('div', {
              staticClass: 'u-message-name',
              domProps: { innerHTML: this.name }
            })
            : null,

          this.text ? this.__getText(h) : null,
          this.$slots.default ? this.__getMessage(h) : null
        ])
      ])
    ])
  }
}
