<template>
  <u-page padding>
    <p class="caption">
      <span class="desktop-only">Click</span>
      <span class="mobile-only">Tap</span>
      on each inline FABs below.
      The one that opens on the right also has a backdrop.
    </p>

    <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
      <u-fab color="purple" icon="keyboard_arrow_up" direction="up">
        <u-fab-action color="primary" click="notify('mail')" icon="mail" />
        <u-fab-action color="secondary" @click="notify('alarm')" icon="alarm" />
      </u-fab>

      <br>

      <u-fab color="amber" text-color="black" icon="keyboard_arrow_left" direction="left">
        <u-fab-action color="amber" text-color="black" @click="notify('mail')" icon="mail" />
        <u-fab-action color="amber" text-color="black" @click="notify('alarm')" icon="alarm" />
      </u-fab>

      <br>

      <u-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
        <u-fab-action color="primary" @click="notify('mail')" icon="mail" />
        <u-fab-action color="tertiary" @click="notify('alarm')" icon="alarm" />
      </u-fab>

      <br>

      <u-fab color="tertiary" glossy icon="keyboard_arrow_down" direction="down">
        <u-fab-action color="amber" text-color="black" @click="notify('mail')" icon="mail" />
        <u-fab-action color="amber" text-color="black" @click="notify('alarm')" icon="alarm" />
      </u-fab>
    </div>

    <p class="caption" style="margin-bottom: 100px;">
      There's also the absolute positioned one on bottom
      right of screen which maintains position on Page scroll.
      It has a click/tap event injected on itself when expanded.
    </p>

    <u-page-sticky position="bottom-right" :offset="[18, 18]">
      <u-fab
        icon="add"
        direction="up"
        color="primary"
      >
        <u-fab-action @click="alert" color="blue" class="white" icon="person add" />
        <u-fab-action @click="notify('mail')" color="blue" class="white" icon="mail" />
      </u-fab>
    </u-page-sticky>

    <div style="height: 1000px" />
  </u-page>
</template>

<script>
export default {
  methods: {
    alert () {
      this.$uloc.dialog({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    notify (icon) {
      this.$uloc.notify({
        icon,
        message: 'So you want your ' + icon + 's, huh?'
      })
    }
  }
}
</script>
