<template>
  <u-page padding class="docs-carousel" style="max-width: 700px">
    <p class="caption">
      Basic Carousel. No controls. Just swipe between slides or
      use you mouse to drag slides to left or right.
    </p>
    <u-carousel class="text-white">
      <u-carousel-slide class="bg-primary">
        {{ lorem }}
      </u-carousel-slide>
      <u-carousel-slide class="bg-secondary">
        Slide 2
      </u-carousel-slide>
      <u-carousel-slide class="bg-tertiary">
        Slide 3
      </u-carousel-slide>
    </u-carousel>

    <p class="caption">Carousel with a base color, Arrows, Quick Navigation, and slides with images.</p>
    <u-carousel
      color="white"
      arrows
      quick-nav
      height="300px"
    >
      <u-carousel-slide img-src="assets/mountains.jpg" />
      <u-carousel-slide img-src="assets/parallax1.jpg" />
      <u-carousel-slide img-src="assets/parallax2.jpg" />
    </u-carousel>

    <p class="caption">Carousel with image slides and thumbnails</p>
    <u-toggle
      v-model="thumbnailsHorizontal"
      label="Horizontal thumbnails"
      class="m-b-md"
    />
    <u-carousel
      color="white"
      arrows
      height="300px"
      :thumbnails="[
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
      ]"
      :thumbnails-horizontal="thumbnailsHorizontal"
    >
      <u-carousel-slide img-src="assets/mountains.jpg" />
      <u-carousel-slide img-src="assets/parallax1.jpg" />
      <u-carousel-slide img-src="assets/parallax2.jpg" />
      <u-carousel-slide img-src="assets/mountains.jpg" />
      <u-carousel-slide img-src="assets/parallax1.jpg" />
      <u-carousel-slide img-src="assets/parallax2.jpg" />
      <u-carousel-slide img-src="assets/mountains.jpg" />
      <u-carousel-slide img-src="assets/parallax1.jpg" />
      <u-carousel-slide img-src="assets/parallax2.jpg" />
    </u-carousel>

    <p class="caption">Example creating custom captions for each slide.</p>
    <u-carousel
      color="white"
      arrows
      height="400px"
    >
      <u-carousel-slide img-src="assets/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="u-display-1">First stop</div>
          <div class="u-headline">Mountains</div>
        </div>
      </u-carousel-slide>
      <u-carousel-slide img-src="assets/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="u-display-1">Second stop</div>
          <div class="u-headline">Famous City</div>
        </div>
      </u-carousel-slide>
      <u-carousel-slide img-src="assets/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="u-display-1">Third stop</div>
          <div class="u-headline">Famous Bridge</div>
        </div>
      </u-carousel-slide>
    </u-carousel>

    <p class="caption">Carousel with infinite scroll, auto-play and custom Quick Navigation icon. Second slide has a Youtube video.</p>
    <u-carousel
      color="white"
      arrows
      quick-nav
      quick-nav-icon="favorite"
      infinite
      autoplay
      height="300px"
    >
      <u-carousel-slide img-src="assets/mountains.jpg" />
      <u-carousel-slide>
        <u-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </u-carousel-slide>
      <u-carousel-slide img-src="assets/parallax1.jpg" />
      <u-carousel-slide img-src="assets/parallax2.jpg" />
    </u-carousel>

    <p class="caption">
      Carousel with custom Quick Navigation and different type of slides content,
      including a vertical scrolling slide (third one).
    </p>
    <u-carousel
      color="white"
      quick-nav
      height="300px"
    >
      <u-carousel-slide class="text-white bg-primary row flex-center">
        <div class="u-display-2">First Slide</div>
      </u-carousel-slide>
      <u-carousel-slide class="text-white bg-secondary row flex-center">
        <div class="u-display-2">Second Slide</div>
      </u-carousel-slide>
      <u-carousel-slide class="text-white bg-primary">
        <div v-for="n in 7" :key="`custom-${n}`" class="u-ma-sm">
          {{ lorem }}
        </div>
      </u-carousel-slide>
      <u-carousel-slide img-src="assets/mountains.jpg" />
      <u-carousel-slide>
        <u-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </u-carousel-slide>
      <u-carousel-slide img-src="assets/parallax1.jpg" />
      <u-carousel-slide img-src="assets/parallax2.jpg" />

      <u-carousel-control slot="control-nav" slot-scope="carousel" :offset="[18, 52]">
        <u-btn
          @click="carousel.previous"
          :disable="!carousel.canGoToPrevious"
          color="amber" text-color="black"
          icon="keyboard_arrow_left"
          round dense
          class="m-r-small"
        />
        <u-btn
          @click="carousel.next"
          :disable="!carousel.canGoToNext"
          color="amber" text-color="black"
          icon="keyboard_arrow_right"
          round dense
        />
      </u-carousel-control>

      <u-btn
        slot="quick-nav"
        slot-scope="props"
        color="white"
        flat
        dense
        :label="`${props.slide + 1}`"
        @click="props.goToSlide()"
        :class="{inactive: !props.current}"
      />
    </u-carousel>

    <p class="caption">
      Carousel with a model (<u-chip small color="primary">{{ slide }}</u-chip>)
      and some custom controls: an autoplay button, a progressbar showing Carousel progress
      and a fullscreen toggle button.
      <br>
      Controlling from outside of Carousel:
      <u-btn
        rounded
        color="primary"
        @click="slide = 1"
        icon="arrow_downward"
        label="Navigate to second slide"
        class="m-l-sm"
      />
    </p>
    <u-carousel
      v-model="slide"
      color="amber"
      quick-nav
      infinite
      :autoplay="autoplay"
      height="400px"
    >
      <u-carousel-slide
        v-for="n in 7" :key="`car-${n}`"
        class="flex flex-center"
        :class="`bg-${colors[n % 5]}`"
      >
        <div class="text-center">
          <div class="u-display-3">Slide {{ n }}</div>
          <div>Slides can contain any content.</div>
        </div>
      </u-carousel-slide>

      <u-carousel-control
        slot="control"
        position="top-right"
        :offset="[18, 18]"
        class="text-white"
        style="background: rgba(0, 0, 0, .3); padding: 4px; border-radius: 4px"
      >
        <u-toggle dark color="amber" v-model="autoplay" label="Auto Play" />
      </u-carousel-control>

      <u-carousel-control
        slot="control-button"
        slot-scope="carousel"
        position="bottom-right"
        :offset="[18, 22]"
      >
        <u-btn
          round dense push
          color="amber"
          :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="carousel.toggleFullscreen()"
        />
      </u-carousel-control>

      <u-carousel-control slot="control-progress" slot-scope="carousel" position="bottom" :offset="[42, 100]">
        <u-progress :percentage="carousel.percentage" stripe color="amber" :animate="autoplay" />
      </u-carousel-control>
    </u-carousel>

    <p class="caption">
      Custom easing animation.
    </p>
    <u-carousel
      class="text-white"
      :easing="overshoot"
      infinite
      autoplay
      arrows
      color="white"
      height="250px"
    >
      <u-carousel-slide
        v-for="n in 7" :key="`anim-${n}`"
        class="flex flex-center"
        :class="`bg-${colors[n % 5]}`"
      >
        <div class="u-display-3">Slide {{ n }}</div>
      </u-carousel-slide>
    </u-carousel>

    <p class="caption">
      Launch Carousel on Fullscreen. Useful for creating Wizards.
    </p>
    <u-btn color="primary" class="glossy" @click="modal = true">
      Launch
    </u-btn>
    <u-modal v-model="modal" maximized>
      <u-carousel
        color="white"
        arrows
        quick-nav
        class="text-white full-height"
      >
        <u-carousel-slide
          v-for="n in 7" :key="`full-${n}`"
          class="flex flex-center"
          :class="`bg-${colors[n % 5]}`"
        >
          <div class="u-display-3">Step {{ n }}</div>
        </u-carousel-slide>

        <u-carousel-control
          slot="control-full"
          slot-scope="carousel"
          position="bottom-right"
          :offset="[18, 22]"
        >
          <u-btn
            rounded push
            color="amber"
            icon="close"
            label="Close me"
            @click="modal = false"
          />
        </u-carousel-control>
      </u-carousel>
    </u-modal>
  </u-page>
</template>

<script>
import { easing } from 'uloc'

export default {
  data: () => ({
    slide: 0,
    autoplay: true,
    lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum! Repellendus sed totam earum exercitationem, veritatis rerum? Aliquid.',
    overshoot: easing.overshoot,
    colors: [
      'primary',
      'secondary',
      'yellow',
      'red',
      'orange',
      'grey-2'
    ],
    modal: false,
    thumbnailsHorizontal: false
  })
}
</script>

<style lang="stylus">
@import '~uloc-src/assets/styl/variables'

.docs-carousel
  p.caption:not(:first-of-type)
    margin-top 38px
  .custom-caption
    text-align center
    padding 12px
    color $grey-4
    background rgba(0, 0, 0, .5)
</style>
