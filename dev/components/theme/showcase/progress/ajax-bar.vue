<template>
  <u-page padding class="row justify-center">
    <u-ajax-bar ref="bar" :position="position" :reverse="reverse" :size="computedSize" />
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Ajax Bar component captures Ajax calls automatically. This page here triggers events manually for demonstrating purposes only.</p>

      <u-card style="margin-top: 25px">
        <u-card-title class="bg-primary text-center">
          <u-btn push color="orange" @click="trigger()">Trigger Event</u-btn>
        </u-card-title>

        <p class="caption text-center">
          Try out some combinations for Ajax Bar.
          <br>Color is customizable too through 'color' prop.
        </p>
        <u-card-main>
          <u-field
            label="Position"
          >
            <div class="flex" style="margin: -5px">
              <div class="column group">
                <u-radio v-model="position" val="top" label="Top" />
                <u-radio v-model="position" val="bottom" label="Bottom" />
              </div>

              <div class="column group">
                <u-radio v-model="position" val="right" label="Right" />
                <u-radio v-model="position" val="left" label="Left" />
              </div>
            </div>
          </u-field>

          <u-field
            label="Reverse?"
          >
            <u-checkbox v-model="reverse" label="Reverse Direction" />
          </u-field>

          <u-field label="Size">
            <u-slider v-model="size" :min="2" :max="20" label-always :label-value="`${size}px`" />
          </u-field>
        </u-card-main>
      </u-card>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      position: 'bottom',
      reverse: false,
      size: 4,

      timeouts: []
    }
  },
  computed: {
    computedSize () {
      return this.size + 'px'
    }
  },
  methods: {
    trigger () {
      this.$refs.bar.start()

      setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 5000 + 2000)
    }
  }
}
</script>
