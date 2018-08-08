<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Simplest example, with a label only.</p>
      <u-alert color="primary">With label only</u-alert>

      <p class="caption">With label and icon</p>
      <u-alert icon="map" color="orange">With label and icon</u-alert>

      <p class="caption">With avatar</p>
      <u-alert avatar="assets/boy-avatar.png" color="secondary">
        With label and icon
      </u-alert>

      <p class="caption">Using props, with subtitle.</p>
      <u-alert
        avatar="assets/boy-avatar.png"
        color="primary"
        message="Jack"
        detail="Your friend just pinged you"
      />

      <p class="caption">With Action(s)</p>
      <u-alert
        icon="alarm"
        color="tertiary"
        :actions="[
          { label: 'Snooze', handler: () => { this.$uloc.notify('Snoozed') } }
        ]"
        class="m-b-sm"
      >
        It's time to take a break
      </u-alert>
      <u-alert
        icon="assignment"
        color="brown-5"
        :actions="[
          { label: 'Snooze', icon: 'alarm', handler: () => { this.$uloc.notify('Snoozed') } },
          { label: 'Dismiss', icon: 'done', handler: () => { this.$uloc.notify('Dismissed') } }
        ]"
        class="m-b-sm"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ducimus voluptas recusandae numquam repellendus blanditiis aperiam unde. Mollitia sunt, ex distinctio eum debitis pariatur omnis ducimus molestiae optio quis eos.
      </u-alert>
      <u-alert
        color="primary"
        :actions="[
          { label: 'OK', icon: 'watch_later', handler: () => { this.$uloc.notify('So please take that break') } }
        ]"
      >
        It's time to take a break
      </u-alert>

      <p class="caption">
        Combining alerts with animations.
        <u-btn
          v-if="!visible || !visible2"
          flat rounded
          color="primary"
          @click="() => { visible = visible2 = true }"
          label="Reset"
        />
      </p>

      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight"
        appear
      >
        <u-alert
          v-if="visible"
          color="secondary"
          icon="cloud"
          appear
          :actions="[{ label: 'Dismiss', handler: () => { visible = false } }]"
          class="m-b-sm"
        >
          Lorem ipsum dolor sit amet.
        </u-alert>
      </transition>

      <transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        appear
      >
        <u-alert
          v-if="visible2"
          type="negative"
          :actions="[{ label: 'Snooze', icon: 'alarm', handler: () => { visible2 = false } }]"
        >
          Lorem ipsum dolor sit amet.
        </u-alert>
      </transition>

      <p class="caption">Default types of alerts</p>
      <u-alert
        v-for="type in ['positive', 'info', 'negative', 'warning']"
        :key="type"
        :type="type"
        class="m-b-sm"
      >
        Alert type: "{{ type }}"
      </u-alert>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      visible: true,
      visible2: true
    }
  }
}
</script>
