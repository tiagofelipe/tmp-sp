<script>
  import EmailMenuItem from './EmailMenuItem'
  export default {
    name: 'EmailFilterMenu',
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
    components: {EmailMenuItem}
  }
</script>

<template>
  <u-list class="no-border">
    <u-list-header class="wrapper" v-if="headerTitle">{{ headerTitle }}</u-list-header>
    <email-menu-item :name="option.name" :filter="option.filter" v-for="option in options" :key="option.filter"></email-menu-item>
  </u-list>
</template>
