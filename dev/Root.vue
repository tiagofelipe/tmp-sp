<script>
  import {mapState} from 'vuex'
  import UThemeCustomize from './components/theme/components/ThemeConfig'
  import UMenuDrawer from '../src/components/drawer/UMenuDrawer.js'

  export default {
    name: 'app-root',
    components: {UThemeCustomize, UMenuDrawer},
    computed: {
      ...mapState({
        appTheme: ({app}) => app.appTheme,
        appThemeColors: ({app}) => app.appThemeColors,
        appDrawerState: ({app}) => app.appDrawerState,
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
  <div id="uloc-app">

    <u-layout>

      <u-menu-drawer
        ref="drawer"
        :menu="$uloc.menu.state"
        :state="appDrawerState"
        :fixed="appDrawerFixed"
        :folded="appDrawerFolded"
        :dock="appDrawerDock"
        :theme="appDrawerTheme"
      ></u-menu-drawer>

      <u-layout-header reveal>
        <div slot="header_" class="u-left-side">
          <a class="ico-menu hidden-drawer-fixed">
            <i class="material-icons app-icon u-icon" aria-hidden="true">menu</i>
          </a>
        </div>
        <a slot="drawer-button_" class="ico-menu hidden-drawer-fixed">EU</a>
        <slot slot="header-right-side">
          <a href="#" class="pull-left u-header-actions u-active">
            <u-icon name="chat" type="material"/>
          </a>
          <a href="#" class="pull-left u-header-actions">
            <u-icon name="dashboard" type="material"/>
          </a>
          <!-- <a href="#" class="pull-left u-header-actions u-notifications-btn u-active"> 999+ </a> -->
          <a href="#" class="pull-left u-header-actions">
            <u-icon name="notifications" type="material"/>
          </a>
          <a href="#" class="u-user-photo u-img-rounded" data-u-module="dropdown" data-target="#menu">
            <img class="u-avatar"
                 src="https://gravatar.com/avatar/2b0c7e0e6b7c4f36fc7617d745098ff1.png?s=32&d=mm">
          </a>
        </slot>
      </u-layout-header>

      <!--<u-theme-customize></u-theme-customize>-->

      <u-page-container>
        <router-view></router-view>
      </u-page-container>

    </u-layout>

  </div>
</template>

<style src="uloc-src/assets/styl/app.styl" lang="stylus"></style>
