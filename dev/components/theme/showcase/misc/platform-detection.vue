<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Based on the device you are using to view this, Uloc detects the following:
      </p>

      <table class="u-table striped">
        <thead>
          <tr>
            <th class="text-left">Property</th>
            <th class="text-left">Value</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(value, prop) in $uloc.platform.is" :key="prop">
            <td>{{ prop }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>

      <p class="caption">
        Your device <strong>{{ touch }}</strong> touch capability.
      </p>
    </div>
  </u-page>
</template>

<script>
export default {
  computed: {
    touch () {
      return this.$uloc.platform.has.touch ? 'has' : 'does not have'
    }
  }
}
</script>
