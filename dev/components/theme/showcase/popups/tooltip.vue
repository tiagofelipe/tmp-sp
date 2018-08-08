<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">
          Move mouse over the elements below. On a mobile device,
          you need to tap the elements.
        </span>
        <span class="mobile-only">
          Tap on elements below. On desktop you can move the mouse
          over the elements.
        </span>
      </p>

      <div
        style="margin-top: 40px;width: 200px; height: 70px;"
        class="bg-secondary text-white round-borders row flex-center"
      >
        One second delay
        <u-tooltip :delay="1000" :offset="[0, 10]">Uloc Rulz!</u-tooltip>
      </div>

      <p class="caption">With offset</p>
      <div class="group">
        <u-btn color="indigo">
          Hover
          <u-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            <strong>Tooltip</strong> on <em>top</em> (<u-icon name="keyboard_arrow_up" />)
          </u-tooltip>
        </u-btn>
        <u-btn color="red">
          Over
          <u-tooltip anchor="center right" self="center left" :offset="[10, 10]">
            <strong>Tooltip</strong> on <em>right</em> (<u-icon name="keyboard_arrow_right" />)
          </u-tooltip>
        </u-btn>
        <u-btn color="purple">
          These
          <u-tooltip anchor="center left" self="center right" :offset="[10, 10]">
            <strong>Tooltip</strong> on <em>left</em> (<u-icon name="keyboard_arrow_left" />)
          </u-tooltip>
        </u-btn>
        <u-btn color="amber">
          Buttons
          <u-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
            <strong>Tooltip</strong> on <em>bottom</em> (<u-icon name="keyboard_arrow_down" />)
          </u-tooltip>
        </u-btn>
      </div>

      <u-card style="margin-top: 75px">
        <u-card-title class="bg-primary text-center">
          <u-btn push color="orange">
            Mouse Hover

            <u-tooltip :anchor="anchor" :self="self">
              <div>Uloc is <strong>great</strong>!</div>
              <div class="text-center">Try it.</div>
            </u-tooltip>
          </u-btn>
        </u-card-title>

        <p class="caption text-center">Configure the Tooltip for button above.</p>
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
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      anchorOrigin: {vertical: 'bottom', horizontal: 'middle'},
      selfOrigin: {vertical: 'top', horizontal: 'middle'}
    }
  },
  computed: {
    anchor () {
      return `${this.anchorOrigin.vertical} ${this.anchorOrigin.horizontal}`
    },
    self () {
      return `${this.selfOrigin.vertical} ${this.selfOrigin.horizontal}`
    }
  }
}
</script>
