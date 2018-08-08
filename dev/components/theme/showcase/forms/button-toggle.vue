<template>
  <u-page padding class="docs-input row justify-center bg-white">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Button toggles are alternatives to Radio controls. Support for acting as checkbox will follow soon.</p>
      <p class="caption">
        Standard
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ model || '*none*' }}
          </u-chip>
        </span>
      </p>
      <u-btn-toggle
        v-model="model"
        toggle-color="primary"
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      />

      <p class="caption">Configure it with regular button props</p>
      <div class="m-b-sm">
        <u-btn-toggle
          v-model="model"
          push
          glossy
          toggle-color="primary"
          :options="[
            {label: 'One', value: 'one'},
            {label: 'Two', value: 'two'},
            {label: 'Three', value: 'three'}
          ]"
        />
      </div>

      <div class="m-b-sm">
        <u-btn-toggle
          v-model="model"
          toggle-color="primary"
          flat
          :options="[
            {label: 'One', value: 'one'},
            {label: 'Two', value: 'two'},
            {label: 'Three', value: 'three'}
          ]"
        />
      </div>

      <div>
        <u-btn-toggle
          v-model="model"
          color="amber"
          text-color="black"
          toggle-color="primary"
          rounded
          glossy
          :options="[
            {label: 'One', value: 'one'},
            {label: 'Two', value: 'two'},
            {label: 'Three', value: 'three'},
            {label: 'Four', value: 'four'}
          ]"
        />
      </div>

      <p class="caption">Readonly state</p>
      <u-btn-toggle
        readonly
        v-model="states"
        toggle-color="primary"
        push
        glossy
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      />

      <p class="caption">Disable state</p>
      <u-btn-toggle
        disable
        v-model="states"
        toggle-color="primary"
        push
        glossy
        :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
      />

      <p class="caption">In a field</p>
      <u-field
        icon="restaurant_menu"
        helper="Pick what you'd like for desert."
        label="Desert"
        :label-width="4"
      >
        <u-btn-toggle
          v-model="field"
          push
          glossy
          toggle-color="primary"
          :options="[
            {label: 'Cake', value: 'cake'},
            {label: 'Icecream', value: 'ice-cream'},
            {label: 'Bonbon', value: 'chocolate'}
          ]"
        />
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">

        <u-field
          dark
          icon="restaurant_menu"
          label="Desert"
          helper="Pick what you'd like for desert."
        >
          <u-btn-toggle
            v-model="field"
            push
            glossy
            toggle-color="primary"
            :options="[
              {label: 'Cake', value: 'cake'},
              {label: 'Ice cream', value: 'ice-cream'}
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
      model: null,
      states: 'two',
      field: 'cake'
    }
  }
}
</script>
