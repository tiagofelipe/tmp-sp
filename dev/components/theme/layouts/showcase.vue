<template>
  <u-layout view="Lhh lpr lFf">
    <u-layout-header reveal>
      <u-toolbar :inverted="$uloc.theme === 'ios'">
        <u-btn
          flat
          round
          dense
          v-go-back.single="pageMeta.backRoute"
          class="cordova-only electron-only"
          icon="arrow_back"
          aria-label="Go back"
        />
        <u-toolbar-title>
          <u-icon
            v-show="pageMeta.icon"
            style="font-size: 2rem; margin-right: 5px;"
            :name="pageMeta.icon"
          />
          {{ pageMeta.title }}
        </u-toolbar-title>
        <u-btn
          flat
          round
          dense
          class="within-iframe-hide"
          @click="drawerState = !drawerState"
          icon="menu"
          aria-label="Menu"
        />
      </u-toolbar>

      <showcase-tabs v-if="$uloc.theme === 'mat'" />
    </u-layout-header>

    <u-layout-footer reveal v-if="$uloc.theme === 'ios'">
      <showcase-tabs />
    </u-layout-footer>

    <u-layout-drawer v-model="drawerState" ref="x">
      <u-scroll-area
        style="width: 100%; height: 100%;"
        :class="$uloc.theme === 'mat' ? 'bg-grey-3' : null"
      >
        <div class="row flex-center bg-white" style="height: 115px">
          <img alt="Uloc logo" src="~assets/uloc-logo.svg" style="height: 75px; width: 75px;">
          <div class="caption m-l-md">
            Uloc v{{ $uloc.version }}
          </div>
        </div>
        <u-list no-border>
          <u-item
            to="/showcase"
            exact
            replace
          >
            <u-item-side icon="home" />
            <u-item-main label="Showcase home" />
          </u-item>
          <u-item-separator />
          <template v-for="category in categories">
            <u-list-header :key="`header-${category.title}`">
              {{ category.title }}
            </u-list-header>
            <u-item
              v-for="feature in category.features"
              :key="feature.hash"
              :to="`/showcase/${category.hash}/${feature.hash}`"
              :replace="!category.extract"
            >
              <u-item-side :icon="feature.icon" />
              <u-item-main :label="feature.title" />
              <!--
              <u-item-side right v-if="feature.status">
                <u-chip dense color="faded">{{ feature.status }}</u-chip>
              </u-item-side>
              -->
            </u-item>
            <u-item-separator :key="`separator-${category.title}`" />
          </template>
        </u-list>
      </u-scroll-area>
    </u-layout-drawer>

    <u-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        :duration="300"
        @leave="resetScroll"
      >
        <router-view />
      </transition>
    </u-page-container>
  </u-layout>
</template>

<script>
import ShowcaseTabs from '../components/showcase-tabs'
import { mapState } from 'vuex'
import categories from '../categories'

export default {
  components: {
    ShowcaseTabs
  },
  data () {
    return {
      categories
    }
  },
  computed: {
    drawerState: {
      get () {
        return this.$store.state.showcase.drawerState
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    },
    ...mapState('showcase', [
      'pageMeta'
    ])
  },
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  },
  mounted () {
    if (this.$uloc.platform.is.desktop && !this.drawerState) {
      this.drawerState = true
    }
  }
}
</script>
