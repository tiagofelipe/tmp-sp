<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Scroll down to see it in action.</p>

      <br>
      <u-infinite-scroll :handler="refresher">
        <p v-for="(item, index) in items" :key="index" class="caption">
          <u-chip square color="secondary" class="shadow-1">
            {{ index + 1 }}
          </u-chip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div class="row justify-center" style="margin-bottom: 50px;">
          <u-spinner-dots slot="message" :size="40" />
        </div>
      </u-infinite-scroll>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      items: [{}, {}, {}, {}, {}]
    }
  },
  methods: {
    refresher (index, done) {
      setTimeout(() => {
        let items = []

        for (let i = 0; i < 7; i++) {
          items.push({})
        }

        this.items = this.items.concat(items)
        done()
      }, 2500)
    }
  }
}
</script>
