<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        to switch between fullscreen mode and default mode.
      </p>

      <p>
        <u-btn
          color="secondary"
          @click="toggleFullscreen()"
          :icon="$uloc.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :label="$uloc.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
        />
      </p>

      <p class="caption">
        On some phones this will have little effect:
      </p>
      <ul class="light-paragraph">
        <li>
          For example, on Samsung S4, when App goes into fullscreen, the top bar
          will slide up but still remain on screen.
        </li>
        <li>
          On Nexus phones, on the other hand, like Nexus 5, Android navigation
          buttons and top bar dissapear completely.
        </li>
      </ul>
    </div>
  </u-page>
</template>

<script>
export default {
  methods: {
    toggleFullscreen () {
      this.$uloc.fullscreen.toggle()
    }
  }
}
</script>
