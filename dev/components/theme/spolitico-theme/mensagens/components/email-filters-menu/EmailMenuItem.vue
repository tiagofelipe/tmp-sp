<script>
  import FilterMixins from '../../mixins/FilterMixins'

  export default {
    name: 'EmailMenuItem',
    mixins: [FilterMixins]
  }
</script>

<template>
  <u-item link @click.native="filterEmails" :class="{ 'active-filter': $route.query.filter === filter }">
    <u-item-main>
      <u-item-tile label>{{ name }}</u-item-tile>
    </u-item-main>
  </u-item>
</template>

<style scoped>

</style>
