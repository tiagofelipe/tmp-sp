<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <div class="u-display-1 m-b-md text-grey">Chat with avatar</div>
      <p class="caption">To mix messages with avatar and without avatar in the same thread, use a placeholder avatar image.</p>
      <u-chat-message
        v-for="(msg, index) in messages"
        :key="`reg-${index}`"
        :label="msg.label"
        :sent="msg.sent"
        :text-color="msg.textColor"
        :bg-color="msg.bgColor"
        :name="msg.name"
        :avatar="msg.avatar"
        :text="msg.text"
        :stamp="msg.stamp"
      />
      <u-chat-message
        name="Vladimir"
        avatar="assets/boy-avatar.png"
      >
        <u-spinner-dots size="2rem" />
      </u-chat-message>

      <div class="u-display-1 m-t-xl m-b-md text-grey">Chat using avatar slot</div>
      <u-chat-message
        name="Vladimir"
        :text="['Use your own spacing or class u-message-avatar']"
      >
        <u-icon name="face" size="4em" slot="avatar"/>
      </u-chat-message>

      <div class="u-display-1 m-t-xl m-b-md text-grey">Chat without avatar</div>
      <u-chat-message
        v-for="(msg, index) in messages"
        :key="`avatar-${index}`"
        :label="msg.label"
        :sent="msg.sent"
        :text-color="msg.textColor"
        :bg-color="msg.bgColor"
        :name="msg.name"
        :text="msg.text"
        :stamp="msg.stamp"
      />
      <u-chat-message
        name="Vladimir"
      >
        <u-spinner-dots size="2rem" />
      </u-chat-message>
    </div>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      messages: [
        {
          label: 'Friday, 18th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'assets/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          textColor: 'white',
          bgColor: 'black',
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Saturday, 19th'
        },
        {
          name: 'Vladimir',
          bgColor: 'amber',
          textColor: 'white',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'assets/boy-avatar.png',
          stamp: '13:55'
        },

        {
          label: 'Sunday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'assets/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Monday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'assets/boy-avatar.png',
          stamp: '13:55'
        },

        {
          label: 'Tuesday, 21th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'assets/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Sunday, 19th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'assets/boy-avatar.png',
          stamp: '13:55'
        },

        {
          label: 'Wednesday, 22th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'assets/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'assets/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Thursday, 23th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'assets/boy-avatar.png',
          stamp: '13:55'
        }
      ]
    }
  }
}
</script>
