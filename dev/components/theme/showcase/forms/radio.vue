<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Standard</p>
      <u-radio v-model="radio1" val="one" />
      <u-radio v-model="radio1" val="two" color="secondary" style="margin-left: 10px" />
      <u-radio v-model="radio1" val="three" color="black" style="margin-left: 10px" />

      <p class="caption">With label</p>
      <u-radio v-model="radio2" val="one" color="secondary" label="One" />
      <u-radio v-model="radio2" val="two" color="amber" label="Two" style="margin-left: 10px" />
      <u-radio v-model="radio2" val="three" color="red" label="Three" style="margin-left: 10px" />

      <p class="caption">With label on left side</p>
      <u-radio v-model="radio3" val="one" color="secondary" left-label label="One" />
      <u-radio v-model="radio3" val="two" color="amber" left-label label="Two" style="margin-left: 10px" />
      <u-radio v-model="radio3" val="three" color="red" left-label label="Three" style="margin-left: 10px" />

      <p class="caption">Readonly</p>
      <u-radio readonly v-model="radio3" val="one" color="secondary" label="One" />
      <u-radio readonly v-model="radio3" val="two" color="amber" label="Two" style="margin-left: 10px" />
      <u-radio readonly v-model="radio3" val="three" color="red" label="Three" style="margin-left: 10px" />

      <p class="caption">Disabled</p>
      <u-radio disable v-model="radio3" val="one" color="secondary" label="One" />
      <u-radio disable v-model="radio3" val="two" color="amber" label="Two" style="margin-left: 10px" />
      <u-radio disable v-model="radio3" val="three" color="red" label="Three" style="margin-left: 10px" />

      <p class="caption">As Option Group in a Field</p>
      <u-field
        icon="vibration"
        helper="Pick one notification"
        label="Notifications"
      >
        <u-option-group
          type="radio"
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
        <div class="u-my-md">
          <u-radio dark v-model="radio3" val="one" color="secondary" label="One" />
          <u-radio dark v-model="radio3" val="two" color="amber" label="Two" style="margin-left: 10px" />
          <u-radio dark v-model="radio3" val="three" color="red" label="Three" style="margin-left: 10px" />
        </div>

        <u-field
          icon="vibration"
          helper="Pick one notification"
          label="Notifications"
        >
          <u-option-group
            dark
            type="radio"
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
            <u-radio v-model="list" val="one" />
          </u-item-side>
          <u-item-main>
            <u-item-tile title>Notification</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item tag="label">
          <u-item-side>
            <u-radio color="secondary" v-model="list" val="two" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Notification</u-item-tile>
            <u-item-tile sublabel>Allow notification</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item multiline tag="label">
          <u-item-side>
            <u-radio color="negative" v-model="list" val="three" />
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
      radio1: 'two',
      radio2: 'one',
      radio3: 'three',
      group: 'upload',
      list: ''
    }
  }
}
</script>
