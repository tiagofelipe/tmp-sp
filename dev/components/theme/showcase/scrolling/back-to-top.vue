<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Scroll down <u-icon style="font-size: 3rem" class="animate-bounce" name="keyboard_arrow_down" />
      </p>
      <p class="caption">
        A circular button is set to appear after scrolling 500px.
        <br>
        After another 500px another element will appear on the left.
      </p>

      <u-page-sticky position="bottom-right" :offset="[18, 18]">
        <u-btn
          color="primary"
          fab
          v-back-to-top.animate="{offset: 500, duration: 200}"
          class="animate-pop"
        >
          <u-icon name="keyboard_arrow_up" />
        </u-btn>
      </u-page-sticky>

      <u-page-sticky position="top-left" :offset="[0, 100]">
        <a
          v-back-to-top.animate="1000"
          class="animate-pop play-backtotop non-selectable shadow-2"

        >
          Back to top
        </a>
      </u-page-sticky>

      <p class="caption" v-for="n in 50" :key="n">Keep scrolling...</p>
    </div>
  </u-page>
</template>

<style lang="stylus">
@import '~uloc-src/assets/styl/variables'

.play-backtotop
  color white
  position fixed
  left 0
  top 30%
  padding 15px
  width 90px
  background-color $secondary
  border-radius 0 15px 15px 0
  &:hover
    color $grey-4
</style>
