<template>
  <u-page padding class="docs-btn row justify-center bg-white">
    <div style="min-height: 5500px">
      <u-btn @click="$refs.window1.show()">Mostrar Window</u-btn>
      <u-window-container>
        <u-window ref="window1"
                  width="90%"
                  height="300"
                  title="Meu Window"
                  :show-header="true"
                  :resize="true"
                  :icon="{name: 'verified_user', color: 'info'}"
                  content-class="row items-center justify-center"
        >

          <u-btn push color="white" text-color="black" icon="window" icon-type="fa" icon-style="light" label="Mostrar Window 2" @click="$refs.window2.show()"></u-btn>
          <u-window width="500" height="700" ref="window2"
                    :fullscreen="false"
                    :resize="false"
                    :maximize="false"
                    :move="false"
                    :close="false"
                    :click-outside="false"
                    :backdrop="false"
                    content-class="row items-center justify-center"
                    title="Tudo desabilitado"
          >
              <u-btn @click="$refs.window2.hide()" color="info" class="m-r-sm">Force Hide</u-btn>
              <u-btn @click="$refs.window3.show()" color="dark">Show Window 3</u-btn>
            <u-window width="50%" height="50%" ref="window3"
                      content-class="row items-center justify-center"
                      title="Window 3"
                      :icon="{name: 'window', type: 'fa', color: 'primary', iconStyle: 'light', extraStyle: {'font-size': '18px'}}"
                      :backdrop="true"
                      :move="false"
                      :click-outside="false"
            ></u-window>
          </u-window>

        </u-window>
      </u-window-container>
    </div>
  </u-page>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    beforeDestroy () {
    }
  }
</script>

<style lang="stylus">
</style>
