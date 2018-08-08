<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see it in action.
        <span class="desktop-only iframe-hide">And resize your browser window.</span>
      </p>

      <u-list style="max-width: 600px;">
        <u-item
          link
          v-for="modal in types"
          :key="modal.label"
          @click.native="modal.show()"

        >
          <u-item-side icon="open_in_new" />
          <u-item-main :label="modal.label" />
          <u-item-side right icon="keyboard_arrow_right" />
        </u-item>
      </u-list>

      <p class="caption">Appear from Edges</p>
      <u-list style="max-width: 600px;">
        <u-item
          link
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
          @click.native="openSpecialPosition(position)"

        >
          <u-item-side :icon="positionalIcon[position]" />
          <u-item-main :label="`Modal from ${position}`" />
          <u-item-side right icon="keyboard_arrow_right" />
        </u-item>
      </u-list>

      <p class="caption">Using Vue reference and async/await. Opens then closes immediately.</p>
      <u-btn color="primary" @click="showByReference" label="Show" />
    </div>

    <u-modal v-model="basicModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="u-display-1 m-b-md">Basic Modal</div>
      <p v-for="n in 25" :key="`a-${n}`">Scroll down to close</p>
      <u-btn color="primary" @click="basicModal = false" label="Close" />
    </u-modal>

    <u-modal
      v-model="eventsModal"
      @show="notify('show')"
      @escape-key="notify('escape-key')"
      @hide="notify('hide')"
      :content-css="{padding: '50px', minWidth: '50vw'}"
    >
      <div class="u-display-1 m-b-md">Modal with Events</div>
      <p v-for="n in 25" :key="`b-${n}`">Scroll down to close</p>
      <u-btn color="primary" @click="eventsModal = false" label="Close" />
    </u-modal>

    <u-modal v-model="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <u-modal-layout>
        <u-toolbar slot="header">
          <u-btn
            flat
            round
            dense
            @click="layoutModal = false"
            icon="reply"
          />
          <u-toolbar-title>
            Header
          </u-toolbar-title>
        </u-toolbar>

        <u-toolbar slot="header">
          <u-search class="full-width" inverted v-model="search" color="none" />
        </u-toolbar>

        <u-toolbar slot="footer">
          <u-toolbar-title>
            Footer
          </u-toolbar-title>
        </u-toolbar>

        <div class="layout-padding">
          <u-btn color="primary" @click="layoutModal = false" label="Close" />
          <p class="caption" v-for="n in 15" :key="`c-${n}`">This is a Modal presenting a Layout.</p>
        </div>
      </u-modal-layout>
    </u-modal>

    <!-- specifying Vue ref for last example only -->
    <u-modal v-model="minimizedModal" minimized :content-css="{padding: '50px'}" ref="modalRef">
      <div class="u-display-1 m-b-md">Minimized Modal</div>
      <p>This one has backdrop on small screens too.</p>
      <u-btn color="red" v-close-overlay label="Close" />
    </u-modal>

    <u-modal v-model="maximizedModal" maximized :content-css="{padding: '50px'}">
      <div class="u-display-1 m-b-md">Maximized Modal</div><p>This one is maximized on bigger screens too.</p>
      <u-btn color="tertiary" @click="maximizedModal = false" label="Close" />
    </u-modal>

    <u-modal v-model="positionModal" :position="position" :content-css="{padding: '20px'}">
      <div class="u-display-1 m-b-md">Modal</div><p>This one gets displayed from {{ position }}.</p>
      <u-btn color="orange" @click="positionModal = false" label="Close" />
    </u-modal>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      basicModal: false,
      eventsModal: false,
      layoutModal: false,
      minimizedModal: false,
      maximizedModal: false,
      positionModal: false,
      types: [
        {
          label: 'Basic',
          show: () => { this.basicModal = true }
        },
        {
          label: 'Basic with Events',
          show: () => { this.eventsModal = true }
        },
        {
          label: 'With Modal Layout',
          show: () => { this.layoutModal = true }
        },
        {
          label: 'Always Minimized',
          show: () => { this.minimizedModal = true }
        },
        {
          label: 'Always Maximized',
          show: () => { this.maximizedModal = true }
        }
      ],
      position: 'bottom',
      positionalIcon: {
        top: 'arrow_upward',
        right: 'arrow_forward',
        bottom: 'arrow_downward',
        left: 'arrow_back'
      }
    }
  },
  methods: {
    notify (eventName) {
      this.$uloc.notify(`Event "${eventName}" was triggered.`)
    },
    openSpecialPosition (position) {
      this.position = position
      this.$nextTick(() => {
        this.positionModal = true
      })
    },
    async showByReference () {
      await this.$refs.modalRef.show()
      await this.$refs.modalRef.hide()
      this.$uloc.notify({
        color: 'secondary',
        message: 'Done opening and closing'
      })
    }
  }
}
</script>
