<template>
  <u-page padding class="row justify-center">
    <div class="column flex-center" style="width: 500px; max-width: 90vw;">
      <div class="row group">
        <div>
          <u-btn round color="secondary" @click="showNotification('top-left')">
            <u-icon name="arrow_back" class="rotate-45" />
          </u-btn>
        </div>
        <div>
          <u-btn round color="tertiary" @click="showNotification('top')">
            <u-icon name="arrow_upward" />
          </u-btn>
        </div>
        <div>
          <u-btn round color="secondary" @click="showNotification('top-right')">
            <u-icon name="arrow_upward" class="rotate-45" />
          </u-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <u-btn round color="tertiary" @click="showNotification('left')">
            <u-icon name="arrow_back" />
          </u-btn>
        </div>
        <div>
          <u-btn round color="tertiary" @click="showNotification('center')">
            <u-icon name="fullscreen_exit" />
          </u-btn>
        </div>
        <div>
          <u-btn round color="tertiary" @click="showNotification('right')">
            <u-icon name="arrow_forward" />
          </u-btn>
        </div>
      </div>
      <div class="row group">
        <div>
          <u-btn round color="secondary" @click="showNotification('bottom-left')">
            <u-icon name="arrow_forward" class="rotate-135" />
          </u-btn>
        </div>
        <div>
          <u-btn round color="tertiary" @click="showNotification('bottom')">
            <u-icon name="arrow_downward" />
          </u-btn>
        </div>
        <div>
          <u-btn round color="secondary" @click="showNotification('bottom-right')">
            <u-icon name="arrow_forward" class="rotate-45" />
          </u-btn>
        </div>
      </div>
    </div>
  </u-page>
</template>

<script>
const alerts = [
  { color: 'negative', message: 'Woah! Danger! You are getting good at this!', icon: 'report_problem' },
  { color: 'pink', message: 'You need to know about this!', icon: 'warning' },
  { color: 'orange', textColor: 'black', message: 'Wow! Nice job!', icon: 'thumb_up' },
  { color: 'secondary', message: 'Uloc is cool! Right?', icon: 'tag_faces' },
  { color: 'tertiary', message: 'Jim just pinged you', avatar: 'assets/boy-avatar.png' }
]

export default {
  data () {
    return {
      visible: true,
      visible2: true
    }
  },
  methods: {
    showNotification (position) {
      const { color, textColor, icon, message, avatar } = alerts[ Math.floor(Math.random(5) * 10) % 5 ]

      this.$uloc.notify({
        color,
        textColor,
        icon,
        message,
        position,
        avatar,
        actions: Math.random() * 100 > 50
          ? [ { label: 'Reply', handler: () => console.log('Clicked on a notification handler') } ]
          : null,
        timeout: Math.random() * 5000 + 3000
      })
    }
  }
}
</script>
