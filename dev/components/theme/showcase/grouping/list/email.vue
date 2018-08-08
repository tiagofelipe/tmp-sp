<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <u-list highlight inset-separator>
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" />
          <u-item-side right stamp="1 min" />
        </u-item>
        <u-item multiline>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main
            label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
            label-lines="1"
            sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
            sublabel-lines="2"
          />
          <u-item-side right>
            <u-item-tile stamp>1 week ago</u-item-tile>
          </u-item-side>
        </u-item>
        <u-item multiline>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main
            label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
            label-lines="2"
            sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
          />
          <u-item-side right stamp="10 min" />
        </u-item>
        <u-item multiline>
          <u-item-side>
            <u-item-tile avatar>
              <img src="assets/boy-avatar.png">
            </u-item-tile>
          </u-item-side>
          <u-item-main>
            <u-item-tile label>Brunch <span>5</span></u-item-tile>
            <u-item-tile sublabel lines="2">
              John Doe John Doe John Doe John Doe John Doe John Doe
              John Doe John Doe John Doe John Doe John Doe John Doe
              John Doe John Doe John Doe John Doe
            </u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-item-tile stamp>10 min</u-item-tile>
            <u-item-tile icon="star" color="yellow" />
          </u-item-side>
        </u-item>
        <u-item multiline>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main>
            <u-item-tile label lines="1">Brunch this weekend? Yeah, this weekend. Really. This one.</u-item-tile>
            <u-item-tile sublabel lines="2">
              <span>John Doe</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </u-item-tile>
          </u-item-main>
          <u-item-side right>
            <u-item-tile stamp>2 years</u-item-tile>
            <u-item-tile icon="mail" color="primary" />
          </u-item-side>
        </u-item>
      </u-list>

      <u-list inset-separator class="m-t-md">
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend?" />
          <u-item-side right>
            <u-btn flat round dense icon="more_vert">
              <u-popover>
                <u-list link>
                  <u-item v-close-overlay>
                    <u-item-main label="Reply" />
                  </u-item>
                  <u-item v-close-overlay>
                    <u-item-main label="Forward" />
                  </u-item>
                  <u-item v-close-overlay>
                    <u-item-main label="Delete" />
                  </u-item>
                </u-list>
              </u-popover>
            </u-btn>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend?" />
          <u-item-side right>
            <u-chip square color="primary" class="shadow-2">10k</u-chip>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend?" />
          <u-item-side right>
            <u-item-tile stamp>10 min ago</u-item-tile>
            <span class="text-amber">
              <u-item-tile icon="star" v-for="n in 2" :key="n" />
            </span>
          </u-item-side>
        </u-item>
      </u-list>

      <u-list inset-separator class="m-t-md dark-example" dark>
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend?" />
          <u-item-side right>
            <u-btn flat round dense icon="more_vert" text-color="white">
              <u-popover>
                <u-list link>
                  <u-item v-close-overlay>
                    <u-item-main label="Reply" />
                  </u-item>
                  <u-item v-close-overlay>
                    <u-item-main label="Forward" />
                  </u-item>
                  <u-item v-close-overlay>
                    <u-item-main label="Delete" />
                  </u-item>
                </u-list>
              </u-popover>
            </u-btn>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend?" />
          <u-item-side right>
            <u-chip square color="secondary" class="shadow-2">10k</u-chip>
          </u-item-side>
        </u-item>
        <u-item>
          <u-item-side avatar="assets/boy-avatar.png" />
          <u-item-main label="Brunch this weekend?" />
          <u-item-side right>
            <u-item-tile stamp>10 min ago</u-item-tile>
            <span class="text-amber">
              <u-item-tile icon="star" v-for="n in 2" :key="n" />
            </span>
          </u-item-side>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>
