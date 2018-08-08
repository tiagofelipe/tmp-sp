<template>
  <u-page padding class="docs-input row justify-center bg-white">
    <div style="width: 500px; max-width: 90vw;">
      <u-input v-model="text" />
      <u-input v-model="text" placeholder="Placeholder" />
      <u-input v-model="text" stack-label="Stack label" />
      <u-input v-model="text" float-label="Float label" />
      <u-input v-model="text" float-label="Float label & placeholder" placeholder="Placeholder" />
      <u-input v-model="email" type="email" float-label="Email" suffix="@gmail.com" />
      <u-input v-model="password" type="password" float-label="Password" />
      <u-input v-model="password" type="password" float-label="Password with no toggle button" no-pass-toggle />
      <u-input v-model="text" placeholder="Clearable" clearable />
      <u-input v-model="upper" upper-case stack-label="Uppercased" />

      <div class="caption">Number inputs</div>
      <u-input v-model="num" type="number" prefix="$" stack-label="Number with prefix" />
      <u-input v-model="num" type="number" stack-label="Number with prefix, suffix, clearable" prefix="$" suffix="TSP" clearable />
      <u-input v-model="num" type="number" :step="2" prefix="$" stack-label="With step 2, use arrow keys" />
      <u-input v-model="floatNum" type="number" :decimals="2" :step="1.4" prefix="$" stack-label="Float with step 1.4, use arrow keys" />

      <div class="caption">Inverted</div>
      <u-input v-model="text" inverted />
      <u-input v-model="email" type="email" inverted color="secondary" suffix="@gmail.com" />
      <u-input v-model="password" type="password" inverted-light color="amber" clearable />
      <u-input v-model="num" type="number" align="right" suffix="EUR" inverted color="brown" stack-label="Number aligned to right" />

      <div class="caption">
        Lazy input
      </div>
      <span class="chip-container">
        <u-chip square color="secondary">
          Model: {{ lazy }}
        </u-chip>
      </span>
      <u-input :value="lazy" @change="val => lazy = val" max-length="30" />

      <div class="caption">Hide the underline</div>
      <u-input v-model="textUnderline" hide-underline />

      <div class="caption">Before/after icons</div>
      <u-input v-model="email" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="@gmail.com" />
      <u-input v-model="text" inverted float-label="Icon when input has content" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <u-input v-model="text" inverted color="secondary" :after="[{icon: 'arrow_forward', content: true, handler () {}}]" />
      <u-input v-model="password" float-label="Minimum 5 characters password" inverted-light color="amber" type="password" :after="[{icon: 'done', condition: password.length >= 5, handler () {}}]" />
      <u-input v-model="email" inverted color="brown" type="email" :before="[{icon: 'mail', handler () {}}]" suffix="@gmail.com" />
      <u-input v-model="num" inverted type="number" :before="[{icon: 'monetization_on', handler () {}}]" />

      <div class="caption">Textarea (auto-grows)</div>
      <u-input v-model="area" type="textarea" />
      <u-input v-model="area" inverted color="secondary" float-label="Inverted textarea" type="textarea" />
      <u-input v-model="area" inverted color="purple" rows="5" float-label="Inverted textarea" type="textarea" />

      <div class="caption">Textarea (has max height)</div>
      <u-input v-model="areaMax" type="textarea" :max-height="50" />

      <div class="caption">Error/warning states</div>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-input v-model="texterr" :error="error" :warning="warning" />
      <u-input v-model="texterr" :error="error" :warning="warning" float-label="Float label" />
      <u-input v-model="texterr" :error="error" :warning="warning" inverted />
      <u-input
        v-model="texterr" :error="error" :warning="warning" inverted
        :float-label="error ? 'We got an error' : 'Everything fine now'"
        :after="[
          {icon: 'warning', error: true, handler () {}},
          {icon: 'priority_high', warning: true, handler () {}}
        ]"
      />

      <div class="caption">Read only</div>
      <u-input v-model="text" readonly float-label="Read only text input" />
      <u-input v-model="text" readonly inverted-light color="amber" float-label="Read only & inverted" />
      <u-input rows="5" v-model="area" readonly type="textarea" float-label="Read only textarea" />
      <u-input rows="5" v-model="area" readonly inverted type="textarea" float-label="Read only & inverted textarea" />

      <div class="caption">Disabled</div>
      <u-input v-model="text" disable float-label="Disabled text input" />
      <u-input v-model="text" disable inverted-light color="amber" float-label="Disabled & inverted" />
      <u-input rows="5" v-model="area" disable type="textarea" float-label="Disabled textarea" />
      <u-input rows="5" v-model="area" disable inverted type="textarea" float-label="Disabled & inverted textarea" />

      <div class="caption">With loading state</div>
      <u-toggle v-model="loading" label="Toggle loading state" />
      <u-input :loading="loading" v-model="text" />
      <u-input :loading="loading" v-model="text" stack-label="Loading or not?" />
      <u-input :loading="loading" inverted v-model="text" />
      <u-input :loading="loading" inverted color="secondary" v-model="text" stack-label="Loading or not?" />

      <div class="caption">In a Field</div>
      <u-toggle class="u-ma-xs" v-model="error2" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning2" color="warning" label="Toggle warning state" />

      <br><br>
      <u-field
        :count="7"
        helper="What's your account name?"
        :error="error2"
        error-label="Hey, we got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" />
      </u-field>

      <u-field
        icon="wifi"
        helper="Your awesome helper"
        :error="error2"
        error-label="We got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" float-label="Textfield" />
      </u-field>

      <u-field
        icon="account_circle"
        label="Account"
        :count="7"
        helper="What's your account name?"
        :error="error2"
        error-label="Hey, we got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" />
      </u-field>

      <u-field
        icon="card_travel"
        label="Travel card"
        helper="Some helper"
        :error="error2"
        error-label="Wait, wait. Error!"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" float-label="Float label" />
      </u-field>

      <u-field
        icon="important_devices"
        label="Device name"
        :count="15"
        helper="Some helper"
        :error="error2"
        error-label="Wait, wait. Error!"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" inverted placeholder="On Field" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </u-field>

      <u-field
        icon="place"
        label="Your destination"
        helper="Some helper"
        :error="error2"
        error-label="Some error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" color="secondary" inverted stack-label="Stack Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </u-field>

      <u-field
        icon="wifi"
        label="Wifi network"
        helper="We need your wifi id"
        :error="error2"
        error-label="That's not a valid id number"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-input v-model="text" color="secondary" :inverted="error" float-label="Float Label" :after="[{icon: 'arrow_forward', content: true, handler () {}}]"/>
      </u-field>

      <div class="caption">On a dark background</div>
      <div class="dark-example">
        <u-input v-model="num" type="number" float-label="Colored" dark color="yellow" prefix="$" suffix="TSP" />
        <u-input v-model="num" type="number" float-label="Colored" dark color="secondary" prefix="$" suffix="TSP" />

        <u-field
          icon="wifi"
          label="Wifi network"
          :count="10"
          helper="We need this for connecting you"
        >
          <u-input
            v-model="text"
            dark
            color="yellow"
            float-label="Wifi name"
          />
        </u-field>
      </div>

      <div class="caption">With tooltip/popover</div>
      <u-input v-model="text" float-label="Tooltip">
        <u-tooltip>Some tooltip</u-tooltip>
      </u-input>
      <u-input v-model="text" float-label="Popover"> <!-- TODO: BUG -->
        <u-popover fit :offset="[0, 10]">
          <div class="bg-primary text-white" style="padding: 10px">
            Some popover content
          </div>
        </u-popover>
      </u-input>
    </div>
  </u-page>
</template>

<script>
import './docs-input.styl'

export default {
  data () {
    return {
      text: '',
      textUnderline: 'Uloc',
      upper: 'UP',
      num: 5,
      floatNum: 2.34,
      lazy: 'Lazy update - on blur',
      email: 'email',
      password: 'password',
      area: 'Before you begin with Uloc, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.',
      areaMax: '',
      texterr: 'Uloc rulz',

      error: true,
      warning: false,

      error2: false,
      warning2: false,

      loading: true
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
    },

    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
  }
}
</script>
