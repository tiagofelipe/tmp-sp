<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Radio group</p>
      <u-option-group
        type="radio"
        color="secondary"
        v-model="radio"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">Checkbox group</p>
      <u-option-group
        type="checkbox"
        color="amber"
        v-model="checkbox"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'primary' }
        ]"
      />

      <p class="caption">Toggle group</p>
      <u-option-group
        type="toggle"
        color="purple"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">Inline options</p>
      <u-option-group
        inline
        type="toggle"
        color="secondary"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'orange' }
        ]"
      />

      <p class="caption">Keep color for unchecked options</p>
      <u-option-group
        inline
        type="checkbox"
        keep-color
        color="orange"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris' }
        ]"
      />

      <p class="caption">Labels on left side</p>
      <u-option-group
        left-label
        inline
        type="checkbox"
        color="secondary"
        v-model="toggle"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'orange' }
        ]"
      />

      <p class="caption">Readonly</p>
      <u-option-group
        type="radio"
        readonly
        color="secondary"
        v-model="radio"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">Disabled</p>
      <u-option-group
        type="radio"
        disable
        color="secondary"
        v-model="radio"
        :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
      />

      <p class="caption">In a Field</p>
      <u-field
        icon="place"
        label="City of residence"
        helper="Pick the city you live in the most"
      >
        <u-option-group
          type="radio"
          v-model="radio"
          :options="[
            { label: 'Bucharest', value: 'bucharest', color: 'amber' },
            { label: 'London', value: 'london', color: 'secondary' },
            { label: 'Paris', value: 'paris', color: 'primary' }
          ]"
        />
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-option-group
          dark
          type="radio"
          color="secondary"
          v-model="radio"
          :options="[
            { label: 'Bucharest', value: 'bucharest' },
            { label: 'London', value: 'london' },
            { label: 'Paris', value: 'paris', color: 'red' }
          ]"
          class="u-my-md"
        />

        <u-field
          icon="place"
          label="City of residence"
          helper="Pick the city you live in the most"
        >
          <u-option-group
            dark
            type="radio"
            v-model="radio"
            :options="[
              { label: 'Bucharest', value: 'bucharest', color: 'amber' },
              { label: 'London', value: 'london', color: 'secondary' },
              { label: 'Paris', value: 'paris', color: 'primary' }
            ]"
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
      radio: 'london',
      checkbox: ['bucharest', 'paris'],
      toggle: ['paris']
    }
  }
}
</script>
