<template>
  <u-page padding class="card-examples row items-start">
    <u-card inline color="white" text-color="black" class="bigger u-ma-sm">
      <u-card-media>
        <img src="~assets/donuts.png">
      </u-card-media>
      <u-card-title class="relative-position">
        <u-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />

        <div class="ellipsis">Cafe Basilico</div>
        <u-rating slot="subtitle" v-model="stars" :max="5" />
        <div slot="right" class="row items-center">
          <u-icon name="place" /> 250 ft
        </div>
      </u-card-title>
      <u-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </u-card-main>
      <u-card-separator />
      <u-card-actions>
        <u-btn flat round icon="event" />
        <u-btn flat>5:30PM</u-btn>
        <u-btn flat>7:30PM</u-btn>
        <u-btn flat>9:00PM</u-btn>
        <u-btn flat color="primary">Reserve</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-main>
        {{ lorem }}
      </u-card-main>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
    </u-card>

    <u-card inline color="secondary u-ma-sm">
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
        <u-icon slot="right" name="alarm" />
      </u-card-title>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
      <u-card-separator />
      <u-card-actions>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
        <u-btn round flat icon="more_vert" slot="right">
          <u-popover>
            <u-list link class="no-border">
              <u-item v-close-overlay>
                <u-item-main label="Remove Card" />
              </u-item>
              <u-item v-close-overlay>
                <u-item-main label="Send Feedback" />
              </u-item>
              <u-item v-close-overlay>
                <u-item-main label="Share" />
              </u-item>
            </u-list>
          </u-popover>
        </u-btn>
      </u-card-title>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
      <u-card-separator />
      <u-card-actions>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-separator />
      <u-card-actions vertical>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-actions>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/mountains.jpg">
      </u-card-media>
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/parallax2.jpg">

        <u-card-title slot="overlay">
          Title
        </u-card-title>
      </u-card-media>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/parallax2.jpg">

        <u-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </u-card-title>
      </u-card-media>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media overlay-position="top">
        <img src="assets/parallax2.jpg">

        <u-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </u-card-title>
      </u-card-media>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media overlay-position="top">
        <img src="assets/parallax2.jpg">

        <u-card-title slot="overlay">
          <div slot="subtitle" class="text-right">Subtitle</div>
        </u-card-title>
      </u-card-media>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media overlay-position="full">
        <img src="assets/parallax2.jpg">

        <u-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </u-card-title>
      </u-card-media>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/parallax2.jpg">

        <u-card-title slot="overlay">
          Title
          <span slot="subtitle">Subtitle</span>
        </u-card-title>
      </u-card-media>
      <u-card-actions>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <u-parallax src="assets/parallax1.jpg" :height="150">
          <div slot="loading">Loading...</div>
        </u-parallax>
      </u-card-media>
      <u-card-title>
        Parallax
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-separator />
      <u-card-actions>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-item>
        <u-item-side avatar="assets/boy-avatar.png" />
        <u-item-main>
          <u-item-tile label>Title</u-item-tile>
          <u-item-tile sublabel>Subhead</u-item-tile>
        </u-item-main>
      </u-item>
      <u-card-media>
        <img src="assets/parallax2.jpg">
      </u-card-media>
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-actions>
        <u-btn flat>Action 1</u-btn>
        <u-btn flat>Action 2</u-btn>
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/parallax2.jpg">
      </u-card-media>
      <u-list>
        <u-item>
          <u-item-side>
            <u-item-tile color="primary" icon="local bar" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Bar XYZ</u-item-tile>
            <u-item-tile sublabel>Have a drink.</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile color="red" icon="local gas station" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Gas Station</u-item-tile>
            <u-item-tile sublabel>Fill your gas tank.</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile color="amber" icon="local movies" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Cinema XYZ</u-item-tile>
            <u-item-tile sublabel>Watch a movie.</u-item-tile>
          </u-item-main>
        </u-item>
      </u-list>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-title>
        Title
      </u-card-title>
      <u-list separator>
        <u-collapsible icon="explore" label="First">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </u-collapsible>

        <u-collapsible icon="perm_identity" label="Second">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </u-collapsible>

        <u-collapsible icon="shopping_cart" label="Third">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </u-collapsible>
      </u-list>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <u-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
      </u-card-media>
      <u-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
      </u-card-title>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-title>
        Title
      </u-card-title>
      <u-card-main>
        {{ lorem }}
      </u-card-main>
      <u-card-separator inset />
      <u-card-main>
        {{ lorem }}
      </u-card-main>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/mountains.jpg">
      </u-card-media>
      <u-card-actions align="around">
        <u-btn flat round color="red" icon="favorite" />
        <u-btn flat round color="faded" icon="bookmark" />
        <u-btn flat round color="primary" icon="share" />
      </u-card-actions>
    </u-card>

    <u-card inline color="white" text-color="black" class="u-ma-sm">
      <u-card-media>
        <img src="assets/mountains.jpg">
      </u-card-media>
      <u-card-title>
        Title
        <u-rating slot="subtitle" v-model="stars" :max="5" />
        <span slot="right" class="row items-center">
          <u-icon name="place" /> 20 miles
        </span>
      </u-card-title>
    </u-card>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      stars: 3,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="stylus">
.card-examples
  .u-card
    width 300px
  .bigger
    width 450px
    max-width 90vw
  @media (max-width $breakpoint-xs-max)
    .u-card
      width 100%
</style>
