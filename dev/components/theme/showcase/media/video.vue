<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">With Component</p>
      <u-video
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      />

      <p class="caption">With HTML Markup</p>
      <div class="u-video">
        <iframe
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  </u-page>
</template>
