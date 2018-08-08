<script>
  export default {
    name: 'u-menu-drawer-header',
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    destroyed () {
    },
    methods: {},
    components: {}
  }
</script>

<template>
  <div class="drawer-header" tabindex="-1">
    <slot>
      <svg width="20px" id="drawer-app-logo" data-name="uloc-logo" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 26 26.19"><title>uloc</title>
        <rect y="1.92" width="11.14" height="11.14"/>
        <rect y="15.05" width="11.14" height="11.14"/>
        <rect x="13.01" y="15.05" width="11.14" height="11.14"/>
        <rect x="446.94" y="175.11" width="11.14" height="11.14"
              transform="translate(-240.59 418.51) rotate(-79.5)"/>
      </svg>
      <span class="u-app-name-menu hidden-folded">Uloc Apps</span>
    </slot>
  </div>
</template>
