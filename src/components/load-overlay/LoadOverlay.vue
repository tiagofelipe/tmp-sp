<!-- borrowed from Tiago! -->

<template>
  <div v-show="isOpen">
    <div class="item-overlay show">
      <div class="item-content">
        <div class="loading md"></div>
        <div class="status m-t-xs" v-if="status !== null">{{status}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        status: null,
        isOpen: false
      }
    },
    methods: {
      open () {
        this.isOpen = true
        return this
      },
      hide () {
        this.status = null
        this.isOpen = false
        return this
      },
      message (status) {
        this.status = status
      }
    }
  }
</script>

<!-- TODO: not work in import. Verify this problem <style lang="stylus">
  .item-content{
    z-index: 99999;
    position: relative;
    top: 50%;
    margin: 0;
    text-align: center;
    display: block;
    width: 100%;
    float: left;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .loading {
    width: 100%;
    display: inline-block;
    position: relative;
    margin: 0;
    background-image: url('../../assets/svg/loader1.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    animation-name: rotate;
    animation-duration: 550ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    &.min {
      width: 20px;
      height: 20px;
    }
    &.md {
      width: 100px;
      height: 100px;
    }
  }

  .item-overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255,255,255,0.7);
    z-index: 99998;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>-->
