<script>
  import FilterMixins from '../../mixins/FilterMixins'

  export default {
    name: 'MarkerItem',
    mixins: [FilterMixins],
    props: {
      iconName: {},
      iconType: {},
      iconColor: {}
    }
  }
</script>

<template>
  <u-item link @click.native="filterEmails" :class="{ 'active-filter': $route.query.filter === filter }">
    <u-item-side><u-icon :name="iconName" :type="iconType" :color="iconColor"></u-icon></u-item-side>
    <u-item-main>
      <u-item-tile label>{{name}}</u-item-tile>
    </u-item-main>
  </u-item>
</template>
