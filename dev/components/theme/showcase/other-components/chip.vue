<template>
  <u-page padding class="docs-chip row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Basic Label Chips</p>
      <p>
        <u-chip icon="alarm" color="primary">
          u-chip
        </u-chip>
        <u-chip icon-right="alarm" color="primary">
          u-chip
        </u-chip>
      </p>
      <p>
        <u-chip color="primary">u-chip</u-chip>
        <u-chip color="secondary" class="shadow-1">10k</u-chip>
        <u-chip small color="secondary" class="shadow-1">10k</u-chip>
        <u-chip dense color="secondary" class="shadow-1">10k</u-chip>
        <u-chip icon="alarm" color="primary">
          u-chip
        </u-chip>
        <u-chip icon-right="alarm" color="primary">
          u-chip
        </u-chip>
        <u-chip icon="alarm" icon-right="alarm" color="primary">
          u-chip
        </u-chip>
        <u-chip color="secondary" class="shadow-1">10k</u-chip>
      </p>
      <p>
        <u-chip square color="primary">u-chip</u-chip>
        <u-chip square color="secondary" class="shadow-1">10k</u-chip>
        <u-chip square small color="secondary" class="shadow-1">10k</u-chip>
        <u-chip square dense color="secondary" class="shadow-1">10k</u-chip>
        <u-chip square icon="alarm" color="primary">
          u-chip
        </u-chip>
        <u-chip icon-right="alarm" square color="primary">
          u-chip
        </u-chip>
        <u-chip square icon="alarm" icon-right="alarm" color="primary">
          u-chip
        </u-chip>
        <u-chip square color="secondary" class="shadow-1">10k</u-chip>
      </p>

      <p class="caption">Floating Label Chips</p>
      <p>
        <u-btn push color="white" text-color="primary" label="Emails">
          <u-chip floating color="primary">22</u-chip>
        </u-btn>
        &nbsp;&nbsp;
        <u-btn color="red" label="Inbox">
          <u-chip floating color="dark">22</u-chip>
        </u-btn>
        &nbsp;&nbsp;
        <u-btn color="primary" label="Alerts">
          <u-chip floating color="grey-2" text-color="primary">22</u-chip>
        </u-btn>
        &nbsp;&nbsp;
        <u-btn round dense color="dark" icon="announcement">
          <u-chip floating color="red">22</u-chip>
        </u-btn>
        &nbsp;&nbsp;
        <u-btn round dense color="primary" icon="map">
          <u-chip floating color="red">1</u-chip>
        </u-btn>
      </p>

      <p class="caption">Advanced Label Chips</p>
      <div class="group">
        <u-chip avatar="assets/boy-avatar.png" color="grey-4" text-color="black">John</u-chip>
        <u-chip avatar="assets/boy-avatar.png" color="teal">Joe</u-chip>
        <u-chip avatar="assets/boy-avatar.png" color="black">Jim</u-chip>
        <u-chip avatar="assets/boy-avatar.png" small color="teal">Joe</u-chip>
        <br>
        <u-chip avatar="assets/boy-avatar.png" closable color="light" text-color="black">John</u-chip>
        <u-chip avatar="assets/boy-avatar.png" closable color="red">Joe</u-chip>
        <u-chip avatar="assets/boy-avatar.png" small closable color="red">Joe</u-chip>
        <u-chip avatar="assets/boy-avatar.png" dense closable color="red">Joe</u-chip>
        <br>
        <u-chip color="grey-4" text-color="black">John</u-chip>
        <u-chip color="teal">Joe</u-chip>
        <u-chip color="black">Jim</u-chip>
        <u-chip square color="primary">Jim</u-chip>
        <u-chip small color="teal">Joe</u-chip>
        <u-chip dense color="teal">Joe</u-chip>
        <u-chip dense square color="teal">Joe</u-chip>
      </div>

      <p class="caption">Tag Label Chips</p>
      <p>
        <u-chip tag icon-right="mail" color="light" text-color="black">New</u-chip>
        <u-chip dense tag icon-right="mail" color="light" text-color="black">New</u-chip>
      </p>
      <p>
        <u-chip tag closable color="red">Upcoming</u-chip>
        <u-chip dense tag closable color="red">Upcoming</u-chip>
      </p>
      <p>
        <u-chip tag square color="primary">Featured</u-chip>
        <u-chip dense tag square color="primary">Featured</u-chip>
      </p>

      <p class="caption">Pointing Label Chips</p>
      <p>
        <u-chip pointing="up" color="primary">1</u-chip>
        <u-chip pointing="down" color="primary">2</u-chip>
        <u-chip pointing="right" color="primary">3</u-chip>
        <u-chip pointing="left" color="primary">4</u-chip>
      </p>
      <p>
        <u-chip pointing="up" color="primary">Pointing Up</u-chip>
        <u-chip pointing="down" color="primary">Pointing Down</u-chip>
        <u-chip pointing="right" color="primary">Pointing Right</u-chip>
        <u-chip pointing="left" color="primary">Pointing Left</u-chip>
      </p>
      <p>
        <u-chip dense pointing="up" color="primary">Pointing Up</u-chip>
        <u-chip dense pointing="down" color="primary">Pointing Down</u-chip>
        <u-chip dense pointing="right" color="primary">Pointing Right</u-chip>
        <u-chip dense pointing="left" color="primary">Pointing Left</u-chip>
      </p>
      <p>
        <u-chip square pointing="up" color="primary">Pointing Up</u-chip>
        <u-chip square pointing="down" color="primary">Pointing Down</u-chip>
        <u-chip square pointing="right" color="primary">Pointing Right</u-chip>
        <u-chip square pointing="left" color="primary">Pointing Left</u-chip>
      </p>
      <p>
        <u-chip dense square pointing="up" color="primary">Pointing Up</u-chip>
        <u-chip dense square pointing="down" color="primary">Pointing Down</u-chip>
        <u-chip dense square pointing="right" color="primary">Pointing Right</u-chip>
        <u-chip dense square pointing="left" color="primary">Pointing Left</u-chip>
      </p>

      <p class="caption">With Icons</p>
      <p>
        <u-chip icon="mail" color="primary">
          10
        </u-chip>
        <u-chip icon-right="mail" color="tertiary">
          10
        </u-chip>
      </p>
      <p>
        <u-chip dense square icon="mail" color="primary">
          10
        </u-chip>
        <u-chip dense square icon-right="mail" color="tertiary">
          10
        </u-chip>
      </p>

      <p class="caption">With Detail</p>
      <p>
        <u-chip detail icon="mail">Detail</u-chip>
        <u-chip detail square icon="mail">Detail</u-chip>
        <u-chip detail square dense icon="mail">Detail</u-chip>
      </p>
    </div>
  </u-page>
</template>

<style lang="stylus">
.docs-chip
  .u-chip
    margin 5px
  .u-btn .u-chip
    margin initial
</style>
