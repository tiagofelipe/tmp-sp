<template>
  <u-page padding class="docs-tab-pane row justify-center">
    <div style="width: 400px; max-width: 90vw;">
      <p class="caption">Tab Panes below</p>
      <u-tabs color="secondary" glossy align="justify">
        <u-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <u-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <u-tab name="movies" slot="title" icon="movie" label="Movies" />

        <u-tab-pane name="mails">Emails tab</u-tab-pane>
        <u-tab-pane name="alarms">Alarms tab</u-tab-pane>
        <u-tab-pane name="movies">Movies tab</u-tab-pane>
      </u-tabs>

      <p class="caption">Tab Panes below (inverted)</p>
      <u-tabs inverted color="secondary" align="justify">
        <u-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <u-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <u-tab name="movies" slot="title" icon="movie" label="Movies" />

        <u-tab-pane name="mails">Emails tab</u-tab-pane>
        <u-tab-pane name="alarms">Alarms tab</u-tab-pane>
        <u-tab-pane name="movies">Movies tab</u-tab-pane>
      </u-tabs>

      <p class="caption">Tab Panes above</p>
      <u-tabs position="bottom" color="amber" text-color="dark" align="justify">
        <u-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <u-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <u-tab name="movies" slot="title" icon="movie" label="Movies" />

        <u-tab-pane name="mails">Emails tab</u-tab-pane>
        <u-tab-pane name="alarms">Alarms tab</u-tab-pane>
        <u-tab-pane name="movies">Movies tab</u-tab-pane>
      </u-tabs>

      <p class="caption">Tab Panes above (inverted)</p>
      <u-tabs inverted position="bottom" color="purple" align="justify">
        <u-tab default name="mails" slot="title" icon="mail" />
        <u-tab name="alarms" slot="title" icon="alarm" />
        <u-tab name="movies" slot="title" icon="movie" />

        <u-tab-pane name="mails">Emails tab</u-tab-pane>
        <u-tab-pane name="alarms">Alarms tab</u-tab-pane>
        <u-tab-pane name="movies">Movies tab</u-tab-pane>
      </u-tabs>

      <p class="caption">Keeping tabs alive (Vue won't destroy content on Tab selection change)</p>
      <u-tabs color="tertiary" glossy align="justify">
        <u-tab default name="mails" slot="title" icon="mail" label="Mails" />
        <u-tab name="alarms" slot="title" icon="alarm" label="Alarms" />
        <u-tab name="movies" slot="title" icon="movie" label="Movies" />

        <u-tab-pane keep-alive name="mails">Emails tab</u-tab-pane>
        <u-tab-pane keep-alive name="alarms">Alarms tab</u-tab-pane>
        <u-tab-pane keep-alive name="movies">Movies tab</u-tab-pane>
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
.docs-tab-pane
  .u-tab-pane
    display flex
    align-items center
    justify-content center
    height 65px
</style>
