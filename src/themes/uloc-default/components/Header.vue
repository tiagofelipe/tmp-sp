<script>
  import {UDrawer} from 'uloc'

  export default {
    data () {
      return {}
    },
    props: {
      drawerFixed: {
        type: Boolean,
        default: false
      },
      drawerFolded: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ulocMenu () {
        return this.$uloc.menu.state
      }
    },
    mounted () {
    },
    attached () {
    },
    methods: {
      changeColor () {
        this.$uloc.color = 'mudou'
      },
      closeDrawer () {
        this.$refs.drawer.close()
      }
    },
    components: {
      UDrawer
    },
    directives: {}
  }
</script>

<template>
  <div>
    <u-drawer ref="drawer" :menu="ulocMenu" :fixed="drawerFixed" :folded="drawerFolded">
      <slot name="drawer-header" slot="drawer-header">
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
      <slot name="extra-content" slot="extra-content"/>
      <slot name="drawer-content" slot="drawer-content"/>
    </u-drawer>
    <header class="u-header">
      <div class="u-top-header">
        <slot name="header">
          <div class="u-left-side">
            <slot name="drawer-button">
              <a @click="$refs.drawer.open()" class="ico-menu hidden-drawer-fixed">
                <u-icon name="menu" type="material"/>
              </a>
            </slot>
            <slot name="menu-left">
              <a href="#" class="u-app-name hidden-drawer-fixed no-m-drawer-fixed">
                Uloc
              </a>
            </slot>
          </div>

          <div class="u-right-side">
            <slot name="menu-right">
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
          </div>
        </slot>
      </div>

      <slot name="header-nav">
        <div id="u-header-nav">
          <!--<nav class="u-nav">
          </nav>-->
        </div>
      </slot>
      <!-- Sample <nav class="u-nav">
        <a class="u-back u-ico-chevron-left"></a>
        <ul class="u-nav-header">
          <li><a href="#" class="u-active">Item1</a></li>
          <li><a href="#">Item2</a></li>
          <li><span class="u-separator"></span></li>
          <li><a href="#" class="u-no-border-bottom"> <span class="u-ico2-calendar"></span> Item3</a></li>
          <li><a href="#" class="u-no-border-bottom"> <span class="u-ico2-calendar"></span> Item4</a></li>
        </ul>

        <div class="u-i-actions">
          <a class="u-btn-outline" @click="updateTheme('white')"> <span>+</span> Item5</a>
          <a class="u-btn-outline u-improvements" @click="updateTheme('default')"> <strong
            class="u-single-badge">1</strong> <i
            class="u-ico2-lamp u-no-margin"></i> </a>
          <a class="u-btn-outline u-active"> <strong class="u-single-badge u-bg-danger">12</strong>
            Item6</a>
          <a href="#" class="u-ico2-bar-chart"></a>
        </div>

      </nav>-->
    </header>
  </div>
</template>
