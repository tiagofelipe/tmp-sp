<template>
  <u-page padding class="docs-input row justify-center bg-white">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Field components</p>
      <u-field
        :count="10"
        helper="Some helper"
      >
        <u-input v-model="text" />
      </u-field>

      <u-field
        icon="wifi"
        :count="10"
        helper="Some helper"
      >
        <u-input v-model="text" float-label="Input float label" />
      </u-field>

      <u-field
        icon="wifi"
        icon-color="amber"
        label="Field label"
        helper="Some helper"
      >
        <u-input v-model="email" type="email" suffix="@email.com" />
      </u-field>

      <br>

      <u-field
        :count="10"
        helper="Some helper"
      >
        <u-input inverted v-model="text" />
      </u-field>

      <u-field
        icon="wifi"
        :count="10"
        helper="Some helper"
      >
        <u-input inverted-light color="amber" v-model="text" stack-label="Input stack label" />
      </u-field>

      <u-field
        icon="wifi"
        label="Field label"
        helper="Some helper"
      >
        <u-input inverted color="secondary" v-model="email" type="email" suffix="@email.com" />
      </u-field>

      <p class="caption">Error/warning states</p>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-field
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <u-input v-model="text" />
      </u-field>

      <u-field
        icon="wifi"
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <u-input v-model="text" float-label="Input float label" />
      </u-field>

      <u-field
        icon="wifi"
        label="Field label"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <u-input v-model="email" type="email" suffix="@email.com" stack-label="Email address" />
      </u-field>

      <u-field
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <u-input inverted v-model="text" />
      </u-field>

      <u-field
        icon="wifi"
        :count="10"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <u-input inverted color="purple" v-model="text" stack-label="Input stack label" />
      </u-field>

      <u-field
        icon="wifi"
        label="Field label"
        helper="Some helper"
        :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning."
      >
        <u-input inverted color="secondary" v-model="email" type="email" suffix="@email.com" float-label="Email address" />
      </u-field>

      <p class="caption">Wrapping form components</p>
      <u-field
        icon="supervisor_account"
        count
        helper="Type names"
      >
        <u-chips-input float-label="Chips Input" v-model="chips" />
      </u-field>

      <u-field
        icon="work"
        label="Employees"
        :count="10"
        helper="Type names"
      >
        <u-chips-input inverted float-label="Chips Input" v-model="chips" />
      </u-field>

      <u-field
        icon="place"
        label="Meeting city"
        helper="Pick a city"
      >
        <u-select
          float-label="Select"
          v-model="select"
          :options="[
            {label: 'Bucharest', value: 'bucharest'},
            {label: 'London', value: 'london'},
            {label: 'Paris', value: 'paris'}
          ]"
        />
      </u-field>

      <u-field
        icon="cake"
        label="Desert flavor"
        helper="Pick a flavor"
      >
        <u-option-group
          color="purple"
          v-model="group"
          :options="[
            {label: 'Cherry', value: 'cherry'},
            {label: 'Pineapple', value: 'pineapple'},
            {label: 'Peach', value: 'peach'}
          ]"
        />
      </u-field>

      <u-field
        icon="access_time"
        label="Meeting time"
        helper="Pick a date"
      >
        <u-datetime
          type="date"
          v-model="date"
          color="secondary"
          float-label="Datetime"
        />
      </u-field>

      <u-field
        icon="rate_review"
        label="Review rating"
        helper="How much do you like the review?"
      >
        <u-rating size="2rem" v-model="rating" color="primary" :max="5" />
      </u-field>

      <u-field
        icon="format_color_fill"
        label="Choose color"
        helper="I'll fill it with this color"
      >
        <u-color v-model="color" color="primary" float-label="Color" />
      </u-field>

      <u-field
        icon="edit_location"
        count
        label="Favorite cities"
        helper="Pick some you want to visit"
      >
        <u-option-group
          type="toggle"
          v-model="group2"
          :options="[
            {label: 'Bucharest', value: 'bucharest'},
            {label: 'London', value: 'london'},
            {label: 'Paris', value: 'paris'}
          ]"
        />
      </u-field>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <u-field
          :count="10"
          helper="Some helper"
        >
          <u-input dark color="yellow" v-model="text" />
        </u-field>

        <u-field
          icon="place"
          label="Meeting city"
          helper="Pick a city"
        >
          <u-select
            dark
            float-label="Select"
            color="yellow"
            v-model="select"
            :options="[
              {label: 'Bucharest', value: 'bucharest'},
              {label: 'London', value: 'london'},
              {label: 'Paris', value: 'paris'}
            ]"
          />
        </u-field>

        <u-field
          dark
          icon="rate_review"
          label="Review rating"
          helper="How much do you like the review?"
        >
          <u-rating size="2rem" v-model="rating" :max="5" />
        </u-field>
      </div>

      <p class="caption">Orientation</p>
      <div class="dark-example">
        <u-field
          label="Always vertical"
          orientation="vertical"
          :count="10"
          helper="Some helper"
        >
          <u-input dark color="orange" v-model="text" />
        </u-field>

        <u-field
          orientation="vertical"
          icon="edit_location"
          label="Always vertical"
          count
          helper="Pick some you want to visit"
        >
          <u-option-group
            type="toggle"
            dark
            color="orange"
            v-model="group2"
            :options="[
              {label: 'Bucharest', value: 'bucharest'},
              {label: 'London', value: 'london'},
              {label: 'Paris', value: 'paris'}
            ]"
          />
        </u-field>

        <u-field
          orientation="horizontal"
          icon="edit_location"
          label="Always horizontal"
          count
          helper="And next go to"
        >
          <u-option-group
            type="radio"
            dark
            color="orange"
            v-model="group3"
            :options="[
              {label: 'Bucharest', value: 'bucharest'},
              {label: 'London', value: 'london'},
              {label: 'Paris', value: 'paris'}
            ]"
          />
        </u-field>

        <u-field
          dark
          orientation="horizontal"
          label="Always horizontal"
          :label-width="4"
          helper="How much do you like the review?"
        >
          <u-rating size="2rem" color="orange" v-model="rating" :max="3" />
        </u-field>
      </div>

      <p class="caption">Alignment with inset (view on desktop)</p>
      <u-field
        icon="wifi"
        label="Label"
        helper="No inset"
      >
        <u-input v-model="text2" />
      </u-field>

      <u-field
        inset="label"
        icon="wifi"
        helper="Inset label"
      >
        <u-input v-model="text2" />
      </u-field>

      <u-field
        inset="icon"
        label="Label"
        helper="Icon inset"
      >
        <u-input v-model="text2" />
      </u-field>

      <u-field
        inset="full"
        helper="Full inset"
      >
        <u-input v-model="text2" />
      </u-field>

      <p class="caption">Label width (view on desktop)</p>
      <u-field
        :label-width="3"
        icon="wifi"
        label="Width 3/12"
        helper="Some helper"
      >
        <u-input v-model="text2" />
      </u-field>

      <u-field
        :label-width="5"
        icon="wifi"
        label="Width 5/12"
        helper="Some helper"
      >
        <u-input v-model="text2" />
      </u-field>

      <u-field
        :label-width="8"
        icon="wifi"
        label="Width 8/12"
        helper="Some helper"
      >
        <u-input v-model="text2" />
      </u-field>

      <u-field
        :label-width="12"
        icon="wifi"
        label="Width 12/12"
        helper="Some helper"
      >
        <u-input v-model="text2" />
      </u-field>
    </div>
  </u-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      text: '',
      text2: '',
      email: '',
      select: 'bucharest',
      group: 'pineapple',
      group2: ['paris'],
      group3: 'london',
      chips: ['Jim'],
      color: null,
      date: null,
      rating: 0,

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
