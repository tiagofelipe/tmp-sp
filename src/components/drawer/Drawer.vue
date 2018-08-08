<script>
  import UBackdrop from '../backdrop/Backdrop.vue'
  import UDrawerItem from './DrawerItem.vue'
  import PreventScroll from '../../mixins/prevent-scroll.js'

  export default {
    name: 'u-drawer',
    inject: {
      layout: {
        default () {
          console.error('UDrawer needs to be child of ULayout')
        }
      }
    },
    mixins: [PreventScroll],
    props: {
      /* TODO: Implement flexibility for this component. Transition, position, size, theme */
      /* TODO: Stylize on active */
      menu: [Array],
      clickOutsideToClose: {
        type: Boolean,
        default: true
      },
      escToClose: {
        type: Boolean,
        default: true
      },
      backdrop: {
        type: Boolean,
        default: true
      },
      fixed: {
        type: Boolean,
        default: false
      },
      folded: {
        type: Boolean,
        default: false
      },
      dock: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: 'default'
      },
      state: Boolean,
      noHideOnRouteChange: Boolean,
      noSwipeOpen: Boolean,
      noSwipeClose: Boolean
    },
    data () {
      return {
        isOpen: false,
        transitionCloseCompleted: true
      }
    },
    created () {
      this.layout.instances.menuDrawer = this
      this.$on('closeDrawer', () => {
        this.close()
      })
    },
    computed: {
      computedClass () {
        let css = []
        css.push(`drawer-theme-${this.theme}`)

        if (this.fixed) {
          css.push(`drawer-fixed`)
        }

        if (this.folded) {
          css.push(`drawer-folded`)
        }

        if (this.dock) {
          css.push(`drawer-dock`)
        }

        return css
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawer = this.$el.querySelector('.drawer')
        if (this.fixed) {
          this.open()
        }
      })
    },
    watch: {
      state (v) {
        v ? this.open : this.close()
      },
      fixed (v) {
        this.___fixed(v)
      },
      folded (v) {
        this.___folded(v)
      },
      dock (v) {
        this.___dock(v)
      },
      theme (v) {
        this.___updateTheme(v)
      },
    },
    destroyed () {
    },
    methods: {
      open () {
        this.drawer.setAttribute('open', '')
        this.isOpen = true
        window.setTimeout(() => {
          this.$el.focus()
        })
        this.$emit('open')
      },
      close () {
        if (this.fixed) return
        this.isOpen = false
        window.setTimeout(() => {
          this.drawer.removeAttribute('open')
        }, 200)
        this.$emit('close')
      },
      closeOnEsc () {
        if (this.escToClose) {
          this.close()
        }
      },
      isSubmenu (v) {
        return !(typeof v === 'undefined')
      },
      ___fixed (v) {
        if (v) {
          this.layout.$el.classList.add('drawer-fixed')
          this.open()
        }
        else {
          this.layout.$el.classList.remove('drawer-fixed')
          this.close()
        }
      },
      ___folded (v) {
        if (v) {
          this.fixed && this.layout.$el.classList.add('drawer-folded') && this.open()
        }
        else {
          this.layout.$el.classList.remove('drawer-folded')
        }
      },
      ___dock (v) {
        if (v) {
          this.layout.$el.classList.add('drawer-dock') && this.open()
        }
        else {
          this.layout.$el.classList.remove('drawer-dock')
        }
      },
      ___updateTheme (v) {
        console.log('Theme', v)
      }
    },
    components: {
      UBackdrop,
      UDrawerItem
    }
  }
</script>

<template>
  <div class="drawer-aside" :class="[computedClass, { open: isOpen }]" @keyup.esc.stop="closeOnEsc" tabindex="0">
    <aside class="drawer">
      <div class="drawer-header" tabindex="-1">
        <slot name="drawer-header">
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
      </div>
      <div class="drawer-content">
        <slot name="drawer-content">
          <ul selectable="a" attr-for-selected="href">
            <u-drawer-item :folded="folded" v-for="item in menu" :key="item.name" :item="item"
                           :has-sub-menu="isSubmenu(item.submenu)">
            </u-drawer-item>
          </ul>
        </slot>
        <slot name="extra-content"></slot>
      </div>
    </aside>

    <u-backdrop ref="backdrop" v-if="backdrop" @close="clickOutsideToClose && close()"
                :class="{show: isOpen}"></u-backdrop>

  </div>
</template>

<!--<style src="./drawer.styl" lang="stylus"></style>-->
