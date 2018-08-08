<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <u-color v-model="modelHex" />
      <u-color v-model="modelRgb" placeholder="Placeholder" />
      <u-color v-model="modelHex" stack-label="Stack label" />
      <u-color v-model="modelHex" float-label="Float label" />
      <u-color v-model="modelHexa" float-label="Car color" prefix="~ " suffix=" ~" />
      <u-color v-model="modelRgba" stack-label="Clearable" clearable />
      <u-color v-model="defaultValue" stack-label="Default value" default-value="#1c32b0" clearable />
      <u-color v-model="forceType" stack-label="Forced type" type="rgba" />
      <u-color v-model="modelHex" :display-value="customDisplayValue" stack-label="Custom display value" />

      <p class="caption">Inverted</p>
      <u-color v-model="modelHexa" inverted />
      <u-color v-model="modelRgba" inverted color="secondary" suffix="Suffix" />
      <u-color v-model="modelHex" inverted-light color="amber" clearable />
      <u-color v-model="modelHex" align="right" suffix="(no alpha)" inverted color="brown" stack-label="Color aligned to right" />

      <p class="caption">Force either modal or popover</p>
      <u-color v-model="modelHexa" modal stack-label="Always open modal" />
      <u-color v-model="modelHexa" popover stack-label="Always open popover" />

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ lazy }}
          </u-chip>
        </span>
      </p>
      <u-color :value="lazy" @change="val => lazy = val" clearable />

      <p class="caption">Before/after icons</p>
      <u-color v-model="modelHex" :before="[{icon: 'mail', handler () {}}]" suffix="Toyota" />
      <u-color v-model="modelRgb" clearable float-label="Icon dissapears on empty input" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <u-color v-model="modelHexa" inverted color="secondary" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <u-color v-model="modelRgba" float-label="Color to paint walls" inverted-light color="amber" clearable :after="[{icon: 'done', condition: modelRgba, handler () {}}]" />
      <u-color v-model="modelHex" inverted color="brown" :before="[{icon: 'brush', handler () {}}]" />

      <p class="caption">Error/warning states</p>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-color v-model="modelHex" :error="error" :warning="warning" />
      <u-color v-model="modelRgb" :error="error" :warning="warning" float-label="Float label" />
      <u-color v-model="modelHexa" :error="error" :warning="warning" inverted />
      <u-color
        v-model="modelHex" :error="error" :warning="warning" inverted
        :float-label="error ? 'We got an error' : (warning ? 'We got a warning' : 'Everything fine now')"
        :after="[
          {icon: 'warning', error: true, handler () {}},
          {icon: 'priority_high', warning: true, handler () {}}
        ]"
      />

      <p class="caption">Read-only</p>
      <u-color v-model="modelHex" readonly float-label="Read-only color input" />
      <u-color v-model="modelHex" readonly inverted color="secondary" float-label="Read-only & inverted" />

      <p class="caption">Disabled</p>
      <u-color v-model="modelHex" disable float-label="Disabled color input" />
      <u-color v-model="modelHex" disable inverted color="primary" float-label="Disabled & inverted" />

      <p class="caption">In a Field</p>
      <u-toggle class="u-ma-xs" v-model="error2" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning2" color="warning" label="Toggle warning state" />

      <u-field
        helper="What's your favourite name?"
        :error="error2"
        error-label="Hey, we got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-color v-model="modelHex" />
      </u-field>

      <u-field
        icon="camera_alt"
        helper="Your awesome helper"
        :error="error2"
        error-label="We got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-color v-model="modelHexa" float-label="Float Label" />
      </u-field>
      <br>

      <u-field
        icon="important_devices"
        label="Playstation color"
        :count="15"
        helper="Some helper"
        :error="error2"
        error-label="Wait, wait. Error!"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-color v-model="modelHex" inverted placeholder="On Field" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </u-field>

      <u-field
        icon="place"
        label="Floor color"
        helper="Some helper"
        :error="error2"
        error-label="Some error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-color v-model="modelHex" color="secondary" inverted stack-label="Stack Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </u-field>

      <u-field
        icon="color_lens"
        label="Wall color"
        helper="This color will be used on the living room"
        :error="error2"
        error-label="That's not a valid color"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-color v-model="modelHex" inverted color="purple" float-label="Float Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-color v-model="modelHexa" float-label="Colored" dark color="yellow" suffix="TSP" />
        <u-color v-model="modelHexa" float-label="Colored" dark color="secondary" suffix="TSP" />

        <u-field
          icon="wifi"
          label="Wifi network"
          helper="We need this for connecting you"
        >
          <u-color
            v-model="modelHex"
            dark
            color="yellow"
            float-label="Wifi name"
          />
        </u-field>
      </div>
    </div>
  </u-page>
</template>

<script>
import '../docs-input.styl'

export default {
  data () {
    return {
      modelHex: '#C7044B',
      modelHexa: '#F0FF1CBF',
      modelRgb: { r: 112, g: 204, b: 55 },
      modelRgba: { r: 138, g: 36, b: 138, a: 64 },

      defaultValue: null,
      forceType: null,

      lazy: '#C7044B',

      error: true,
      warning: false,

      error2: false,
      warning2: false
    }
  },
  methods: {
    onInput (val) {
      console.log('input', val, typeof val)
    }
  },
  computed: {
    customDisplayValue () {
      return this.modelHex
        ? 'Color: ' + this.modelHex.slice(1).match(/.{1,2}/g).join('~')
        : 'Pick a color'
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
    },

    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
  }
}
</script>
