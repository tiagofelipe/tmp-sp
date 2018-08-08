<template>
  <u-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <u-alert type="warning">
        The following examples use a bogus upload URL ({{ url }}).
        As a result, the upload process itself won't actually work for this demo.
      </u-alert>

      <p class="caption">Single File Upload</p>
      <u-uploader :url="url" />
      <u-uploader color="secondary" stack-label="Stack Label" :url="url" />
      <u-uploader color="amber" float-label="Float Label" :url="url" />
      <u-uploader color="tertiary" inverted stack-label="Stack Label" :url="url" />

      <p class="caption">Multiple File Upload</p>
      <u-uploader multiple :url="url" />
      <u-uploader color="secondary" stack-label="Stack Label" :url="url" />
      <u-uploader color="orange" inverted float-label="Float Label" :url="url" />
      <u-uploader color="brown-5" inverted stack-label="Stack Label" :url="url" />

      <p class="caption">Accepting only .jpg</p>
      <u-uploader extensions=".jpg" multiple :url="url" auto-expand />

      <p class="caption">Some of the options</p>
      <u-uploader color="secondary" multiple no-thumbnails stack-label="No thumbnails" :url="url" />
      <u-uploader color="secondary" multiple auto-expand stack-label="Auto expand" :url="url" />
      <u-uploader color="secondary" multiple hide-upload-button stack-label="Hide Upload Button" :url="url" />
      <u-uploader color="secondary" multiple hide-upload-progress stack-label="Hide Upload Progress" :url="url" />

      <p class="caption">Hide underline</p>
      <u-uploader color="secondary" multiple hide-underline :url="url" />

      <p class="caption">Before/after icons</p>
      <u-uploader
        :url="url" inverted float-label="Icon when files selected"
        :after="[{icon: 'arrow_forward', content: true, handler () {}}]"
      />
      <u-uploader
        :url="url" inverted color="secondary"
        :before="[{icon: 'arrow_back', handler () {}}]"
        :after="[{icon: 'arrow_forward', handler () {}}]"
      />

      <p class="caption">Error/warning states</p>
      <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />

      <u-uploader :url="url" color="primary" multiple :error="error" :warning="warning" float-label="Float label" />
      <u-uploader :url="url" color="primary" multiple inverted :error="error" :warning="warning" float-label="Float label" />

      <p class="caption">Read only</p>
      <u-uploader readonly :url="url" multiple color="primary" float-label="Float label" />
      <u-uploader readonly :url="url" multiple color="primary" inverted float-label="Float label" />

      <p class="caption">Disabled</p>
      <u-uploader disable :url="url" multiple color="primary" float-label="Float label" />
      <u-uploader disable :url="url" multiple color="primary" inverted float-label="Float label" />

      <p class="caption">In a Field</p>
      <u-toggle class="u-ma-xs" v-model="error2" color="negative" label="Toggle error state" />
      <u-toggle class="u-ma-xs" v-model="warning2" color="warning" label="Toggle warning state" />

      <u-field
        :count="7"
        helper="What's your account name?"
        :error="error2"
        error-label="Hey, we got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-uploader :url="url" multiple color="primary" float-label="Float label" />
      </u-field>

      <u-field
        icon="wifi"
        helper="Your awesome helper"
        :error="error2"
        error-label="We got an error"
        :warning="warning2"
        warning-label="Hey, we got a warning"
      >
        <u-uploader :url="url" multiple color="primary" inverted float-label="Float label" />
      </u-field>

      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <u-uploader dark :url="url" multiple color="lime" float-label="Float label" />

        <u-field
          icon="wifi"
          label="Wifi network"
          :count="10"
          helper="We need this for connecting you"
        >
          <u-uploader dark :url="url" multiple color="orange" float-label="Float label" />
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
      url: 'http://1.1.1.195/upload.php',

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
