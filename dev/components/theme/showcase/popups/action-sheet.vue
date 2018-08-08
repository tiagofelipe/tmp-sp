<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see an Action Sheet in action.
      </p>

      <u-list style="max-width: 600px;">
        <u-item
          link
          v-for="dialog in types"
          :key="dialog.title"
          @click.native="dialog.handler()"
        >
          <u-item-side icon="settings" />
          <u-item-main :label="dialog.label" />
          <u-item-side right icon="keyboard_arrow_right" />
        </u-item>

        <u-item-separator />
      </u-list>

      <p class="caption">Action Sheet as a component defined in template</p>
      <u-btn
        color="secondary"
        @click="actionSheet = true"
        label="Show me"
      />

      <u-action-sheet
        v-model="actionSheet"
        title="Action Sheet"
        @ok="onOk"
        @cancel="onCancel"
        :actions="[
          {
            label: 'Delete',
            icon: 'delete',
            color: 'red',
            handler: deleteAction
          },
          {
            label: 'Share',
            icon: 'share',
            color: 'primary'
          },
          {
            label: 'Play',
            icon: 'gamepad'
          },
          {
            label: 'Favorite',
            icon: 'favorite'
          }
        ]"
      />
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      actionSheet: false,
      types: [
        {
          label: 'List with Icons',
          handler: () => {
            this.showActionSheetWithIcons()
          }
        },
        {
          label: 'Grid with Icons',
          handler: () => {
            this.showActionSheetWithIcons(true)
          }
        },
        {
          label: 'List with Avatars',
          handler: () => {
            this.showActionSheetWithAvatar()
          }
        },
        {
          label: 'Grid with Avatars',
          handler: () => {
            this.showActionSheetWithAvatar(true)
          }
        }
      ]
    }
  },
  methods: {
    showActionSheetWithIcons (grid) {
      this.$uloc.actionSheet({
        title: 'Article Actions',
        grid: grid,
        actions: [
          {
            label: 'Delete',
            icon: 'delete',
            color: 'negative',
            handler: () => {
              this.$uloc.notify('Deleted Article')
            }
          },
          {
            label: 'Share',
            icon: 'share',
            color: 'blue',
            handler: () => {
              this.$uloc.notify('Shared!')
            }
          },
          {
            label: 'Play',
            icon: 'gamepad',
            handler: () => {
              this.$uloc.notify('Launched Game')
            }
          },
          {}, // separator
          {
            label: 'Favorite',
            icon: 'favorite',
            color: 'secondary',
            handler: () => {
              this.$uloc.notify('Added to favorites')
            }
          }
        ],
        dismiss: {
          label: 'Cancel',
          handler: () => {
            this.$uloc.notify('Cancelled...')
          }
        }
      })
    },

    showActionSheetWithAvatar (grid) {
      this.$uloc.actionSheet({
        title: 'Share to',
        grid: grid,
        actions: [
          {
            label: 'Joe',
            avatar: 'assets/linux-avatar.png',
            handler: () => {
              this.$uloc.notify('Shared to Joe!')
            }
          },
          {}, // separator
          {
            label: 'John',
            avatar: 'assets/boy-avatar.png',
            handler: () => {
              this.$uloc.notify('Shared to John!')
            }
          },
          {
            label: 'Jim',
            avatar: 'assets/linux-avatar.png',
            handler: () => {
              this.$uloc.notify('Shared to Jim!')
            }
          },
          {
            label: 'Jack',
            avatar: 'assets/guy-avatar.png',
            handler: () => {
              this.$uloc.notify('Shared to Jack!')
            }
          }
        ]
      }).then(action => {
        // user picked an action
      }).catch(() => {
        // user dismissed
      })
    },
    deleteAction () {
      this.$uloc.notify('Deleting...')
    },
    onOk (item) {
      if (item.handler) {
        // if we've already triggered a handler
        return
      }
      this.$uloc.notify({
        color: 'secondary',
        message: `Clicked on "${item.label}"`
      })
    },
    onCancel () {
      this.$uloc.notify({
        color: 'tertiary',
        icon: 'done',
        message: 'Action Sheet was dismissed'
      })
    }
  }
}
</script>
