<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption" style="margin-top: 120px;">
        Click on buttons and image below to open Popovers.
        <br>
        <em>This page has intended scroll so you can see multiple scenarios.</em>
      </p>

      <div>
        <u-btn color="primary">
          <u-icon name="assignment" />

          <u-popover>
            <u-list link separator class="scroll" style="min-width: 100px">
              <u-item
                v-for="n in 20"
                :key="`a-${n}`"
                v-close-overlay
                @click.native="notify"
              >
                <u-item-main label="Label" sublabel="Click me" />
              </u-item>
            </u-list>
          </u-popover>
        </u-btn>

        <u-btn ref="target4" color="negative">
          Disabled Popover

          <u-popover disable>
            This Popover content won't be shown because of "disable"
          </u-popover>
        </u-btn>

        <u-card style="margin-top: 75px">
          <u-card-title class="bg-primary text-center">
            <u-btn push color="orange">
              Tap Me

              <u-popover
                :anchor="anchor"
                :self="self"
              >
                <u-list link style="min-width: 100px">
                  <u-item
                    v-for="n in 3"
                    :key="`b-${n}`"
                    v-close-overlay
                    @click.native="notify"
                  >
                    <u-item-main label="Label" />
                  </u-item>
                </u-list>
              </u-popover>
            </u-btn>
          </u-card-title>

          <p class="caption text-center">Configure the Popover for button above.</p>
          <p class="text-center">
            <u-chip tag color="primary">anchor="{{ anchor }}"</u-chip>
            <u-chip tag color="primary">self="{{ self }}"</u-chip>
          </p>
          <u-card-main class="row">
            <div class="column items-center col-6">
              <p class="caption">Anchor Origin</p>
              <div class="flex">
                <div class="column group">
                  <div>Vertical</div>
                  <u-radio v-model="anchorOrigin.vertical" val="top" label="Top" />
                  <u-radio v-model="anchorOrigin.vertical" val="center" label="Center" />
                  <u-radio v-model="anchorOrigin.vertical" val="bottom" label="Bottom" />
                </div>
                <div class="column group">
                  <div>Horizontal</div>
                  <u-radio v-model="anchorOrigin.horizontal" val="left" label="Left" />
                  <u-radio v-model="anchorOrigin.horizontal" val="middle" label="Middle" />
                  <u-radio v-model="anchorOrigin.horizontal" val="right" label="Right" />
                </div>
              </div>
            </div>

            <div class="column items-center col-6">
              <p class="caption">Self Origin</p>
              <div class="flex">
                <div class="column group">
                  <div>Vertical</div>
                  <u-radio v-model="selfOrigin.vertical" val="top" label="Top" />
                  <u-radio v-model="selfOrigin.vertical" val="center" label="Center" />
                  <u-radio v-model="selfOrigin.vertical" val="bottom" label="Bottom" />
                </div>
                <div class="column group">
                  <div>Horizontal</div>
                  <u-radio v-model="selfOrigin.horizontal" val="left" label="Left" />
                  <u-radio v-model="selfOrigin.horizontal" val="middle" label="Middle" />
                  <u-radio v-model="selfOrigin.horizontal" val="right" label="Right" />
                </div>
              </div>
            </div>
          </u-card-main>
        </u-card>

        <div style="margin-bottom: 700px;" />

        <u-page-sticky position="top-right" :offset="[16, 16]">
          <u-btn color="secondary">
            <u-icon name="directions" />

            <!-- with v-model -->
            <u-popover v-model="popover"> <!-- TODO: BUG UPageStick -->
              <img
                src="~assets/map.png"
                style="height: 150px; width: 200px;"
                @click="notify(), popover = false"
              >
            </u-popover>
          </u-btn>
        </u-page-sticky>

        <u-page-sticky position="bottom-right" :offset="[16, 16]">
          <u-btn color="tertiary">
            <u-icon name="plus_one" />

            <u-popover>
              <div class="group" style="width: 220px; text-align: center;">
                <u-btn flat color="primary" v-close-overlay @click="notify">
                  <u-icon name="thumb_up" />
                </u-btn>
                <u-btn flat color="primary" v-close-overlay @click="notify">
                  <u-icon name="thumb_down" />
                </u-btn>
                <u-btn flat color="secondary" v-close-overlay @click="notify">
                  <u-icon name="share" />
                </u-btn>
              </div>
            </u-popover>
          </u-btn>
        </u-page-sticky>
      </div>

      <u-page-sticky position="bottom-left" :offset="[16, 16]">
        <u-btn color="primary">
          <u-icon name="menu" />

          <!-- with Vue reference -->
          <u-popover ref="popover">
            <u-list link separator class="scroll" style="min-width: 200px">
              <u-item
                v-for="n in 20"
                :key="`c-${n}`"
                @click.native="notify(), $refs.popover.hide()"
              >
                <u-item-main label="Label" sublabel="Click me" />
              </u-item>
            </u-list>
          </u-popover>
        </u-btn>
      </u-page-sticky>
    </div>
    <div style="width: 100%; padding-bottom: 800px">a</div> <!-- TODO: Verificar bug width está ficando float left -->
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
      selfOrigin: {vertical: 'top', horizontal: 'left'},
      popover: false
    }
  },
  computed: {
    anchor () {
      return `${this.anchorOrigin.vertical} ${this.anchorOrigin.horizontal}`
    },
    self () {
      return `${this.selfOrigin.vertical} ${this.selfOrigin.horizontal}`
    }
  },
  methods: {
    notify () {
      this.$uloc.notify((this.$uloc.platform.is.desktop ? 'Clicked' : 'Tapped') + ' on a Popover item')
    }
  }
}
</script>
