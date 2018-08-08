<template>
  <u-page padding class="docs-tab row justify-center">
    <div style="width: 400px; max-width: 90vw;">
      <p class="caption desktop-only">
        On a real mobile device Tabs look a little different
        in the sense that arrows won't be shown since user can
        pan (touch action) through the menu.
      </p>
      <p class="caption cordova-only">
        On a desktop the device Tabs display clickable arrows on left
        and right side when not enough screen real estate is available
        to show them all.
      </p>
      <p class="caption">
        Note that for effect reasons, the following tabs have a
        shaddow attached, which is not a default option.
      </p>
      <br>

      <u-tabs class="shadow-2">
        <u-tab slot="title" icon="mail" label="Mails" />
        <u-tab slot="title" icon="alarm" label="Alarms" />
        <u-tab slot="title" icon="movie" label="Movies" />
        <u-tab slot="title" icon="mail" label="Mails" />
        <u-tab slot="title" icon="alarm" label="Alarms" />
        <u-tab slot="title" icon="movie" label="Movies" />
        <u-tab slot="title" icon="mail" label="Mails" />
      </u-tabs>

      <p class="caption">Different Types</p>
      <u-tabs class="shadow-2">
        <u-tab slot="title" label="Mails" />
        <u-tab slot="title" label="Alarms" />
        <u-tab slot="title" label="Movies" />
      </u-tabs>
      <u-tabs class="shadow-2">
        <u-tab slot="title" icon="mail" />
        <u-tab slot="title" icon="alarm" />
        <u-tab slot="title" icon="movie" />
      </u-tabs>

      <p class="caption">They come in all colors</p>
      <u-tabs
        v-for="color in ['secondary', 'purple', 'red']"
        :key="color"
        :color="color"
        class="shadow-2"
        align="justify"
      >
        <u-tab slot="title" icon="mail" />
        <u-tab slot="title" icon="alarm" />
        <u-tab slot="title" icon="movie" />
      </u-tabs>
      <u-tabs
        color="amber"
        text-color="dark"
        class="shadow-2"
        align="justify"
      >
        <u-tab slot="title" icon="mail" />
        <u-tab slot="title" icon="alarm" />
        <u-tab slot="title" icon="movie" />
      </u-tabs>
      <u-tabs
        color="negative"
        text-color="black"
        class="shadow-2"
        align="justify"
      >
        <u-tab slot="title" icon="mail" />
        <u-tab slot="title" icon="alarm" />
        <u-tab slot="title" icon="movie" />
      </u-tabs>

      <p class="caption">Glossy</p>
      <u-tabs glossy class="shadow-2" align="justify">
        <u-tab slot="title" icon="mail" label="Mails" />
        <u-tab slot="title" icon="alarm" label="Alarms" />
        <u-tab slot="title" icon="movie" label="Movies" />
      </u-tabs>

      <p class="caption">With two lines label</p>
      <u-tabs two-lines color="brown" class="shadow-2" align="justify">
        <u-tab slot="title" icon="mail" label="Unread Emails" />
        <u-tab slot="title" icon="alarm" label="My Alarms" />
        <u-tab slot="title" icon="movie" label="Movie List Nearby" />
      </u-tabs>

      <p class="caption">With animated bar at top</p>
      <u-tabs position="bottom" class="shadow-up-2" align="justify">
        <u-tab slot="title" icon="mail" label="Mails" />
        <u-tab slot="title" icon="alarm" label="Alarms" />
        <u-tab slot="title" icon="movie" label="Movies" />
      </u-tabs>

      <p class="caption">With alerts and counter</p>
      <u-tabs class="shadow-2" align="justify">
        <u-tab alert slot="title" icon="mail" label="Mails" />
        <u-tab slot="title" icon="alarm" label="Alarms" />
        <u-tab count="5" slot="title" icon="movie" label="Movies" />
      </u-tabs>

      <p class="caption">Also "inverted"</p>
      <u-tabs
        inverted
        v-for="color in ['secondary', 'amber', 'purple']"
        :key="'other-' + color"
        :color="color"
        align="justify"
      >
        <u-tab slot="title" icon="mail" label="Mails" />
        <u-tab slot="title" icon="alarm" label="Alarms" />
        <u-tab slot="title" icon="movie" label="Movies" />
      </u-tabs>

      <p class="caption">Individual Tab colors</p>
      <u-tabs inverted align="justify">
        <u-tab color="secondary" slot="title" icon="mail" label="Mails" />
        <u-tab color="amber" slot="title" icon="alarm" label="Alarms" />
        <u-tab color="purple" slot="title" icon="movie" label="Movies" />
      </u-tabs>

      <p class="caption">Different alignments (view on a desktop)</p>
      <u-tabs
        v-for="align in ['left', 'center', 'right', 'justify']"
        :key="align"
        :align="align"
        class="shadow-2"
      >
        <u-tab slot="title" icon="mail" />
        <u-tab slot="title" icon="alarm" />
        <u-tab slot="title" icon="movie" />
      </u-tabs>

      <p class="caption">Selecting a default tab</p>
      <u-tabs class="shadow-2" align="justify">
        <u-tab slot="title" icon="mail" />
        <u-tab default slot="title" icon="alarm" />
        <u-tab slot="title" icon="movie" />
      </u-tabs>

      <p class="caption">Controlling selected tab</p>
      <u-option-group
        inline
        v-model="tab"
        :options="[
          {label: 'None', value: '', color: 'secondary'},
          {label: 'Mails', value: 'mails'},
          {label: 'Alarms', value: 'alarms'},
          {label: 'Movies', value: 'movies'}
        ]"
      />
      <br>
      <u-tabs v-model="tab" align="justify" class="shadow-2">
        <u-tab name="mails" slot="title" icon="mail" label="Mails" />
        <u-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <u-tab name="movies" slot="title" icon="movie" label="Movies" />
      </u-tabs>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style lang="stylus">
.docs-tab .u-tabs
  margin-bottom 15px
</style>
