<template>
  <u-page padding style="max-width: 600px;" class="bg-white">
    <p class="caption">QCollapsible is a QItem with extended functionality</p>
    <u-collapsible icon="explore" label="Explore">
      <div>{{ lorem }}</div>
    </u-collapsible>

    <p class="caption">Explore the possibilities</p>
    <u-list separator>
      <u-collapsible
        v-model="open"
        icon="perm_identity"
        label="With a model and events"
        @show="notify('Opened a Collapsible')"
        @hide="notify('Closed a Collapsible', true)"
      >
        <div>{{ lorem }}</div>
      </u-collapsible>

      <u-collapsible icon="shopping_cart" label="Toggle by right-side icon only" icon-toggle>
        <div>{{ lorem }}</div>
      </u-collapsible>

      <u-collapsible icon="explore" right-icon="map" label="With right-side icon too">
        <div>{{ lorem }}</div>
      </u-collapsible>

      <u-collapsible>
        <template slot="header">
          <u-chip color="primary" small class="m-r-sm">Custom header</u-chip>
          <u-item-main label="using slot" />
          <u-item-side right>
            <u-icon name="star" color="red" size="24px" />
          </u-item-side>
        </template>

        <div>{{ lorem }}</div>
      </u-collapsible>

      <u-collapsible avatar="assets/boy-avatar.png" label="With avatar">
        <div>{{ lorem }}</div>
      </u-collapsible>

      <u-collapsible icon="drafts" label="Disabled" disable>
        <div>{{ lorem }}</div>
      </u-collapsible>

      <u-collapsible letter="J" right-avatar="assets/boy-avatar.png" label="Jim">
        <div>{{ lorem }}</div>
      </u-collapsible>
    </u-list>

    <p class="caption">Multiline</p>
    <u-list inset-separator>
      <u-collapsible icon="mail" label="Inbox" sublabel="5 unread emails">
        <div>{{ lorem }}</div>
      </u-collapsible>
      <u-collapsible icon="send" label="Outbox" sublabel="Empty">
        <div>{{ lorem }}</div>
      </u-collapsible>
    </u-list>

    <p class="caption">Popups</p>
    <div>
      <u-collapsible popup icon="mail" label="Inbox" sublabel="5 unread emails">
        <div>{{ lorem }}</div>
      </u-collapsible>
      <u-collapsible popup icon="send" label="Outbox" sublabel="Empty">
        <div>{{ lorem }}</div>
      </u-collapsible>
      <u-collapsible popup icon="drafts" label="Draft" sublabel="Draft a new email">
        <div>{{ lorem }}</div>
      </u-collapsible>
    </div>

    <p class="caption">Menu</p>
    <u-list separator>
      <u-collapsible indent icon="mail" label="Inbox" sublabel="5 unread emails" opened>

        <u-collapsible indent icon="receipt" label="Receipts">

          <u-collapsible label="Today">
            <div>{{ lorem }}</div>
          </u-collapsible>
          <u-collapsible label="Yesterday">
            <div>{{ lorem }}</div>
          </u-collapsible>

        </u-collapsible>

        <u-collapsible indent icon="schedule" label="Postponed">
          <div>{{ lorem }}</div>
        </u-collapsible>

      </u-collapsible>

      <u-collapsible indent icon="send" label="Outbox" sublabel="Empty">
        <u-collapsible label="Today">
          <div>{{ lorem }}</div>
        </u-collapsible>
        <u-collapsible label="Yesterday">
          <div>{{ lorem }}</div>
        </u-collapsible>
      </u-collapsible>

      <u-collapsible indent icon="drafts" label="Draft" sublabel="Draft a new email">
        <div>{{ lorem }}</div>
      </u-collapsible>
    </u-list>

    <p class="caption">Group a.k.a Accordion (opening one closes the other)</p>
    <u-list>
      <u-collapsible group="somegroup" icon="explore" label="First" opened>
        <div>{{ lorem }}</div>
      </u-collapsible>
      <u-collapsible group="somegroup" icon="perm_identity" label="Second" header-class="text-red">
        <div>{{ lorem }}</div>
      </u-collapsible>
      <u-collapsible group="somegroup" icon="shopping_cart" label="Third">
        <div>{{ lorem }}</div>
      </u-collapsible>
    </u-list>

    <p class="caption">Preselected/Opened Collapsible (or use a model)</p>
    <u-list separator>
      <u-collapsible icon="explore" label="First">
        <div>{{ lorem }}</div>
      </u-collapsible>
      <u-collapsible icon="perm_identity" label="Second" opened>
        <div>{{ lorem }}</div>
      </u-collapsible>
    </u-list>

    <p class="caption">Make use of events</p>
    <u-collapsible indent icon="explore" label="Counter" @show="startCounting" @hide="stopCounting">
      <div>
        <u-chip color="secondary">Counting: {{ counter }}</u-chip>
      </div>
      <div class="m-t-md">Will only count when opened, using the show/hide events to control count timer.</div>
    </u-collapsible>

    <p class="caption">Ubiquity. Using Cards as content.</p>
    <u-list separator>
      <u-collapsible icon="explore" label="First Card">
        <u-card color="primary">
          <u-card-title>
            Card Title
          </u-card-title>
          <u-card-main>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </u-card-main>
        </u-card>
      </u-collapsible>
      <u-collapsible icon="perm_identity" label="Second Card">
        <u-card>
          <u-card-media>
            <img src="assets/mountains.jpg">
          </u-card-media>
          <u-card-main>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </u-card-main>
        </u-card>
      </u-collapsible>
      <u-collapsible icon="shopping_cart" label="Third Card">
        <u-card>
          <u-card-media>
            <img src="~assets/map.png">
          </u-card-media>
          <u-card-main>
            <u-item>
              <u-item-side icon="local_bar" />
              <u-item-main>
                <u-item-tile label>Bar XYZ</u-item-tile>
                <u-item-tile sublabel>Have a drink.</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item>
              <u-item-side icon="local_gas_station" />
              <u-item-main>
                <u-item-tile label>Gas Station</u-item-tile>
                <u-item-tile sublabel>Fill your gas tank.</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item>
              <u-item-side icon="local_movies" />
              <u-item-main>
                <u-item-tile label>Cinema XYZ</u-item-tile>
                <u-item-tile sublabel>Watch a movie.</u-item-tile>
              </u-item-main>
            </u-item>
          </u-card-main>
          <u-card-actions class="group">
            <div class="text-lime">
              13 minutes
            </div>
            <div>
              (1 mile)
            </div>
            <div class="col" />
            <u-btn flat color="primary" size="sm" icon="directions" label="Start" />
          </u-card-actions>
        </u-card>
      </u-collapsible>
    </u-list>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      counter: 0,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nemo minus dolore facere saepe molestias, fugiat officia aspernatur expedita pariatur, accusantium hic exercitationem perspiciatis voluptate possimus nobis temporibus ipsa officiis!'
    }
  },
  methods: {
    notify (message, close) {
      this.$uloc.notify({
        color: close ? 'tertiary' : 'secondary',
        message
      })
    },
    startCounting () {
      console.log('counter start')

      this.hndl = setInterval(() => {
        this.counter++
      }, 1000)
    },
    stopCounting () {
      console.log('counter stop')

      clearInterval(this.hndl)
    }
  }
}
</script>
