<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each type to see it in action.
      </p>

      <u-list style="max-width: 600px;">
        <u-item
          link
          v-for="dialog in types"
          :key="dialog.label"
          @click.native="dialog.handler()"
        >
          <u-item-side :icon="dialog.icon" />
          <u-item-main :label="dialog.label" />
          <u-item-side right icon="keyboard_arrow_right" />
        </u-item>
        <u-item-separator />
        <u-list-header>Options</u-list-header>
        <u-item
          link
          v-for="dialog in options"
          :key="dialog.label"
          @click.native="dialog.handler()"
        >
          <u-item-side :icon="dialog.icon" />
          <u-item-main :label="dialog.label" />
          <u-item-side right icon="keyboard_arrow_right" />
        </u-item>
        <u-item-separator />
        <u-list-header>Appear from Edges</u-list-header>
        <u-item
          link
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
          @click.native="openSpecialPosition(position)"
        >
          <u-item-side :icon="positionalIcon[position]" />
          <u-item-main :label="`Dialog from ${position}`" />
          <u-item-side right icon="keyboard_arrow_right" />
        </u-item>
      </u-list>

      <p class="caption">
        For complex cases where you need a certain content (like different form components),
        you can use the Dialog as a component. This way you can also add your custom logic
        for content validation.
      </p>
      <u-btn color="primary" @click="customDialogModel = true" label="Show Dialog" />

      <u-dialog
        v-model="customDialogModel"
        stack-buttons
        prevent-close
        @cancel="onCancel"
        @ok="onOk"
        @show="onShow"
        @hide="onHide"
      >
        <!-- This or use "title" prop on <u-dialog> -->
        <span slot="title">Favorite Superhero</span>

        <!-- This or use "message" prop on <u-dialog> -->
        <span slot="message">What is your superhero of choice?</span>

        <div slot="body">
          <u-field
            icon="account_circle"
            helper="We need your name so we can send you to the movies."
            label="Your name"
            :label-width="3"
            :error="nameError"
          >
            <u-input v-model="name" />
          </u-field>
        </div>

        <template slot="buttons" slot-scope="props">
          <u-btn color="primary" label="Choose Superman" @click="choose(props.ok, 'Superman')" />
          <u-btn color="black" label="Choose Batman" @click="choose(props.ok, 'Batman')" />
          <u-btn color="negative" label="Choose Spiderman" @click="choose(props.ok, 'Spiderman')" />
          <u-btn flat label="No thanks" @click="props.cancel" />
        </template>
      </u-dialog>
    </div>
  </u-page>
</template>

<script>
export default {
  methods: {
    openSpecialPosition (position) {
      this.$uloc.dialog({
        title: 'Positioned',
        message: `This dialog appears from ${position}.`,
        position
      })
    },
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    },
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    },
    async choose (okFn, hero) {
      if (this.name.length === 0) {
        this.error = true
        this.$uloc.dialog({
          title: 'Please specify your name!',
          message: `Can't buy tickets without knowing your name.`
        })
      }
      else {
        await okFn()
        this.$uloc.notify(`Ok ${this.name}, going with ${hero}`)
      }
    }
  },
  watch: {
    name (val) {
      const err = val.length === 0
      if (this.nameError !== err) {
        this.nameError = err
      }
    }
  },
  data () {
    return {
      customDialogModel: false,
      name: '',
      nameError: false,
      positionalIcon: {
        top: 'arrow_upward',
        right: 'arrow_forward',
        bottom: 'arrow_downward',
        left: 'arrow_back'
      },
      types: [
        {
          label: 'Alert',
          icon: 'warning',
          handler: () => {
            this.$uloc.dialog({
              title: 'Alert',
              message: 'Modern HTML5 front-end framework on steroids.'
            })
          }
        },
        {
          label: 'Confirm',
          icon: 'done_all',
          handler: () => {
            this.$uloc.dialog({
              title: 'Confirm',
              message: 'Modern HTML5 front-end framework on steroids.',
              ok: 'Agree',
              cancel: 'Disagree'
            }).then(() => {
              this.$uloc.notify('Agreed!')
            }).catch(() => {
              this.$uloc.notify('Disagreed...')
            })
          }
        },
        {
          label: 'Prompt',
          icon: 'help',
          handler: () => {
            this.$uloc.dialog({
              title: 'Prompt',
              message: 'Modern front-end framework on steroids.',
              prompt: {
                model: '',
                type: 'text' // optional
              },
              cancel: true,
              color: 'secondary'
            }).then(data => {
              this.$uloc.notify(`You typed: "${data}"`)
            }).catch(() => {
              this.$uloc.notify('Ok, no mood for talking, right?')
            })
          }
        },
        {
          label: 'Single Choice Selection',
          icon: 'radio_button_checked',
          handler: () => {
            this.$uloc.dialog({
              title: 'Options',
              message: 'Modern front-end framework on steroids.',
              options: {
                type: 'radio',
                model: 'opt2',
                items: [
                  {label: 'Option 1', value: 'opt1', color: 'secondary'},
                  {label: 'Option 2', value: 'opt2'},
                  {label: 'Option 3', value: 'opt3'}
                ]
              },
              cancel: true,
              preventClose: true,
              color: 'secondary'
            }).then(data => {
              this.$uloc.notify(`You selected: ${data}`)
            })
          }
        },
        {
          label: 'Multiple Choice Selection',
          icon: 'check_box',
          handler: () => {
            this.$uloc.dialog({
              title: 'Options',
              message: 'Modern front-end framework on steroids.',
              options: {
                type: 'checkbox',
                model: [],
                items: [
                  {label: 'Option 1', value: 'opt1', color: 'secondary'},
                  {label: 'Option 2', value: 'opt2'},
                  {label: 'Option 3', value: 'opt3'}
                ]
              },
              cancel: true,
              preventClose: true,
              color: 'secondary'
            }).then(data => {
              this.$uloc.notify(`You selected: ${JSON.stringify(data)}`)
            })
          }
        }
      ],
      options: [
        {
          label: 'Stacked Buttons',
          icon: 'dns',
          handler: () => {
            this.$uloc.dialog({
              title: 'Stacked buttons',
              message: 'Go to a movie.',
              ok: 'Yes, please!',
              cancel: 'Uhm, nope',
              stackButtons: true
            }).then(() => {
              this.$uloc.notify('Agreed!')
            }).catch(() => {
              this.$uloc.notify('Disagreed...')
            })
          }
        },
        {
          label: 'Prevent accidental close',
          icon: 'power_settings_new',
          handler: () => {
            this.$uloc.dialog({
              title: 'Prevent close',
              message: 'This dialog cannot be dismissed by clicking/tapping on the background overlay.',
              ok: true,
              cancel: true,
              preventClose: true
            }).then(() => {
              this.$uloc.notify('You said OK!')
            }).catch(() => {
              this.$uloc.notify(`You didn't agree`)
            })
          }
        }
      ]
    }
  }
}
</script>
