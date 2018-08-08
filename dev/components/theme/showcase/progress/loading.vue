<template>
  <u-page padding>
    <p class="caption">
      Notify the user something is going on under the covers.
    </p>
    <div class="group">
      <u-btn push color="secondary" @click="noMessage">
        Show
      </u-btn>
      <u-btn push color="primary" @click="withMessage">
        Show With Message
      </u-btn>
    </div>
    <p class="caption">
      ...with a custom spinner, colors and size.
    </p>
    <u-btn push color="secondary" @click="customLoading">
      Show custom Loading
    </u-btn>
    <p class="caption">
      Change Message while Being Displayed
    </p>
    <u-btn push color="secondary" @click="changeMessage">
      Show & Change
    </u-btn>
  </u-page>
</template>

<script>
import { USpinnerFacebook, USpinnerGears } from 'uloc'

export default {
  methods: {
    show (options) {
      this.$uloc.loading.show(options)

      setTimeout(() => {
        this.$uloc.loading.hide()
      }, 3000)
    },
    noMessage () {
      this.show()
    },
    customLoading () {
      this.show({
        spinner: USpinnerFacebook,
        spinnerColor: 'amber',
        spinnerSize: 140,
        message: 'Some important process is in progress. Hang on...',
        messageColor: 'orange'
      })
    },
    withMessage () {
      this.show({message: 'Some important process is in progress. Hang on...'})
    },
    changeMessage () {
      this.$uloc.loading.show({message: 'First message. Gonna change it in 3 seconds...'})
      setTimeout(() => {
        this.show({
          spinner: USpinnerGears,
          spinnerColor: 'amber',
          message: 'Updated message'
        })
      }, 3000)
    }
  }
}
</script>
