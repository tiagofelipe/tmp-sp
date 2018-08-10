<script>
  // import _base from '../../_default/components/_base.vue'
  import CHeader from './components/Header.vue'
  import UPageContainer from '../../../../../src/components/layout/UPageContainer'
  import ULayout from '../../../../../src/components/layout/ULayout'

  export default{
    name: 'Contatos',
    // extends: _base,
    data () {
      return {}
    },
    computed: {},
    mounted () {
//      this._menuFolded(true)
    },
    destroyed () {},
    methods: {},
    components: {ULayout, UPageContainer, CHeader}
  }
</script>

<template>
    <u-layout>
        <u-page-container>
            <!--CHeader/>-->
            <router-view></router-view>
        </u-page-container>
    </u-layout>
</template>

<style src="./assets/scss/style.css"></style>
