<script>
  // import _base from '../../_default/components/_base.vue'
  import UPageContainer from '../../../../../src/components/layout/UPageContainer'
  import ULayout from '../../../../../src/components/layout/ULayout'

  export default{
    name: 'Ocorrencias',
    // extends: _base,
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    destroyed () {},
    methods: {},
    components: {ULayout, UPageContainer}
  }
</script>

<template>
  <u-layout>
    <u-page-container>
      <router-view></router-view>
    </u-page-container>
  </u-layout>
</template>

<style></style>