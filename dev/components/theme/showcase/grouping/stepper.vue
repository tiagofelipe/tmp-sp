<template>
  <u-page padding class="row justify-center bg-white">
    <div style="width: 700px; max-width: 90vw;">
      <p class="caption">Horizontal Stepper</p>
      <u-option-group
        v-model="options"
        type="toggle"
        :options="[
          {value: 'alt', label: 'Alternative Labels (works on wide windows only)'},
          {value: 'contractable', label: 'Contractable on narrow window'},
          {value: 'global_navigation', label: 'Global Stepper navigation'},
          {value: 'step_error', label: 'Make <strong>Ad Groups</strong> step signal an error'},
          {value: 'disable_payment', label: 'Disable <strong>Payment</strong> step'},
          {value: 'progress', label: 'Show a background process is in progress'}
        ]"
      />
      <br>

      <u-stepper flat ref="stepper" v-model="step" color="primary" :alternative-labels="alt" :contractable="contractable">
        <u-step default name="campaign" title="Campaign">
          <p>
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="primary" @click="$refs.stepper.goToStep('create_ad')">Create ad now</u-btn>
            <u-btn color="primary" @click="$refs.stepper.next()">Continue</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-step name="ad_group" :error="stepError" title="Ad Groups" subtitle="Create some">
          <p>An ad group contains one or more ads which target a shared set of keywords.</p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="primary" @click="$refs.stepper.next()">Continue</u-btn>
            <u-btn color="primary" flat @click="$refs.stepper.previous()">Back</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-step name="disabled_step" :disable="disabledStep" icon="attach_money" title="Payment">
          <p>
            Try out different payment schemes for your customers, and learn how
            to enhance payments using extensions.
          </p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="primary" @click="$refs.stepper.next()">Continue</u-btn>
            <u-btn color="primary" flat @click="$refs.stepper.previous()">Back</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-step name="create_ad" title="Create an ad">
          <p>
            Try out different ad text to see what brings in the most customers, and learn how
            to enhance your ads using features like ad extensions. If you run into any problems
            with your ads, find out how to tell if they're running and how to resolve approval
            issues.
          </p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="primary" @click="$refs.stepper.goToStep('campaign')">Restart</u-btn>
            <u-btn color="primary" flat @click="$refs.stepper.previous()">Back</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-stepper-navigation v-if="globalNavigation">
          <u-btn
            v-if="step !== 'campaign'"
            color="primary"
            flat
            @click="$refs.stepper.previous()"
          >
            Back
          </u-btn>

          <u-btn color="primary" @click="$refs.stepper.next()">
            {{ step === 'create_ad' ? 'Finalize' : 'Next' }}
          </u-btn>
        </u-stepper-navigation>

        <u-inner-loading :visible="progress" />
      </u-stepper>

      <p class="caption">Vertical Stepper</p>

      <u-stepper ref="stepper2" color="secondary" v-model="step2" :alternative-labels="alt" vertical>
        <u-step default name="campaign" title="Campaign">
          <p>
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="primary" @click="$refs.stepper2.goToStep('disabled_step')">I want to pay</u-btn>
            <u-btn color="secondary" @click="$refs.stepper2.next()">Continue</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-step name="ad_group" :error="stepError" title="Ad Groups" subtitle="Create some">
          <p>An ad group contains one or more ads which target a shared set of keywords.</p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="secondary" @click="$refs.stepper2.next()">Continue</u-btn>
            <u-btn color="secondary" flat @click="$refs.stepper2.previous()">Back</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-step name="disabled_step" :disable="disabledStep" icon="attach_money" title="Payment">
          <p>
            Try out different payment schemes for your customers, and learn how
            to enhance payments using extensions.
          </p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="secondary" @click="$refs.stepper2.next()">Continue</u-btn>
            <u-btn color="secondary" flat @click="$refs.stepper2.previous()">Back</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-step name="create_ad" title="Create an ad">
          <p>
            Try out different ad text to see what brings in the most customers, and learn how
            to enhance your ads using features like ad extensions. If you run into any problems
            with your ads, find out how to tell if they're running and how to resolve approval
            issues.
          </p>

          <u-stepper-navigation v-if="!globalNavigation">
            <u-btn color="secondary" @click="$refs.stepper2.goToStep('campaign')">Restart</u-btn>
            <u-btn color="secondary" flat @click="$refs.stepper2.previous()">Back</u-btn>
          </u-stepper-navigation>
        </u-step>

        <u-inner-loading :visible="progress" />
      </u-stepper>

    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      step: 'first',
      step2: 'first',
      options: ['contractable', 'disable_payment', 'step_error']
    }
  },
  computed: {
    alt () {
      return this.options.includes('alt')
    },
    contractable () {
      return this.options.includes('contractable')
    },
    globalNavigation () {
      return this.options.includes('global_navigation')
    },
    stepError () {
      return this.options.includes('step_error')
    },
    disabledStep () {
      return this.options.includes('disable_payment')
    },
    progress () {
      return this.options.includes('progress')
    }
  }
}
</script>
