<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <u-knob
        v-model="model"
        :min="min"
        :max="max"
      />
      <u-knob
        color="secondary"
        v-model="model"
        :min="min"
        :max="max"
      />

      <p class="caption">With Step</p>
      <div class="group">
        <u-knob
          v-model="model"
          :min="min"
          :max="max"
          :step="10"
        />

        <p class="caption">Styling</p>
        <u-knob
          v-model="model"
          size="150px"
          color="red"
          line-width="2px"
          track-color="white"
          :min="min"
          :max="max"
        >
          $ {{ model }}
        </u-knob>

        <u-knob
          v-model="model"
          style="font-size: 3rem"
          color="amber-7"
          :min="min"
          :max="max"
          :step="5"
        />

        <u-knob
          v-model="model"
          size="120px"
          style="font-size: 1.5rem"
          color="secondary"
          track-color="yellow-3"
          line-width="5px"
          :min="min"
          :max="max"
          :step="5"
        >
          {{ model }} <u-icon class="m-l-xs" name="euro_symbol" />
        </u-knob>
      </div>

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ lazy }}
          </u-chip>
        </span>
      </p>
      <u-knob
        :value="lazy"
        @change="val => { lazy = val }"
        color="purple"
        :min="min"
        :max="max"
      />

      <p class="caption">Readonly state</p>
      <u-knob
        v-model="model"
        :min="min"
        :max="max"
        color="primary"
        readonly
      >
        <u-icon class="m-r-xs" name="volume_up" /> {{ model }}
      </u-knob>

      <p class="caption">Disabled state</p>
      <u-knob
        v-model="model"
        :min="min"
        :max="max"
        disable
      >
        <u-icon class="m-r-xs" name="volume_up" /> {{ model }}%
      </u-knob>

      <p class="caption">Inside Field</p>
      <u-field
        label="Amount to spend"
        helper="Touch to select an amount (USD)"
        icon="local_atm"
      >
        <u-knob
          v-model="model"
          :min="min"
          :max="max"
        />
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-knob
          color="orange"
          track-color="grey-8"
          v-model="model"
          :min="min"
          :max="max"
          class="u-my-md"
        />
        <u-field
          dark
          icon="thumb_up"
          label="Rating"
          helper="How much do you rate this article?"
        >
          <u-knob
            color="orange"
            track-color="grey-8"
            v-model="model"
            :min="min"
            :max="max"
            class="u-my-md"
          />
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
      model: 30,
      min: 0,
      max: 50,

      lazy: 30
    }
  }
}
</script>
