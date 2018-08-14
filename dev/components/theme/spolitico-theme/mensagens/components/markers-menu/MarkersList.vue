<script>
  import MarkerItem from './MarkerItem'
  export default {
    name: 'markers-list',
    props: {
      options: {
        type: Array,
        required: true
      },
      headerTitle: {
        type: String,
        required: false,
        default: null
      }
    },
    components: {MarkerItem}
  }
</script>

<template>
  <u-list class="no-border">
    <u-list-header class="wrapper">{{ headerTitle }}</u-list-header>
    <marker-item
      :name="option.name"
      :filter="option.filter"
      :icon-name="option.icon.name"
      :icon-type="option.icon.type"
      :icon-color="option.icon.color"
      v-for="option in options"
      :key="option.filter"></marker-item>
  </u-list>
</template>
