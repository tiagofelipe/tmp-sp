<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption" style="margin-bottom: 40px">
        These examples feature countries autocomplete.<br>
        On desktop, Escape key closes the suggestions popover and you can navigate with keyboard arrow keys. Selection is made with either mouse/finger tap or by Enter key.
      </p>

      <u-search v-model="terms" placeholder="Start typing a country name">
        <u-autocomplete @search="search" @selected="selected" />
      </u-search>

      <u-search inverted v-model="terms" placeholder="Start typing a country name">
        <u-autocomplete @search="search" @selected="selected" />
      </u-search>

      <u-chips-input v-model="chips1" placeholder="Select from list or add new one" stack-label="List of countries" @duplicate="duplicate">
        <u-autocomplete @search="search" @selected="selected" />
      </u-chips-input>

      <p class="caption">Maximum of 2 results at a time</p>
      <u-search inverted-light color="amber" v-model="terms">
        <u-autocomplete
          @search="search"
          :max-results="2"
          @selected="selected"
        />
      </u-search>

      <p class="caption">Minimum 3 characters to trigger search</p>
      <u-input color="amber" v-model="terms" placeholder="Type 'fre'">
        <u-autocomplete
          @search="search"
          :min-characters="3"
          @selected="selected"
        />
      </u-input>

      <p class="caption">Custom debounce before triggering search</p>
      <u-input color="amber" v-model="terms" placeholder="One second debounce">
        <u-autocomplete
          @search="search"
          :debounce="1000"
          @selected="selected"
        />
      </u-input>

      <p class="caption">Static List</p>
      <u-search inverted color="secondary" v-model="terms" placeholder="Featuring static data">
        <u-autocomplete
          :static-data="{field: 'value', list: countries}"
          @selected="selected"
        />
      </u-search>
      <u-chips-input inverted color="primary" v-model="chips2" placeholder="Select from list or add new one" stack-label="List of countries" @duplicate="duplicate">
        <u-autocomplete
          :static-data="{field: 'value', list: countries}"
          @selected="selected"
        />
      </u-chips-input>

      <p class="caption">Separator between results</p>
      <u-search v-model="terms">
        <u-autocomplete
          separator
          @search="search"
          @selected="selected"
        />
      </u-search>
    </div>
  </u-page>
</template>

<script>
import './docs-input.styl'
import { uid, filter } from 'uloc'
import countries from '../../sample-data/autocomplete.json'

const icons = ['alarm', 'email', 'search', 'build', 'card_giftcard', 'perm_identity', 'receipt', 'schedule', 'speaker_phone', 'archive', 'weekend', 'battery_charging_full']

function getRandomIcon () {
  return icons[Math.floor(Math.random() * icons.length)]
}
function getRandomStamp () {
  if (Math.floor(Math.random() * 50) % 3 === 0) {
    return `${Math.floor(Math.random() * 10)} min`
  }
}
function getRandomSecondLabel () {
  if (Math.floor(Math.random() * 50) % 4 === 0) {
    return `UID: ${uid().substring(0, 8)}`
  }
}
function parseCountries () {
  return countries.map(country => {
    return {
      label: country,
      sublabel: getRandomSecondLabel(),
      icon: getRandomIcon(),
      stamp: getRandomStamp(),
      value: country
    }
  })
}

export default {
  data () {
    return {
      terms: '',
      countries: parseCountries(),
      chips1: ['Romania', 'Algeria'],
      chips2: ['Bahamas', 'Costa Rica']
    }
  },
  methods: {
    search (terms, done) {
      setTimeout(() => {
        done(filter(terms, {field: 'value', list: parseCountries()}))
      }, 1000)
    },
    selected (item) {
      this.$uloc.notify(`Selected suggestion "${item.label}"`)
    },
    duplicate (label) {
      this.$uloc.notify(`"${label}" already in list`)
    }
  }
}
</script>
