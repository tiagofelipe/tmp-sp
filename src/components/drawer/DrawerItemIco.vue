<script>
  import { UIcon } from '../icon'

  export default {
    name: 'u-drawer-item-ico',
    props: ['item'],
    data () {
      return {}
    },
    components: {UIcon}
  }
</script>

<template>
  <u-icon v-if="item.icon"
          :name="typeof item.icon === 'string' ? item.icon : item.icon.icon"
          :type="typeof item.icon === 'object' ? item.icon.type ? item.icon.type : 'default' : 'default'"
          :icon-style="typeof item.icon === 'object' ? item.icon.style ? item.icon.style : null : null"
          :class="[typeof item.icon === 'object' && typeof item.icon.class !== 'undefined' ? item.icon.class : '', {'hide-icon': item.hideIcon}]"
          class="m-i fa-fw"></u-icon>
</template>
