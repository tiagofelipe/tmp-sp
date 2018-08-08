<script>
  //  import UDrawerItem from './DrawerItem.vue'
  import { offset as _offset } from '../../utils/dom'
  import UDrawerItemIco from './DrawerItemIco'

  export default {
    name: 'u-drawer-item',
    components: {UDrawerItemIco},
    props: {
      hasSubMenu: {
        type: Boolean,
        default: false
      },
      folded: {
        type: Boolean,
        default: false
      },
      item: [Object]
    },
    data () {
      return {
        showSubItem: false
      }
    },
    created () {
      this.$on('closeDrawer', () => {
        this.$parent.$emit('closeDrawer')
      })
    },
    mounted () {
      this.$nextTick(() => {
        let el = this.$el
        let parent = this.$parent.$el
        /* Help to keyboard nav */
        this.keyUpListener = function (e) {
          parent.querySelector('[focusable]') && parent.querySelector('[focusable]').removeAttribute('focusable')
          if (!e.target) return
          var code = (e.keyCode ? e.keyCode : e.which)
          if (code === 9 && e.target.hasAttribute('menu-item')) {
            e.target.setAttribute('focusable', '')
          }
        }
        // keyboard-focus
        el.addEventListener('keyup', this.keyUpListener)

        if (this.hasSubMenu) {
          this.submenuItem = this.$el.querySelector('.drawer-subitem')
          this.adjustFolded()
        }
      })
    },
    watch: {
      folded: function (v) {
        this.adjustFolded()
      }
    },
    beforeDestroyed () {
      this.leaveMenu()
      this.$el.removeEventListener('keyup', this.keyUpListener)
      delete this.keyUpListener
    },
    methods: {
      openSubItem () {
        this.showSubItem = !this.showSubItem
        this.hoverMenu()
      },
      adjustFolded () {
        if (!this.hasSubMenu) return
        if (this.$el.contains(this.submenuItem)) this.$el.removeChild(this.submenuItem)
        if (this.$parent.$el.contains(this.submenuItem)) this.$parent.$el.removeChild(this.submenuItem)
        if (!this.folded && !this.$el.contains(this.submenuItem)) {
          this.$el.appendChild(this.submenuItem)
        }
      },
      hoverMenu () {
        if (this.isHoverMenu) return // evitar mouse hell
        if (!this.hasSubMenu) return
        if (!this.folded) return
        this.isLeaveMenu = false
        this.isHoverMenu = true
        this.adjustFolded()
        if (this.$parent.$el.contains(this.submenuItem)) return
        this.submenuItem.style.top = _offset(this.$el).top + 'px'
        this.$parent.$el.appendChild(this.submenuItem)
      },
      leaveMenu () {
        if (this.isLeaveMenu) return // evitar mouse hell
        if (!this.hasSubMenu) return
        if (!this.folded) return
        this.isHoverMenu = false
        this.isLeaveMenu = true
        this.adjustFolded()
        this.$el.appendChild(this.submenuItem)
        this.isLeaveMenu = false
      },
      clickLink (preventClose) {
        preventClose = typeof preventClose !== 'undefined' ? preventClose : false
        if (!preventClose) {
          this.$emit('closeDrawer')
        }
      }
    }/*,
    render (h) {
      let item = this.item
      // let classes = []
      if (item.separator) {
        return h('li', [
          h('div', {'class': 'separator'})
        ])
      } else if (item.headerTitle) {
        return h('li', [
          h('div', {'class': 'item-header hidden-folded'}, item.headerTitle)
        ])
      }

      let childClasses = []
      if (this.hasSubMenu) {
        childClasses.push('drawer-has-subitem-parent')
      }

      let child = []

      if (this.hasSubMenu) {
        child.push(
          h('a', {
            staticClass: 'drawer-has-subitem',
            class: {
              'open': this.showSubItem
            },
            attrs: {
              tabindex: '0',
              href: item.href,
              'aria-active-attribute': 'aria-expanded',
              'role': 'button',
              'aria-expanded': this.showSubItem,
              'aria-disabled': false,
              'menu-item': null
            },
            on: {
              click: this.openSubItem
            }
          }, [
            h('span', item.name),
            h('i', {staticClass: 'has-drop-down', 'class': item.styleClass}) // Parei aqui.
          ])
        )
      } else {
        console.log('nada')
      }

      return h('li', {
        on: {
          mouseover: this.hoverMenu,
          mouseleave: this.leaveMenu
        },
        'class': childClasses
      }, child)
    } */
  }
</script>

<template>
  <li v-if="item.separator" :class="item.styleClass">
    <div class="separator"></div>
  </li>
  <li v-else-if="item.headerTitle" :class="item.styleClass">
    <div class="item-header hidden-folded">{{item.headerTitle}}</div>
  </li>
  <li @mouseover="hoverMenu" @mouseleave="leaveMenu"
      :class="[{'drawer-has-subitem-parent': hasSubMenu}, item.styleClass]" v-else>

    <a v-if="hasSubMenu" tabindex="0" :href="item.href" @click="openSubItem" @keyup.enter="openSubItem"
       aria-active-attribute="aria-expanded" role="button" :aria-expanded="showSubItem ? 'true' : 'false'"
       aria-disabled="false" class="drawer-has-subitem" :class="{'open': showSubItem}" menu-item>
      <u-drawer-item-ico :item="item"/>
      <span>{{ item.name }}</span>
      <i class="has-drop-down" :class="item.styleClass"></i>
    </a>
    <a v-if="!hasSubMenu" tabindex="0" :href="item.href" @click="clickLink(item.preventClose)"
       :target="item.target ? item.target : '_self'" menu-item>
      <u-drawer-item-ico :item="item"/>
      <span>{{ item.name }}</span>
    </a>

    <ul v-if="hasSubMenu" @mouseleave="leaveMenu" class="drawer-subitem" :class="{'drawer-show': showSubItem}"
        role="group" aria-hidden="true" :aria-expanded="showSubItem ? 'true' : 'false'"
        submenu-item>
      <li selectable="a" attr-for-selected="href">
        <u-drawer-item v-for="subItem in item.submenu" :item="subItem" :key="subItem.name">
          <!--<i v-if="subItem.styleClass" :class="subItem.styleClass" class="m-i"></i>-->
          <u-drawer-item-ico :item="subItem"/>
          <span>{{ subItem.name }}</span>
        </u-drawer-item>
      </li>
    </ul>

  </li>
</template>
