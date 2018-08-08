<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Single selection</p>
      <u-select
        v-model="select"
        :options="options"
      />
      <u-select
        stack-label="Delimited options"
        inverted-light
        color="amber"
        separator
        v-model="select"
        :options="options"
      />
      <u-select
        color="secondary"
        float-label="List with float label"
        v-model="select"
        :options="listOptions"
      />
      <u-select
        color="amber"
        stack-label="List with stack label"
        v-model="select"
        :options="options"
      />
      <u-select
        radio
        color="secondary"
        float-label="With Radio"
        v-model="select"
        :options="listOptions"
      />

      <p class="caption">Multiple selection</p>
      <u-select
        multiple
        color="indigo"
        v-model="multipleSelect"
        :options="options"
      />
      <u-select
        multiple
        inverted
        color="dark"
        stack-label="Delimited options"
        separator
        v-model="multipleSelect"
        :options="options"
      />
      <u-select
        multiple
        toggle
        inverted-light
        color="orange"
        float-label="List with float label & toggles"
        v-model="multipleSelect"
        :options="listOptions"
      />
      <u-select
        multiple
        chips
        color="purple"
        float-label="With chips"
        v-model="multipleSelect"
        :options="listOptions"
      />
      <u-select
        multiple
        float-label="With custom display value"
        :display-value="`${multipleSelect.length} companies selected`"
        v-model="multipleSelect"
        :options="listOptions"
      />

      <p class="caption">
        Lazy input
      </p>
      <span class="chip-container">
        <u-chip square color="secondary">
          Model: {{ lazy }}
        </u-chip>
      </span>
      <u-select
        :value="lazy"
        @change="val => lazy = val"
        multiple
        inverted
        color="tertiary"
        :options="options"
      />

      <p class="caption">With filter / search</p>
      <u-select
        filter
        v-model="select"
        :options="options"
      />
      <u-select
        multiple
        filter
        inverted
        color="secondary"
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">Readonly state</p>
      <u-select
        readonly
        v-model="select"
        :options="options"
      />
      <u-select
        readonly
        inverted
        v-model="select"
        :options="options"
      />

      <p class="caption">Disable state</p>
      <u-select
        disable
        v-model="select"
        :options="options"
      />
      <u-select
        disable
        inverted
        v-model="select"
        :options="options"
      />

      <p class="caption">Error/warning states</p>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-select
        :error="error"
        :warning="warning"
        float-label="Hey, an error!"
        v-model="select"
        :options="options"
      />
      <u-select
        :error="error"
        :warning="warning"
        inverted
        multiple
        float-label="Select something"
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">Hide underline</p>
      <u-select
        multiple
        hide-underline
        v-model="multipleSelect"
        :options="options"
      />

      <p class="caption">In a Field</p>
      <u-field
        icon="public"
        label="Pick employers"
        helper="Pick company names"
      >
        <u-select
          multiple
          v-model="multipleSelect"
          :options="options"
        />
      </u-field>
      <u-field
        icon="public"
        :count="5"
        label="Pick employers"
        helper="Pick company names"
      >
        <u-select
          chips
          color="amber"
          multiple
          v-model="multipleSelect"
          :options="options"
        />
      </u-field>
      <u-field
        icon="public"
        :count="5"
        label="Pick employers"
        helper="Pick company names"
      >
        <u-select
          chips
          inverted-light
          color="amber"
          multiple
          v-model="multipleSelect"
          :options="options"
        />
      </u-field>

      <p class="caption">On dark background</p>
      <div class="dark-example">
        <u-select
          dark
          stack-label="Delimited options"
          color="amber"
          separator
          v-model="select"
          :options="options"
        />
        <u-field
          dark
          icon="school"
          label="Company"
        >
          <u-select
            dark
            stack-label="Stack label"
            color="lime"
            multiple
            v-model="multipleSelect"
            :options="options"
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
      lazy: [],
      select: 'fb',
      multipleSelect: ['goog', 'twtr'],
      error: true,
      warning: false,
      options: [
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
      listOptions: [
        {
          label: 'Google',
          icon: 'email',
          value: 'goog'
        },
        {
          label: 'Facebook',
          icon: 'chat',
          description: 'Enables communication',
          value: 'fb'
        },
        {
          label: 'Twitter',
          inset: true,
          rightIcon: 'live_help',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          inset: true,
          stamp: '10 min',
          value: 'appl'
        },
        {
          label: 'Oracle',
          description: 'Some Java for today?',
          icon: 'unarchive',
          rightIcon: 'widgets',
          value: 'ora'
        }
      ]
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
