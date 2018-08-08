<script>
  import UHeader from 'uloc-src/themes/uloc-default/components/Header.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'app-root',
    components: {
      UHeader
    },
    computed: {
      ...mapState({
        appTheme: ({app}) => app.appTheme,
        appThemeColors: ({app}) => app.appThemeColors,
        appDrawerFixed: ({app}) => app.appDrawerFixed,
        appDrawerFolded: ({app}) => app.appDrawerFolded,
        appDrawerDock: ({app}) => app.appDrawerDock,
        appDrawerTheme: ({app}) => app.appDrawerTheme
      }),
      stateAppClass () {
        return {
          'drawer-folded': this.appDrawerFolded,
          'drawer-fixed': this.appDrawerFixed,
          'drawer-dock': this.appDrawerDock
        }
      }
    }
  }
</script>

<template>
  <div id="uloc-app" class="app-main u-w-full u-h-full"
       :class="['theme-' + appTheme, 'drawer-theme-' + appDrawerTheme, stateAppClass]">
    <u-header :drawer-fixed="appDrawerFixed" :drawer-folded="appDrawerFolded">
      <!--<div slot="drawer-header"></div>-->
      <!--<div slot="extra-content"></div>-->
      <!--<div name="drawer-content"></div>-->

      <!--<div slot="menu-left"></div>-->
      <div slot="header-nav">
        <div id="u-header-nav">
          <nav class="u-nav">
            <a class="u-back">
              <u-icon name="chevron-left" type="fa"/>
            </a>
            <ul class="u-nav-header">
              <li><a href="#" class="u-active">Item1</a></li>
              <li><a href="#">Item2</a></li>
              <li><span class="u-separator"></span></li>
              <li><a href="#" class="u-no-border-bottom">
                <u-icon name="calendar-alt" type="fa" icon-style="solid" tag="span"></u-icon>
                Item3</a></li>
              <li><a href="#" class="u-no-border-bottom">
                <u-icon name="calendar-alt" type="fa"></u-icon>
                Item4</a></li>
            </ul>

            <div class="u-i-actions">
              <a class="u-btn-outline" @click="updateTheme('white')"> <span>+</span> Item5</a>
              <a class="u-btn-outline u-improvements" @click="updateTheme('default')"> <strong
                class="u-single-badge">1</strong>
                <u-icon name="lightbulb" type="fa"></u-icon>
              </a>
              <a class="u-btn-outline u-active"> <strong class="u-single-badge u-bg-danger">12</strong>
                Item6</a>
              <a href="#">
                <u-icon name="chart-bar" type="fa" icon-style="solid"/>
              </a>
            </div>

          </nav>
        </div>
      </div>
    </u-header>

    <router-view></router-view>

  </div>
</template>

<style src="uloc-src/assets/styl/app.styl" lang="stylus"></style>
