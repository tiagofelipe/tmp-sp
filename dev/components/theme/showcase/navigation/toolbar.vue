<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Toolbars are mainly used in Layout headers and footers, but they can be used
        in your Page view too.
      </p>

      <u-toolbar>
        <u-btn flat round dense icon="menu" />
        <u-toolbar-title>
          Toolbar
        </u-toolbar-title>
        <u-btn flat round dense icon="more_vert" />
      </u-toolbar>

      <br>

      <u-toolbar inverted>
        <u-btn flat round dense icon="menu" />
        <u-toolbar-title>
          Toolbar
        </u-toolbar-title>
        <u-btn flat round dense icon="more_vert" />
      </u-toolbar>

      <p class="caption">
        They come in all colors.
      </p>

      <u-toolbar color="secondary">
        <u-btn flat round dense icon="assignment_ind" />
        <u-toolbar-title>
          Toolbar
        </u-toolbar-title>
        <u-btn flat round dense icon="sim_card" />
        <u-btn flat round dense icon="gamepad" />
      </u-toolbar>
      <u-toolbar color="yellow" text-color="dark">
        <u-btn flat round dense icon="assignment_ind" />
        <u-toolbar-title>
          Toolbar
          <span slot="subtitle">Subtitle</span>
        </u-toolbar-title>
        <u-btn flat round dense icon="sim_card" />
        <u-btn flat round dense icon="gamepad" />
      </u-toolbar>
      <u-toolbar color="orange">
        <u-btn flat round dense icon="mail">
          <u-chip floating color="red">2</u-chip>
        </u-btn>
        <u-toolbar-title>
          Long title for Toolbar. Very very very very very very long title.
        </u-toolbar-title>
        <u-btn flat round dense icon="alarm" />
        <u-btn flat round dense icon="router" />
        <u-btn flat round dense icon="keyboard" />
      </u-toolbar>
      <u-toolbar color="dark">
        <u-btn flat round dense icon="menu" />
        <u-btn flat round dense icon="security" />
        <u-toolbar-title>
          Toolbar
        </u-toolbar-title>
        <u-btn flat round dense icon="headset" />
        <u-btn flat round dense icon="tv" />
      </u-toolbar>

      <p class="caption">
        And inverted:
      </p>

      <u-toolbar inverted color="secondary">
        <u-btn flat round dense icon="assignment_ind" />
        <u-toolbar-title>
          Toolbar
        </u-toolbar-title>
        <u-btn flat round dense icon="sim_card" />
        <u-btn flat round dense icon="gamepad" />
      </u-toolbar>
      <u-toolbar inverted color="purple">
        <u-btn flat round dense icon="assignment_ind" />
        <u-toolbar-title>
          Toolbar
          <span slot="subtitle">Subtitle</span>
        </u-toolbar-title>
        <u-btn flat round dense icon="sim_card" />
        <u-btn flat round dense icon="gamepad" />
      </u-toolbar>
      <u-toolbar inverted color="orange">
        <u-btn flat round dense icon="mail" />
        <u-toolbar-title>
          Long title for Toolbar. Very very very very very very long title.
        </u-toolbar-title>
        <u-btn flat round dense icon="alarm" />
        <u-btn flat round dense icon="router" />
        <u-btn flat round dense icon="keyboard" />
      </u-toolbar>
      <u-toolbar inverted color="dark">
        <u-btn flat round dense icon="menu" />
        <u-btn flat round dense icon="security" />
        <u-toolbar-title>
          Toolbar
        </u-toolbar-title>
        <u-btn flat round dense icon="headset" />
        <u-btn flat round dense icon="tv" />
      </u-toolbar>
    </div>
  </u-page>
</template>
