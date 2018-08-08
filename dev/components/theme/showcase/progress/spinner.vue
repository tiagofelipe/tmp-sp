<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <u-field
        icon="format size"
        :label="`Size: ${size}px`"
      >
        <u-slider v-model="size" :min="20" :max="256" />
      </u-field>

      <u-field
        icon="palette"
        label="Color"
      >
        <u-color v-model="color" />
      </u-field>

      <p class="caption">
        Hover over them to see their names
      </p>

      <div style="margin-top: 20px">
        <div v-for="spinner in spinners" :key="spinner" class="inline-block u-ma-sm">
          <component
            :is="`u-spinner-${spinner}`"
            :size="size"
            :style="spinnerStyle"
          />
          <u-tooltip :offset="[0, 8]">{{ spinner }}</u-tooltip>
        </div>
      </div>

      <p class="caption">
        Default Theme Spinner:
        <u-spinner color="primary" :size="size" style="margin-left: 1rem;" />
      </p>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      size: 36,
      color: '#027be3ff',
      spinners: [
        'audio', 'ball', 'bars', 'circles', 'comment',
        'cube', 'dots', 'facebook', 'gears', 'grid', 'hearts',
        'hourglass', 'infinity', 'oval',
        'pie', 'puff', 'radio', 'rings', 'tail', 'uloc'
      ]
    }
  },
  computed: {
    spinnerStyle () {
      return `color: ${this.color}`
    }
  }
}
</script>
