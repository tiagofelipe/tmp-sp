<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">
          On a real mobile device DateTime Input opens up a Modal
          instead of a Popover.
        </span>
        <span class="mobile-only">
          On a desktop platform DateTime Input opens up a Popover
          instead of a Modal.
        </span>
      </p>

      <!-- Default: implicit "date" type -->
      <u-datetime v-model="date1" float-label="Date" />
      <u-datetime inverted color="secondary" :first-day-of-week="1" v-model="date1" stack-label="Date (Monday as first day)" />
      <u-datetime inverted color="light-blue" :first-day-of-week="6" v-model="date1" stack-label="Date (Saturday as first day)" />

      <!-- Only Time -->
      <u-datetime inverted-light color="orange" v-model="date2" type="time" float-label="Time" />
      <u-datetime color="brown" v-if="$uloc.theme === 'mat'" v-model="date2" type="time" format24h float-label="Time (24h) format" />

      <!-- Date & Time -->
      <u-datetime color="purple" v-model="date3" type="datetime" float-label="Date & Time" />

      <template v-if="$uloc.theme === 'mat'">
        <p class="caption">Minimal Datetime Interface (No header)</p>
        <u-datetime minimal color="purple" v-model="date3" type="datetime" float-label="Date & Time" />
      </template>

      <p class="caption">
        Lazy input
      </p>
      <span class="chip-container">
        <u-chip square color="secondary">
          Model: {{ lazy }}
        </u-chip>
      </span>
      <u-datetime
        :value="lazy"
        @change="val => lazy = val"
        type="date"
        color="amber"
        clearable
      />

      <p class="caption">Clearable</p>
      <u-datetime
        type="date"
        v-model="today"
        color="amber"
        clearable
      />

      <p class="caption">With default value</p>
      <u-datetime
        :default-value="defaultValue"
        type="datetime"
        v-model="date4"
        color="brown"
        clearable
        float-label="With default value & placeholder"
        placeholder="Start of this year as default"
      />

      <p class="caption">With display value</p>
      <u-datetime
        :display-value="date5 ? 'Picked date. Thanks!' : 'Pick a date, will ya?'"
        type="date"
        v-model="date5"
        inverted
        color="brown"
        stack-label="With display value"
      />

      <p class="caption">With custom format</p>
      <u-datetime
        type="date"
        v-model="date5"
        color="brown"
        format="YYYY-MMMM-dddd Do Qo Q"
      />

      <p v-if="$uloc.theme === 'mat'" class="caption">With default view</p>
      <u-datetime
        v-if="$uloc.theme === 'mat'"
        type="date"
        v-model="date4"
        color="brown"
        default-view="month"
      />

      <p class="caption">Force either modal or popover</p>
      <u-datetime v-model="today" modal stack-label="Always open modal" />
      <u-datetime v-model="today" popover stack-label="Always open popover" />

      <p class="caption">Min / max selection</p>
      <u-datetime
        v-model="date7"
        :min="tomorrow"
        stack-label="Pick date starting with tomorrow"
      />
      <u-datetime
        v-model="date8"
        :max="yesterday"
        stack-label="Pick a date in the past"
      />
      <u-datetime
        type="datetime"
        v-model="date9"
        :min="yesterday"
        :max="tomorrow"
        stack-label="Pick a date & time in an interval"
      />

      <p class="caption">Readonly state</p>
      <u-datetime
        readonly
        v-model="state"
      />
      <u-datetime
        readonly
        inverted
        v-model="state"
      />

      <p class="caption">Disable state</p>
      <u-datetime
        disable
        v-model="state"
      />
      <u-datetime
        disable
        inverted
        v-model="state"
      />

      <p class="caption">Error/Warning states</p>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-datetime
        :error="error"
        :warning="warning"
        float-label="Float label"
        v-model="state"
      />
      <u-datetime
        :error="error"
        :warning="warning"
        inverted
        float-label="Float label"
        v-model="state"
      />

      <p class="caption">Hide underline</p>
      <u-datetime
        hide-underline
        v-model="state"
      />

      <p class="caption">In a Field</p>
      <u-field
        icon="local_movies"
        helper="Pick when to schedule a movie"
      >
        <u-datetime
          v-model="date1"
          :min="today"
          float-label="Pick date"
        />
      </u-field>
      <u-field
        icon="golf_course"
        label="Golf course"
        helper="Pick a date"
      >
        <u-datetime
          inverted
          color="purple"
          v-model="date1"
        />
      </u-field>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <u-datetime
          dark
          stack-label="Pick start date & time"
          color="amber"
          v-model="date6"
          type="datetime"
        />
        <u-field
          dark
          icon="school"
          label="Javascript"
          helper="Pick a start time"
        >
          <u-datetime
            dark
            color="secondary"
            v-model="date6"
            type="time"
          />
        </u-field>
      </div>

      <p class="caption">In a List</p>
      <u-list>
        <u-list-header>Date or Time</u-list-header>
        <u-item>
          <u-item-side icon="access_time" />
          <u-item-main>
            <u-datetime class="no-margin" v-model="date1" type="time" />
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-side icon="update" />
          <u-item-main>
            <u-datetime class="no-margin" v-model="date2" type="date" />
          </u-item-main>
        </u-item>
        <u-item-separator />
        <u-list-header>Date & Time</u-list-header>
        <u-item>
          <u-item-side icon="notifications" />
          <u-item-main>
            <u-datetime class="no-margin" v-model="date3" type="datetime" />
          </u-item-main>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>

<script>
import { date } from 'uloc'
import '../docs-input.styl'

const today = new Date()
const { startOfDate, addToDate, subtractFromDate } = date

export default {
  data () {
    return {
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      date7: null,
      date8: null,
      date9: null,
      lazy: null,

      error: true,
      warning: false,
      today,
      tomorrow: addToDate(today, { days: 1 }),
      yesterday: subtractFromDate(today, { days: 1 }),
      state: new Date(),

      defaultValue: startOfDate(today, 'year')
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
