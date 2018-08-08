<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <u-list highlight>
        <u-list-header>Recent chats</u-list-header>
        <u-item>
          <u-item-side>
            <u-item-tile avatar>
              <img src="assets/boy-avatar.png">
            </u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile icon="chat_bubble" color="green" />
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side avatar="assets/linux-avatar.png" />
          <u-item-main label="Jim Doe" />
          <u-item-side right icon="chat_bubble" />
        </u-item>
        <u-item-separator />
        <u-list-header>Previous chats</u-list-header>
        <u-item>
          <u-item-side avatar="assets/guy-avatar.png" />
          <u-item-main label="Jack Doe" />
        </u-item>
      </u-list>

      <u-list inset-separator class="m-t-md">
        <u-item>
          <u-item-side icon="voice_chat" color="secondary" />
          <u-item-main label="Voice Chat with Joe" />
          <u-item-side right icon="voice_chat" color="secondary" />
        </u-item>
        <u-item>
          <u-item-side inverted icon="voice_chat" color="secondary" />
          <u-item-main label="Voice Chat with Joe" />
          <u-item-side right inverted icon="voice_chat" color="secondary" />
        </u-item>
        <u-item>
          <u-item-side inverted icon="voice_chat" color="amber" text-color="black" />
          <u-item-main label="Voice Chat with Joe" />
          <u-item-side right inverted icon="voice_chat" color="amber" text-color="black" />
        </u-item>
        <u-item>
          <u-item-side letter="J" color="secondary" />
          <u-item-main label="John Doe" />
          <u-item-side right letter="J" color="secondary" />
        </u-item>
        <u-item>
          <u-item-side inverted letter="J" color="secondary" />
          <u-item-main label="John Doe" />
          <u-item-side right inverted letter="J" color="secondary" />
        </u-item>
        <u-item>
          <u-item-side inverted letter="J" color="amber" text-color="black" />
          <u-item-main label="John Doe" />
          <u-item-side right inverted letter="J" color="amber" text-color="black" />
        </u-item>
      </u-list>

      <u-list inset-separator class="m-t-md">
        <u-item>
          <u-item-side>
            <u-item-tile letter color="secondary">Q</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile letter color="secondary">Q</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted letter color="secondary">Q</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted letter color="secondary">Q</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted letter color="amber" text-color="black">Q</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted letter color="amber" text-color="black">Q</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile stamp color="secondary">Stamp</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile stamp color="secondary">Stamp</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile icon="map" color="secondary" />
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile icon="map" color="secondary" />
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted icon="map" color="secondary" />
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted icon="map" color="secondary" />
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted icon="map" color="amber" text-color="black" />
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted icon="map" color="amber" text-color="black" />
          </u-item-side>
        </u-item>
      </u-list>

      <u-list inset-separator class="m-t-md dark-example" dark>
        <u-item>
          <u-item-side>
            <u-item-tile letter color="secondary">Q</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile letter color="secondary">Q</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted letter color="secondary">Q</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted letter color="secondary">Q</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted letter color="amber" text-color="black">Q</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted letter color="amber" text-color="black">Q</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile stamp color="secondary">Stamp</u-item-tile>
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile stamp color="secondary">Stamp</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile icon="map" color="secondary" />
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile icon="map" color="secondary" />
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted icon="map" color="secondary" />
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted icon="map" color="secondary" />
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side>
            <u-item-tile inverted icon="map" color="amber" text-color="black" />
          </u-item-side>
          <u-item-main label="John Doe" />
          <u-item-side right>
            <u-item-tile inverted icon="map" color="amber" text-color="black" />
          </u-item-side>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>
