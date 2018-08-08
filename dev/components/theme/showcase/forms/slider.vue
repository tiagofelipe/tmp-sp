<template>
  <u-page padding class="docs-slider row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Standard
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ standard }} (0 to 50)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="standard" :min="0" :max="50" />
      <u-slider v-model="standard" :min="0" :max="50" square />

      <p class="caption">
        With Floating Point Precision
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ precision }} (0.1 to 1.5)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="precision" :min="0.1" :max="1.5" :step="0.1" :decimals="1" color="amber" />

      <p class="caption">
        With Step
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ step }} (0 to 45, step 5)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="step" :min="0" :max="45" :step="5" color="purple" />

      <p class="caption">
        With Label
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ label }} (-20 to 20, step 4)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="label" :min="-20" :max="20" :step="4" label color="light-green" />

      <p class="caption">
        Snaps to Steps
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ snap }} (0 to 10, step 2)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="snap" :min="0" :max="10" :step="2" label snap color="deep-orange" />

      <p class="caption">
        With Markers. Snaps to Steps
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ marker }} (0 to 10, step 2)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="marker" :min="0" :max="10" :step="2" label snap markers />

      <p class="caption">
        Display Label Always
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ label }} (-20 to 20, step 4)
          </u-chip>
        </span>
      </p>
      <u-slider v-model="label" :min="-20" :max="20" :step="4" label-always color="orange" />

      <p class="caption">
        Custom Label Value
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ label }} (-20 to 20, step 4)
          </u-chip>
        </span>
      </p>
      <u-slider :label-value="`${label}px`" v-model="label" :min="-20" :max="20" :step="4" label-always color="brown" />

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ lazy }}
          </u-chip>
        </span>
      </p>
      <u-slider :value="lazy" @change="val => { lazy = val }" :min="0" :max="45" :step="5" color="purple" label />

      <p class="caption">Readonly State</p>
      <u-slider v-model="standard" color="secondary" :min="0" :max="50" readonly />

      <p class="caption">Disabled State</p>
      <u-slider v-model="standard" color="secondary" :min="0" :max="50" disable />

      <p class="caption">Error/Warning states</p>
      <div class="u-ma-xs m-b-md">
        <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
        <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />
      </div>

      <u-slider :error="error" :warning="warning" v-model="standard" :min="0" :max="50" />
      <u-slider :error="error" :warning="warning" v-model="standard" :min="0" :max="50" label-always />

      <p class="caption">In a Field</p>
      <u-field
        icon="local_atm"
        label="Payment"
        helper="Amount you are willing to spend (in USD)"
      >
        <u-slider class="dark" v-model="standard" :min="0" :max="50" label />
      </u-field>

      <p class="caption">In a List</p>
      <u-list>
        <u-item>
          <u-item-side icon="volume_down" />
          <u-item-main>
            <u-slider color="secondary" v-model="standard" :min="0" :max="50" label />
          </u-item-main>
          <u-item-side right icon="volume_up" />
        </u-item>
        <u-item>
          <u-item-side icon="brightness_low" />
          <u-item-main>
            <u-slider color="orange" v-model="standard" :min="0" :max="50" label />
          </u-item-main>
          <u-item-side right icon="brightness_high" />
        </u-item>
        <u-item>
          <u-item-side icon="mic" />
          <u-item-main>
            <u-slider color="black" v-model="standard" :min="0" :max="50" label />
          </u-item-main>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>

<script>
import './slider-style.styl'

export default {
  data () {
    return {
      standard: 20,
      precision: 0.4,
      step: 30,
      label: 5,
      snap: 2,
      marker: 6,
      lazy: 6,

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
