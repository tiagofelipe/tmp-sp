<template>
  <u-page padding style="max-width: 800px" class="page-jumbotron">
    <u-jumbotron>
      <div class="u-display-3">Hello, world!</div>
      <div class="u-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="u-hr u-my-lg">
      <div class="u-title m-b-md">Check out Uloc Framework components.</div>
      <u-btn color="primary" class="u-py-sm u-px-xl" label="Learn more" />
    </u-jumbotron>

    <u-jumbotron class="bg-primary" dark>
      <div class="u-display-3">Hello, world!</div>
      <div class="u-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="u-hr u-my-lg">
      <div class="u-title m-b-md">Check out Uloc Framework components.</div>
      <u-btn color="white" text-color="primary" class="u-py-sm u-px-xl" label="Learn more" />
    </u-jumbotron>

    <u-jumbotron gradient="circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%">
      <div class="u-display-3">Hello, world!</div>
      <div class="u-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="u-hr u-my-lg">
      <div class="u-title m-b-md">Check out Uloc Framework components.</div>
      <u-btn color="primary" class="u-py-sm u-px-xl" label="Learn more" />
    </u-jumbotron>

    <u-jumbotron dark img-src="assets/mountains.jpg">
      <div class="u-display-3">Hello, world!</div>
      <div class="u-subheading">
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </div>
      <hr class="u-hr u-my-lg">
      <div class="u-title m-b-md">Check out Uloc Framework components.</div>
      <u-btn color="primary" class="u-py-sm u-px-xl" label="Learn more" />
    </u-jumbotron>
  </u-page>
</template>

<style lang="stylus">
.page-jumbotron
  .u-jumbotron + .u-jumbotron
    margin-top 25px
</style>
