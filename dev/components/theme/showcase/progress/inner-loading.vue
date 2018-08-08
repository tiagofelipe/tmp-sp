<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Click or tap below, to see the innerLoading component work with a div.
        It is simulating a delay from a server reply.
      </p>
      <u-btn color="primary" @click="showTextLoading()">
        Show Text Loading
      </u-btn>

      <div class="row justify-center" style="margin-top: 40px">
        <u-card style="width: 288px; height: 262px;" color="grey-2" text-color="dark" class="relative-position">
          <u-card-title>
            Lorem Ipsum
          </u-card-title>
          <u-card-main>
            <transition
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <div v-show="showSimulatedReturnData">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
              </div>
            </transition>
          </u-card-main>
          <u-inner-loading :visible="visible">
            <u-spinner-gears size="50px" color="primary" />
          </u-inner-loading>
        </u-card>
      </div>
    </div>
  </u-page>
</template>

<script>
// Don't forget to specify which animations
// you are using in uloc.conf.js > animations

export default {
  data () {
    return {
      visible: false,
      showSimulatedReturnData: false
    }
  },
  methods: {
    showTextLoading () {
      this.show()
    },
    show () {
      this.visible = true
      this.showSimulatedReturnData = false

      setTimeout(() => {
        this.visible = false
        this.showSimulatedReturnData = true
      }, 3000)
    }
  }
}
</script>
