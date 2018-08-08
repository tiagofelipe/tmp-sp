<script>
  export default {
    name: 'u-backdrop',
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<template>
    <div class="u-backdrop" @click="close" @keyup.esc="close"></div>
</template>

<!--<style src="./backdrop.styl" lang="stylus"></style>-->
