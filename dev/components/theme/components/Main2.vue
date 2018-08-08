<script>
  import UThemeConfig from './ThemeConfig.vue'

  export default {
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    destroyed () {
    },
    methods: {},
    components: {
      UThemeConfig
    }
  }
</script>

<template>
  <div class="u-main scroll"> <!-- TODO: Criar componente UMain -->
    <u-theme-config></u-theme-config>
    <div class="u-main-content">
      <u-layout> <!-- TODO: Revisar -->
        <u-page-container> <!-- TODO: Revisar -->
          <router-view></router-view>
        </u-page-container>
      </u-layout>
    </div>
  </div>
</template>
