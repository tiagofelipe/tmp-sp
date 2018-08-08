<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">These are just a few examples</p>
      <u-btn-dropdown
        color="primary"
        label="Standard"
      >
        <u-list link>
          <u-item v-for="n in 2" :key="`1.${n}`" v-close-overlay @click.native="showNotification">
            <u-item-side icon="folder" inverted color="primary" />
            <u-item-main>
              <u-item-tile label>Photos</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
          <u-item-separator inset />
          <u-list-header inset>Files</u-list-header>
          <u-item v-close-overlay @click.native="showNotification">
            <u-item-side icon="assignment" inverted color="secondary" />
            <u-item-main>
              <u-item-tile label>Vacation</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
        </u-list>
      </u-btn-dropdown>

      <p class="caption">Split with Glossy effect</p>
      <u-btn-dropdown
        split
        color="secondary"
        glossy
        label="Click me"
        @click="splitClick"
      >
        <u-list link>
          <u-item v-for="n in 2" :key="`2.${n}`" v-close-overlay @click.native="showNotification">
            <u-item-side icon="folder" inverted color="primary" />
            <u-item-main>
              <u-item-tile label>Photos</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
          <u-item-separator inset />
          <u-list-header inset>Files</u-list-header>
          <u-item v-close-overlay @click.native="showNotification">
            <u-item-side icon="assignment" inverted color="secondary" />
            <u-item-main>
              <u-item-tile label>Vacation</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
        </u-list>
      </u-btn-dropdown>

      <p class="caption">Outline</p>
      <u-btn-dropdown
        split
        color="black"
        outline
        label="Get directions"
        icon="map"
      >
        <u-list link>
          <u-item v-for="n in 2" :key="`3.${n}`" v-close-overlay @click.native="showNotification">
            <u-item-side icon="folder" inverted color="primary" />
            <u-item-main>
              <u-item-tile label>Photos</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
          <u-item-separator inset />
          <u-list-header inset>Files</u-list-header>
          <u-item v-close-overlay @click.native="showNotification">
            <u-item-side icon="assignment" inverted color="secondary" />
            <u-item-main>
              <u-item-tile label>Vacation</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
        </u-list>
      </u-btn-dropdown>

      <p class="caption">Push type with icon and v-model</p>
      <u-btn-dropdown
        split
        v-model="dropdown"
        color="purple"
        push
        label="Get directions"
        icon="map"
      >
        <u-list link>
          <u-item v-for="n in 2" :key="`4.${n}`" @click.native="showNotification(), dropdown = false">
            <u-item-side icon="folder" inverted color="primary" />
            <u-item-main>
              <u-item-tile label>Photos</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
          <u-item-separator inset />
          <u-list-header inset>Files</u-list-header>
          <u-item @click.native="showNotification(), dropdown = false">
            <u-item-side icon="assignment" inverted color="secondary" />
            <u-item-main>
              <u-item-tile label>Vacation</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
        </u-list>
      </u-btn-dropdown>

      <p class="caption">Push type with icon and v-model</p>
      <u-btn-dropdown
        split
        color="red"
        rounded
        label="Get directions"
        icon="map"
      >
        <u-list link>
          <u-item v-for="n in 2" :key="`5.${n}`" v-close-overlay @click.native="showNotification()">
            <u-item-side icon="folder" inverted color="primary" />
            <u-item-main>
              <u-item-tile label>Photos</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
          <u-item-separator inset />
          <u-list-header inset>Files</u-list-header>
          <u-item v-close-overlay @click.native="showNotification()">
            <u-item-side icon="assignment" inverted color="secondary" />
            <u-item-main>
              <u-item-tile label>Vacation</u-item-tile>
              <u-item-tile sublabel>February 22, 2016</u-item-tile>
            </u-item-main>
            <u-item-side right icon="info" color="amber" />
          </u-item>
        </u-list>
      </u-btn-dropdown>
    </div>
  </u-page>
</template>

<script>
export default {
  data: () => ({
    dropdown: false
  }),
  methods: {
    splitClick () {
      this.$uloc.notify({
        position: 'right',
        message: 'Hey, why did you click on me?'
      })
    },
    showNotification () {
      this.$uloc.notify('Option selected & closed dropdown')
    }
  }
}
</script>
