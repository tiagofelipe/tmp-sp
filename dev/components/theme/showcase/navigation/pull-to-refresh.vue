<template>
  <u-pull-to-refresh :handler="refresher">
    <u-page padding class="bg-white">
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>

      <p v-for="(item, index) in items" :key="items.length - index" class="caption">
        <u-chip square color="secondary" class="shadow-1">
          {{ items.length - index }}
        </u-chip>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </u-page>
  </u-pull-to-refresh>
</template>

<script>
export default {
  data () {
    return {
      items: [{}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
    refresher (done) {
      setTimeout(() => {
        done()
        this.items.push({})
        this.$uloc.notify('Item #' + this.items.length + ' is new.')
      }, 1000)
    }
  }
}
</script>
