<script>
    import * as VueGoogleMaps from 'vue2-google-maps'
    import Vue from 'vue'

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyCNEqzwBl5f5ps0peIcrKHOwUfurxYJPdQ',
            libraries: 'places', // This is required if you use the Autocomplete plugin
            // OR: libraries: 'places,drawing'
            // OR: libraries: 'places,drawing,visualization'
            // (as you require)

            //// If you want to set the version, you can do so:
            // v: '3.26',
        }})

  export default{
    name: 'Pesquisas',
    data () {
      return {}
    },
    computed: {},
    mounted () {

    },
    destroyed () {},
    methods: {},
    components: {}
  }
</script>

<template>
            <router-view></router-view>
</template>

<style>
</style>
