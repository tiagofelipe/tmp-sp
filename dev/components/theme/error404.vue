<template>
  <div class="fixed-center text-center">
    <p>
      :/
    </p>
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <u-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Go back</u-btn>
  </div>
</template>
