<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <u-list link>
        <u-list-header>User controls</u-list-header>
        <u-item>
          <u-item-main>
            <u-item-tile label>Content filtering</u-item-tile>
            <u-item-tile sublabel>Set the content filtering level to restrict apps that can be downloaded</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-main>
            <u-item-tile label>Password</u-item-tile>
            <u-item-tile sublabel>Require password for purchase or use password to restrict purchase</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item-separator />
        <u-list-header>General</u-list-header>
        <u-item tag="label">
          <u-item-side>
            <u-checkbox v-model="checked_one" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Notifications</u-item-tile>
            <u-item-tile sublabel>Notify me about updates to apps or games that I downloaded</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item tag="label">
          <u-item-side>
            <u-checkbox v-model="checked_two" color="secondary" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Sound</u-item-tile>
            <u-item-tile sublabel>Auto-update apps at anytime. Data charges may apply</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item tag="label">
          <u-item-side>
            <u-checkbox v-model="checked_three" color="red" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Auto-add widgets</u-item-tile>
            <u-item-tile sublabel>Automatically add home screen widgets</u-item-tile>
          </u-item-main>
        </u-item>
      </u-list>

      <u-list class="m-t-md">
        <u-list-header>Radios</u-list-header>
        <u-item link tag="label">
          <u-item-side>
            <u-radio v-model="option" val="opt1" />
          </u-item-side>
          <u-item-main label="Option 1" />
        </u-item>
        <u-item link tag="label">
          <u-item-side>
            <u-radio color="secondary" v-model="option" val="opt2" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Option 2</u-item-tile>
            <u-item-tile sublabel>Allows notifications</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item link tag="label">
          <u-item-side>
            <u-radio color="amber" v-model="option" val="opt3" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Option 3</u-item-tile>
            <u-item-tile sublabel lines="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</u-item-tile>
          </u-item-main>
        </u-item>

        <u-item-separator />

        <u-list-header>Toggles</u-list-header>
        <u-item link tag="label">
          <u-item-main label="Events and reminders" />
          <u-item-side right>
            <u-toggle v-model="checked_one" />
          </u-item-side>
        </u-item>
        <u-item link tag="label" multiline>
          <u-item-main>
            <u-item-tile label>Events and reminders</u-item-tile>
            <u-item-tile sublabel>Lorem ipsum</u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle v-model="checked_two" color="secondary" />
          </u-item-side>
        </u-item>
        <u-item link tag="label" multiline>
          <u-item-main>
            <u-item-tile label>Events and reminders</u-item-tile>
            <u-item-tile sublabel lines="3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            </u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle v-model="checked_three" color="amber" />
          </u-item-side>
        </u-item>

        <u-item-separator />

        <u-list-header>Selects</u-list-header>
        <u-item>
          <u-item-side icon="supervisor_account" />
          <u-item-main>
            <u-select hide-underline class="u-ma-none full-width" v-model="select" :options="selectOptions" />
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-side icon="supervisor_account" />
          <u-item-main>
            <u-select hide-underline class="u-ma-none full-width" multiple toggle v-model="multipleSelect" :options="selectOptions" />
          </u-item-main>
        </u-item>

        <u-item-separator />

        <u-list-header>Ranges</u-list-header>
        <u-item>
          <u-item-side icon="volume_down" />
          <u-item-main>
            <u-slider v-model="range" :min="0" :max="50" label />
          </u-item-main>
          <u-item-side right icon="volume_up" />
        </u-item>
        <u-item>
          <u-item-side icon="volume_down" />
          <u-item-main>
            <u-slider v-model="range" :min="0" :max="50" label color="amber" />
          </u-item-main>
          <u-item-side right icon="volume_up" />
        </u-item>
        <u-item>
          <u-item-side icon="monetization_on" />
          <u-item-main>
            <u-range v-model="doubleRange" :min="0" :max="50" label color="secondary" />
          </u-item-main>
        </u-item>
      </u-list>

      <u-list class="m-t-md dark-example" dark>
        <u-list-header>Radios</u-list-header>
        <u-item link tag="label">
          <u-item-side>
            <u-radio dark v-model="option" val="opt1" />
          </u-item-side>
          <u-item-main label="Option 1" />
        </u-item>
        <u-item link tag="label">
          <u-item-side>
            <u-radio dark color="secondary" v-model="option" val="opt2" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Option 2</u-item-tile>
            <u-item-tile sublabel>Allows notifications</u-item-tile>
          </u-item-main>
        </u-item>
        <u-item link tag="label">
          <u-item-side>
            <u-radio dark color="amber" v-model="option" val="opt3" />
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Option 3</u-item-tile>
            <u-item-tile sublabel lines="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</u-item-tile>
          </u-item-main>
        </u-item>

        <u-item-separator />

        <u-list-header>Toggles</u-list-header>
        <u-item link tag="label">
          <u-item-main label="Events and reminders" />
          <u-item-side right>
            <u-toggle dark v-model="checked_one" color="lime" />
          </u-item-side>
        </u-item>
        <u-item link tag="label" multiline>
          <u-item-main>
            <u-item-tile label>Events and reminders</u-item-tile>
            <u-item-tile sublabel>Lorem ipsum</u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle dark v-model="checked_two" color="secondary" />
          </u-item-side>
        </u-item>
        <u-item link tag="label" multiline>
          <u-item-main>
            <u-item-tile label>Events and reminders</u-item-tile>
            <u-item-tile sublabel lines="3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            </u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-toggle dark v-model="checked_three" color="amber" />
          </u-item-side>
        </u-item>

        <u-item-separator />

        <u-list-header>Selects</u-list-header>
        <u-item>
          <u-item-side icon="supervisor_account" />
          <u-item-main>
            <u-select hide-underline class="u-ma-none full-width" dark v-model="select" :options="selectOptions" />
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-side icon="supervisor_account" />
          <u-item-main>
            <u-select hide-underline class="u-ma-none full-width" dark multiple toggle v-model="multipleSelect" :options="selectOptions" />
          </u-item-main>
        </u-item>

        <u-item-separator />

        <u-list-header>Ranges</u-list-header>
        <u-item>
          <u-item-side icon="volume_down" />
          <u-item-main>
            <u-slider v-model="range" :min="0" :max="50" label color="grey" />
          </u-item-main>
          <u-item-side right icon="volume_up" />
        </u-item>
        <u-item>
          <u-item-side icon="volume_down" />
          <u-item-main>
            <u-slider v-model="range" :min="0" :max="50" label color="amber" />
          </u-item-main>
          <u-item-side right icon="volume_up" />
        </u-item>
        <u-item>
          <u-item-side icon="monetization_on" />
          <u-item-main>
            <u-range v-model="doubleRange" :min="0" :max="50" label color="secondary" />
          </u-item-main>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      checked_one: true,
      checked_two: false,
      checked_three: false,
      option: 'opt1',
      select: 'fb',
      multipleSelect: ['goog', 'twtr'],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ],
      range: 20,
      doubleRange: {
        min: 10,
        max: 35
      }
    }
  }
}
</script>
