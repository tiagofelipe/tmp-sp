<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">"Slide" Transition</p>

      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on the Toggle below to see the transition in action.
      </p>
      <p>
        <u-toggle v-model="visible" label="Visible image" />
      </p>

      <u-slide-transition>
        <p v-show="visible" style="margin: 0; max-width: 500px">
          <img
            class="responsive"
            src="~assets/uloc.jpg"
          >
        </p>
      </u-slide-transition>
    </div>
  </u-page>
</template>

<script>
import {
  USlideTransition,
  UToggle
} from 'uloc'

export default {
  components: {
    USlideTransition,
    UToggle
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>
