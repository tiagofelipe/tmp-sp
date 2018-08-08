<template>
  <u-page padding class="docs-progress row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on progress bars to change their binded value.
        <span class="desktop-only">
          On a real mobile device the Progress bars
          are much thinner by default.
        </span>
      </p>

      <h5>Determinate State</h5>
      <u-btn small color="primary" @click="randomize">Change Model</u-btn>
      <u-progress :percentage="progress" />
      <u-progress :percentage="progress" color="positive" />
      <u-progress :percentage="progress" color="info" />
      <u-progress :percentage="progress" color="warning" />
      <u-progress :percentage="progress" color="secondary" />
      <u-progress :percentage="progress" color="tertiary" />
      <u-progress :percentage="progress" color="dark" />
      <u-progress :percentage="progress" color="negative" />

      <h5>Stripe</h5>
      <u-progress :percentage="progress" stripe />
      <u-progress :percentage="progress" stripe color="positive" />
      <u-progress :percentage="progress" stripe color="info" />
      <u-progress :percentage="progress" stripe color="warning" />

      <h5>Stripe and Animate</h5>
      <u-progress :percentage="progress" stripe animate color="secondary" />

      <h5>Buffering</h5>
      <u-btn small color="primary" @click="randomizeBuffer">Change Buffer Model</u-btn>
      <u-progress :percentage="progressBuffer" :buffer="buffer" />
      <u-progress :percentage="progressBuffer" stripe :buffer="buffer" />
      <u-progress :percentage="progressBuffer" stripe animate color="secondary" :buffer="buffer" />

      <h5>Indeterminate State</h5>
      <u-progress indeterminate />
      <u-progress indeterminate color="positive" />
      <u-progress indeterminate color="warning" />
      <u-progress indeterminate color="negative" />
      <u-progress indeterminate color="dark" />

      <h5>Specific Height</h5>
      <u-progress :percentage="progress" stripe animate style="height: 45px" />
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      progress: 67,
      progressBuffer: 41,
      buffer: 17
    }
  },
  methods: {
    randomize () {
      this.progress = Math.round(Math.random() * 100)
    },
    randomizeBuffer () {
      this.progressBuffer = Math.round(Math.random() * 51)
      this.buffer = Math.round(Math.random() * 47)
    }
  }
}
</script>

<style lang="stylus">
.docs-progress
  .u-btn + .u-progress
    margin-top 20px
  .u-progress + .u-progress
    margin-top 10px
</style>
