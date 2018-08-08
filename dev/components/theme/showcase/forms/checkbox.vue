<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <u-checkbox v-model="check1" />

      <p class="caption">With label</p>
      <u-checkbox v-model="check2" color="secondary" label="Tick me" />

      <p class="caption">With label on left side</p>
      <u-checkbox v-model="check3" color="amber" label="Tick me" left-label />

      <p class="caption">With indeterminate state</p>
      <u-checkbox toggle-indeterminate v-model="indet" color="red" label="Tick me (3 states)" />

      <p class="caption">With custom icons</p>
      <u-checkbox
        v-model="check4"
        checked-icon="sentiment very satisfied"
        unchecked-icon="sentiment very dissatisfied"
      />
      <u-checkbox
        v-model="check5"
        checked-icon="visibility"
        unchecked-icon="visibility_off"
        class="m-l-md"
      />
      <u-checkbox
        v-model="check6"
        checked-icon="visibility"
        unchecked-icon="visibility_off"
        indeterminate-icon="help"
        toggle-indeterminate
        class="m-l-md"
      />

      <p class="caption">With Array as model</p>
      <u-chip square color="secondary">Model: {{ checkArray }}</u-chip>
      <br><br>
      <u-checkbox v-model="checkArray" label="One" color="yellow" val="one" />
      <u-checkbox v-model="checkArray" label="Two" val="two" color="secondary" style="margin-left: 10px" />
      <u-checkbox v-model="checkArray" label="Three" val="three" color="red" style="margin-left: 10px" />

      <p class="caption">
        With custom model values
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: "{{ customModel }}"
          </u-chip>
        </span>
      </p>
      <u-checkbox
        v-model="customModel"
        color="secondary"
        label="Do you agree with the terms & conditions?"
        true-value="yes"
        false-value="no"
      />

      <p class="caption">Keep color for unchecked state</p>
      <u-checkbox keep-color v-model="check2" color="amber" label="Keeping color" />

      <p class="caption">Readonly</p>
      <u-checkbox readonly v-model="check1" label="Readonly" />

      <p class="caption">Disabled</p>
      <u-checkbox disable v-model="check1" label="Disabled" />

      <p class="caption">As Option Group in a Field</p>
      <u-field
        icon="vibration"
        helper="Select which notifications you want to receive"
        label="Notifications"
      >
        <u-option-group
          type="checkbox"
          color="secondary"
          v-model="group"
          :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }
          ]"
        />
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-checkbox dark v-model="check2" color="amber" label="Tick me" class="u-my-md" />
        <u-field
          icon="vibration"
          helper="Select which notifications you want to receive"
          label="Notifications"
        >
          <u-option-group
            dark
            type="checkbox"
            color="secondary"
            v-model="group"
            :options="[
              { label: 'Battery too low', value: 'bat' },
              { label: 'Friend request', value: 'friend' },
              { label: 'Picture uploaded', value: 'upload', color: 'red' }
            ]"
          />
        </u-field>
      </div>

      <p class="caption">In a list</p>
      <u-list link>
        <u-item tag="label">
          <u-item-side>
            <u-checkbox v-model="list1" />
          </u-item-side>
          <u-item-main>
            <u-item-tile title>Notification</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item tag="label">
          <u-item-side>
            <u-checkbox color="secondary" v-model="list2" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Notification</u-item-tile>
            <u-item-tile sublabel>Allow notification</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item multiline tag="label">
          <u-item-side>
            <u-checkbox color="amber" v-model="list3" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Notification</u-item-tile>
            <u-item-tile sublabel lines="2">Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications</u-item-tile>
          </u-item-main>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      check1: false,
      check2: true,
      check3: true,
      check4: true,
      check5: false,
      customModel: 'no',
      indet: null,
      checkArray: ['one'],
      check6: true,
      group: ['upload'],
      list1: false,
      list2: true,
      list3: true
    }
  }
}
</script>
