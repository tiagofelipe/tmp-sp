<script>
  import { mapState } from 'vuex'

  export default {
    name: 'u-theme-customize',
    data () {
      return {
        buttonClosed: false,
        opened: false,

        theme: false,
        themeColors: false,
        drawerFixed: false,
        drawerFolded: false,
        drawerDock: false,
        drawerTheme: false
      }
    },
    computed: {
      ...mapState({
        appTheme: ({app}) => app.appTheme,
        appThemeColors: ({app}) => app.appThemeColors,
        appDrawerFixed: ({app}) => app.appDrawerFixed,
        appDrawerFolded: ({app}) => app.appDrawerFolded,
        appDrawerDock: ({app}) => app.appDrawerDock,
        appDrawerTheme: ({app}) => app.appDrawerTheme
      })
    },
    mounted () {
      this.$nextTick(() => {
        this.theme = this.appTheme
        this.themeColors = this.appThemeColors
        this.drawerFixed = this.appDrawerFixed
        this.drawerFolded = this.appDrawerFolded
        this.drawerDock = this.appDrawerDock
        this.drawerTheme = this.appDrawerTheme
      })
    },
    watch: {
      theme: function (v) {
        this.changeState('APP/SET_THEME', v)
      },
      drawerFixed: function (v) {
        this.changeState('APP/SET_DRAWER_FIXED', v)
      },
      drawerFolded: function (v) {
        this.changeState('APP/SET_DRAWER_FOLDED', v)
      },
      drawerDock: function (v) {
        this.changeState('APP/SET_DRAWER_DOCK', v)
      },
      drawerTheme: function (v) {
        this.changeState('APP/SET_DRAWER_THEME', v)
      }
    },
    destroyed () {},
    methods: {
      closeButtonConfig () {
        this.buttonClosed = true
      },
      open () {
        console.log('open theme config')
        this.opened = true
      },
      close () {
        console.log('close theme config')
        this.opened = false
      },
      changeState (mutationName, newValue) {
        this.$store.commit(mutationName, newValue)
      }
    },
    components: {}
  }
</script>

