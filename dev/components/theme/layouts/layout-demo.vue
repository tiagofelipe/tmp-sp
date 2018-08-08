<template>
  <u-layout :view="view">
    <u-layout-header v-model="header" :reveal="headerReveal">
      <u-toolbar :inverted="$uloc.theme === 'ios'">
        <u-btn flat round dense icon="menu" @click="left = !left" aria-label="Toggle menu on left side" />
        <u-toolbar-title>
          Header
          <span slot="subtitle">Header Subtitle</span>
        </u-toolbar-title>
        <u-btn flat dense v-if="!$uloc.platform.within.iframe" class="m-r-sm" label="Go to Showcase" @click="$router.replace('/showcase')" />
        <u-btn flat round dense icon="menu" @click="right = !right" aria-label="Toggle menu on right side" />
      </u-toolbar>
      <demo-tabs v-if="$uloc.theme === 'mat'" />
    </u-layout-header>

    <u-layout-footer v-model="footer" :reveal="footerReveal">
      <demo-tabs v-if="$uloc.theme === 'ios'" />
      <u-toolbar :inverted="$uloc.theme === 'ios'">
        <u-btn flat round dense icon="menu" @click="left = !left" aria-label="Toggle menu on left side" />
        <u-toolbar-title>
          Footer
        </u-toolbar-title>
        <u-btn flat round dense icon="menu" @click="right = !right" aria-label="Toggle menu on right side" />
      </u-toolbar>
    </u-layout-footer>

    <u-layout-drawer
      side="left"
      v-model="left"
      :overlay="leftOverlay"
      :behavior="leftBehavior"
      :breakpoint="leftBreakpoint"
      :content-class="$uloc.theme === 'mat' ? 'bg-grey-3' : null"
    >
      <u-scroll-area class="fit">
        <u-list-header>Left Panel</u-list-header>
        <u-item to="/showcase/layout-demo/play-with-layout">
          <u-item-side icon="account circle" />
          <u-item-main label="Play with Layout" sublabel="Learn more about it" />
          <u-item-side right icon="thumb_up" />
        </u-item>
        <u-item to="/showcase/layout-demo/drawer-panels">
          <u-item-side icon="view_array" />
          <u-item-main label="Drawer Panels" sublabel="Layout left/right sides" />
        </u-item>
        <u-item to="/showcase/layout-demo/page-sticky">
          <u-item-side icon="pin_drop" />
          <u-item-main label="Page Sticky" sublabel="...on a Layout" />
        </u-item>
        <u-item to="/showcase/layout-demo/floating-action-button">
          <u-item-side icon="play_for_work" />
          <u-item-main label="Floating Action Button" sublabel="For Page actions" />
        </u-item>

        <div v-if="scrolling" style="padding: 25px 16px 16px;">
          <p class="caption" v-for="n in 50" :key="`left-${n}`">
            <em>Left Panel has intended scroll</em>
          </p>
        </div>
      </u-scroll-area>
    </u-layout-drawer>

    <u-layout-drawer
      side="right"
      v-model="right"
      :overlay="rightOverlay"
      :behavior="rightBehavior"
      :breakpoint="rightBreakpoint"
      :content-class="$uloc.theme === 'mat' ? 'bg-grey-3' : null"
      :content-style="{fontSize: '16px'}"
    >
      <u-list-header>Right Panel</u-list-header>
      <div v-if="scrolling" style="padding: 25px 16px 16px;">
        <p class="caption" v-for="n in 50" :key="`right-${n}`">
          <em>Right Panel has intended scroll</em>
        </p>
      </div>
    </u-layout-drawer>

    <u-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </u-page-container>
  </u-layout>
</template>

<script>
import DemoTabs from '../components/demo-tabs'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    DemoTabs
  },
  computed: {
    header: {
      get () { return this.$store.state.layoutDemo.header },
      set (val) { this.$store.commit('layoutDemo/setHeader', val) }
    },
    footer: {
      get () { return this.$store.state.layoutDemo.footer },
      set (val) { this.$store.commit('layoutDemo/setFooter', val) }
    },
    left: {
      get () { return this.$store.state.layoutDemo.left },
      set (val) { this.$store.commit('layoutDemo/setLeft', val) }
    },
    right: {
      get () { return this.$store.state.layoutDemo.right },
      set (val) { this.$store.commit('layoutDemo/setRight', val) }
    },

    ...mapGetters('layoutDemo', ['view']),
    ...mapState('layoutDemo', [
      'headerReveal', 'footerReveal',
      'leftOverlay', 'leftBehavior', 'leftBreakpoint',
      'rightOverlay', 'rightBehavior', 'rightBreakpoint',
      'scrolling'
    ])
  }
}
</script>
