<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <u-toggle v-model="check1" />

      <p class="caption">With label</p>
      <u-toggle v-model="check2" color="secondary" label="Tick me" />

      <p class="caption">With label on left side</p>
      <u-toggle v-model="check3" color="amber" label="Tick me" left-label />

      <p class="caption">With custom icons</p>
      <u-toggle
        v-model="check4"
        checked-icon="sentiment very satisfied"
        unchecked-icon="sentiment very dissatisfied"
      />
      <u-toggle
        v-model="check5"
        checked-icon="visibility"
        unchecked-icon="visibility_off"
        style="margin-left: 25px"
      />

      <p class="caption">With Array as model</p>
      <u-chip square color="secondary">Model: {{ checkArray }}</u-chip>
      <br><br>
      <u-toggle v-model="checkArray" label="One" color="yellow" val="one" />
      <u-toggle v-model="checkArray" label="Two" val="two" color="secondary" style="margin-left: 10px" />
      <u-toggle v-model="checkArray" label="Three" val="three" color="red" style="margin-left: 10px" />

      <p class="caption">
        With custom model values
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: "{{ customModel }}"
          </u-chip>
        </span>
      </p>
      <u-toggle
        v-model="customModel"
        color="secondary"
        label="Do you agree with the terms & conditions?"
        true-value="yes"
        false-value="no"
      />

      <p class="caption">Keep color for unchecked state</p>
      <u-toggle keep-color v-model="check2" color="amber" label="Keeping color" />

      <p class="caption">Readonly</p>
      <u-toggle readonly v-model="check1" label="Readonly" />

      <p class="caption">Disabled</p>
      <u-toggle disable v-model="check1" label="Disabled" />

      <p class="caption">As Option Group in a Field</p>
      <u-field
        icon="vibration"
        helper="Select which notifications you want to receive"
        label="Notifications"
      >
        <u-option-group
          type="toggle"
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
        <u-toggle dark v-model="check2" color="amber" label="Toggle me" class="u-my-md" />
        <u-field
          icon="vibration"
          helper="Select which notifications you want to receive"
          label="Notifications"
        >
          <u-option-group
            dark
            type="toggle"
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
          <u-item-main>
            <u-item-tile title>Notification</u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle v-model="list1" />
          </u-item-side>
        </u-item>
        <u-item tag="label">
          <u-item-main>
            <u-item-tile label>Notification</u-item-tile>
            <u-item-tile sublabel>Allow notification</u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle color="secondary" v-model="list2" />
          </u-item-side>
        </u-item>
        <u-item multiline tag="label">
          <u-item-main>
            <u-item-tile label>Notification</u-item-tile>
            <u-item-tile sublabel lines="2">Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications</u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle color="amber" v-model="list3" />
          </u-item-side>
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
      checkArray: ['one'],
      check6: true,
      customModel: 'no',
      group: ['upload'],
      list1: false,
      list2: true,
      list3: true
    }
  }
}
</script>
