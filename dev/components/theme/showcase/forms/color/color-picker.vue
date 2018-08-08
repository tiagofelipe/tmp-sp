<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <div class="row gutter-md" style="max-width: 550px">
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center u-my-xs">Hex model</p>
          <u-color-picker v-model="modelHex" />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center u-my-xs">Hex (+ alpha) model</p>
          <u-color-picker v-model="modelHexa" />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center u-my-xs">RGB model</p>
          <u-color-picker v-model="modelRgb" />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <p class="caption text-center u-my-xs">RGBA model</p>
          <u-color-picker v-model="modelRgba" />
        </div>
      </div>

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ lazy }}
          </u-chip>
        </span>
      </p>
      <u-color-picker :value="lazy" @change="val => lazy = val" clearable />

      <p class="caption">On Dark Background</p>
      <div class="dark-example bg-black row justify-center">
        <u-color-picker class="m-t-lg u-ma-md" dark v-model="modelRgba" />
      </div>

      <p class="caption">Inside Field</p>
      <u-field
        label="Car color"
        helper="Touch to select a color"
        icon="brush"
        style="max-width: 530px"
      >
        <u-color-picker v-model="modelRgba" />
      </u-field>

      <p class="caption">Readonly</p>
      <div class="row gutter-md">
        <div class="col-12 col-sm-6 column items-center">
          <u-color-picker v-model="modelHexa" readonly />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <u-color-picker v-model="modelRgb" readonly />
        </div>
      </div>

      <p class="caption">Disable</p>
      <div class="row gutter-md">
        <div class="col-12 col-sm-6 column items-center">
          <u-color-picker v-model="modelHex" disable />
        </div>
        <div class="col-12 col-sm-6 column items-center">
          <u-color-picker v-model="modelRgba" disable />
        </div>
      </div>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      modelHex: '#C7044B',
      modelHexa: '#F0FF1CBF',
      modelRgb: { r: 112, g: 204, b: 55 },
      modelRgba: { r: 138, g: 36, b: 138, a: 64 },
      lazy: null
    }
  },
  methods: {
    rgb (color) {
      return `rgb${color.a !== void 0 ? 'a' : ''}(${color.r},${color.g},${color.b}${color.a !== void 0 ? `,${color.a / 100}` : ''})`
    }
  }
}
</script>
