<template>
  <u-page padding>
    <p class="caption">With buttons</p>
    <u-pagination
      v-model="page"
      :min="1"
      :max="6"
    />

    <p class="caption">With inputbox</p>
    <u-pagination
      input
      v-model="page"
      :min="1"
      :max="6"
    />

    <p class="caption">With maximum number of links & custom color</p>
    <u-pagination
      v-model="page2"
      color="secondary"
      :min="1"
      :max="15"
      :max-pages="6"
    />

    <p class="caption">With no ellipses</p>
    <u-pagination
      v-model="page2"
      color="amber"
      text-color="black"
      :min="1"
      :max="15"
      :max-pages="6"
      :ellipses="false"
    />

    <p class="caption">With boundary links</p>
    <u-pagination
      v-model="page2"
      color="purple"
      :min="1"
      :max="15"
      :max-pages="6"
      boundary-links
    />

    <p class="caption">With direction links</p>
    <u-pagination
      v-model="page2"
      color="teal"
      :min="1"
      :max="15"
      :max-pages="6"
      direction-links
    />

    <p class="caption">With custom interval</p>
    <u-pagination
      v-model="page3"
      :min="5"
      :max="10"
    />

    <p class="caption">Mix and match</p>
    <u-pagination
      v-model="page4"
      color="tertiary"
      :min="7"
      :max="18"
      :max-pages="8"
      boundary-links
      direction-links
    />
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      page: 5,
      page2: 6,
      page3: 7,
      page4: 9
    }
  }
}
</script>
