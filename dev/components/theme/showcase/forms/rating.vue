<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <div style="font-size: 2rem;">
        <u-rating v-model="ratingModel" :max="3" />
        <br>
        <u-rating color="primary" v-model="ratingModel" :max="5" icon="pets" />
        <br>
        <u-rating color="teal" v-model="ratingModel" :max="9" icon="thumb_up" />
      </div>
      <br>
      <u-rating size="3rem" color="red" v-model="ratingModel" :max="6" icon="favorite_border" />

      <p class="caption">Readonly State</p>
      <u-rating size="2rem" color="primary" v-model="ratingModel" :max="6" icon="loyalty" readonly />

      <p class="caption">Disabled State</p>
      <u-rating size="2rem" color="red" v-model="ratingModel" :max="6" icon="create" disable />

      <p class="caption">In a Field</p>
      <u-field
        icon="thumb_up"
        label="Rating"
        helper="How much do you rate this article?"
      >
        <u-rating size="2rem" v-model="ratingModel" :max="5" />
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-rating color="amber" v-model="ratingModel" :max="5" icon="pets" size="2rem" class="u-my-md" />
        <u-field
          dark
          icon="thumb_up"
          label="Rating"
          helper="How much do you rate this article?"
        >
          <u-rating size="2rem" v-model="ratingModel" :max="5" />
        </u-field>
      </div>
    </div>
  </u-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      ratingModel: 4
    }
  }
}
</script>
