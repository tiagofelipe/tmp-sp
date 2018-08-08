<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Works great with Autocomplete so you might want to check its page.</p>
      <br>

      <u-search v-model="model" no-icon />
      <u-search v-model="model" />
      <u-search icon="place" color="amber" v-model="model" stack-label="Seach for a place" />
      <u-search icon="local_airport" color="secondary" v-model="model" float-label="Search for an airport" suffix="@ nearby" />

      <u-search icon="local_dining" inverted v-model="model" clearable placeholder="Search for a nearby restaurant" />
      <u-search icon="ev_station" inverted-light color="amber" clearable v-model="model" stack-label="Seach for an ev station" placeholder="Type a name"/>
      <u-search icon="hotel" inverted color="secondary" v-model="model" float-label="Search for a hotel" />

      <u-search icon="local_movies" inverted color="black" clearable v-model="model" />

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ lazy }}
          </u-chip>
        </span>
      </p>
      <u-search :value="lazy" @change="val => lazy = val" icon="local_movies" inverted color="purple" loading />

      <p class="caption">In a Field</p>
      <u-field
        icon="local_hospital"
        label="Local hospital"
        :count="15"
        helper="Type a name"
      >
        <u-search v-model="model2" clearable />
      </u-field>
      <u-field
        icon="local_car_wash"
        label="Car wash"
        :count="12"
        helper="Type a name"
      >
        <u-search inverted v-model="model2" clearable />
      </u-field>

      <p class="caption">Hide the underline</p>
      <u-search v-model="textUnderline" hide-underline />

      <p class="caption">Readonly state</p>
      <u-search readonly icon="local_dining" color="orange" v-model="model2" placeholder="Search for a nearby restaurant" />
      <u-search readonly icon="local_dining" inverted-light color="orange" v-model="model2" placeholder="Search for a nearby restaurant" />

      <p class="caption">Disable state</p>
      <u-search disable icon="local_dining" color="orange" v-model="model2" placeholder="Search for a nearby restaurant" />
      <u-search disable icon="local_dining" inverted-light color="orange" v-model="model2" placeholder="Search for a nearby restaurant" />

      <p class="caption">Error/Warning states</p>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-search :error="error" :warning="warning" icon="ev_station" color="secondary" v-model="model2" stack-label="Seach for an ev station" placeholder="Type a name"/>
      <u-search :error="error" :warning="warning" icon="ev_station" inverted color="secondary" v-model="model2" stack-label="Seach for an ev station" placeholder="Type a name"/>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-search dark icon="local_airport" color="secondary" v-model="model" stack-label="Search for an airport" clearable />
        <u-field
          dark
          icon="local_car_wash"
          label="Car wash"
          count
          helper="Type a name"
        >
          <u-search dark color="yellow" v-model="model2" />
        </u-field>
      </div>
    </div>
  </u-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      model: '',
      model2: '',
      lazy: null,
      textUnderline: 'No underline',

      error: true,
      warning: false
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    }
  }
}
</script>