<template>
  <div class="u-theme-config-container" :class="{'is-closed': buttonClosed}">
    <a @click="open" class="u-theme-config">
      <u-icon name="color_lens" type="material"/>
    </a>
    <a @click="closeButtonConfig" class="u-theme-config-close"></a>

    <div class="u-theme-config-panel" :class="{'open': opened}">

      <div class="u-theme-content">

        <div class="clearfix m-b-xs">
          Drawer Fixed
          <label class="i-switch bg-info pull-right">
            <input v-model="drawerFixed" type="checkbox"
                   tabindex="0" aria-checked="false" aria-invalid="false">
            <i></i>
          </label>
        </div>

        <div class="clearfix m-b-xs">
          Drawer Folded
          <label class="i-switch bg-info pull-right">
            <input v-model="drawerFolded" type="checkbox"
                   tabindex="0" aria-checked="false" aria-invalid="false">
            <i></i>
          </label>
        </div>

        <div class="clearfix m-b-xs">
          Drawer Dock
          <label class="i-switch bg-info pull-right">
            <input v-model="drawerDock" type="checkbox"
                   tabindex="0" aria-checked="false" aria-invalid="false">
            <i></i>
          </label>
        </div>

        <div class="clearfix m-t m-b">
          Drawer Theme
          <!--<label class="i-switch bg-info pull-right">
            <field v-model="drawerTheme" type="checkbox"
                   tabindex="0" aria-checked="false" aria-invalid="false">
            <i></i>
          </label>-->
        </div>

        <div class="">
          <div class="settings b-row">
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="drawer-theme" value="default" aria-invalid="false" v-model="drawerTheme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class="bg-white full"></b>
              </span>
              </label>
            </div>
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="drawer-theme" value="black" aria-invalid="false" v-model="drawerTheme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class="bg-black full"></b>
              </span>
              </label>
            </div>
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="drawer-theme" value="blue" aria-invalid="false" v-model="drawerTheme">
                <span class="block bg-blue clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class="bg-blue full" style="background-color: #0081ff"></b>
              </span>
              </label>
            </div>
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="drawer-theme" value="dark" aria-invalid="false" v-model="drawerTheme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class="bg-dark full"></b>
              </span>
              </label>
              <!--<label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <field type="radio" name="drawer-theme" value="dark" aria-invalid="false" style="" v-model="drawerTheme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" class="text-white m-t-sm"></u-icon>
              </span>
              <b class="bg-black header"></b>
              <b class="bg-white header" style="background-color: #0081ff"></b>
              <b class="bg-black"></b>
              </span>
              </label>-->
            </div>
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="drawer-theme" value="transparent" aria-invalid="false" v-model="drawerTheme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class=" full"></b>
              </span>
              </label>
            </div>
          </div>
        </div>

        <div class="clearfix m-t m-b">
          Header Theme
          <!--<label class="i-switch bg-info pull-right">
            <field v-model="drawerTheme" type="checkbox"
                   tabindex="0" aria-checked="false" aria-invalid="false">
            <i></i>
          </label>-->
        </div>

        <div class="">
          <div class="settings b-row">
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="header-theme" value="default" aria-invalid="false" v-model="theme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class="bg-white full" style="background-color: #0081ff"></b>
              </span>
              </label>
            </div>
            <div class="b-col-sm-2">
              <label class="i-checks block m-b-sm b b-2x" role="button" tabindex="0">
                <input type="radio" name="header-theme" value="white" aria-invalid="false" v-model="theme">
                <span class="block bg-light clearfix pos-rlt">
              <span class="active pos-abt w-full h-full bg-black-opacity text-center">
                <u-icon name="check" type="fa" class="text-white m-t-xs"></u-icon>
              </span>
              <b class="bg-white full"></b>
              </span>
              </label>
            </div>
          </div>
        </div>

      </div>

      <div><a @click="close" class="panel-close u-ico-close">
        <u-icon name="times" type="fa" icon-style="regular"/>
      </a></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .u-theme-config-container {
    position: fixed;
    z-index: 99;
    bottom: 30px;
    right: 30px;
    &.is-closed {
      animation-name: fecharBonitin;
      animation-duration: .2s;
      -webkit-animation-fill-mode: forwards;
    }
  }

  a.u-theme-config {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    width: 60px;
    height: 60px;
    background: #1F8CEB;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    font-family: "intercom-font", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16) !important;
    z-index: 89;
  }

  a:hover.u-theme-config {
    color: #FFF;
    /*opacity: 0.7;*/
  }

  a:hover.u-theme-config i {
    /*animation-name: hoverBonitin;*/
    /*animation-duration: 1s;*/
    /*animation-iteration-count: infinite;*/
  }

  a.u-theme-config-close {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 15px;
    height: 15px;
    z-index: 90;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: red;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #FFF;
  }

  a.u-theme-config-close:after {
    content: 'x';
  }

  a:hover.u-theme-config-close {
    color: #FFFFFF;
    background-color: crimson;
  }

  .u-theme-config i {
    font-size: 50px;
  }

  .u-theme-config-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: fixed;
    z-index: 92;
    right: 25px;
    width: 250px;
    min-height: 200px;
    max-height: calc(100vh - 200px);
    background: #fff;
    border-radius: 5px;
    padding-bottom: 15px;
    box-shadow: 0 2px 14px 0 rgba(97, 123, 160, 0.4);
    opacity: 0;
    transition: all 0.3s;
    bottom: -300px;
    &.open {
      bottom: 25px !important;
      opacity: 1;
      transition: all 0.3s;
    }
    .panel-close {
      position: absolute;
      right: 0;
      top: -35px;
      z-index: 93;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: #fff;
      box-shadow: 0 0 54px 0 rgba(98, 124, 160, 0.4);
      height: 25px;
      width: 25px;
      border-radius: 4px;
      color: #000;
    }
    .panel-close:before {
      font-size: 70%;
    }
    :hover.panel-close {
      background-color: #0081ff;
      color: #FFF;
    }
  }

  .u-theme-content {
    padding: 22px;
  }

  @keyframes hoverBonitin {
    0% {
      transform: scale(.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(.75);
    }
    100% {
      transform: scale(.75);
    }
  }

  @keyframes fecharBonitin {
    0% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(.90);
    }
    40% {
      transform: scale(.80);
    }
    60% {
      transform: scale(.75);
    }
    80% {
      transform: scale(.50);
    }
    90% {
      transform: scale(.25);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
