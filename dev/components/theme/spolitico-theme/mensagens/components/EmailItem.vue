<<<<<<< HEAD
<script>
  import UItemSide from '../../../../../../src/components/list/UItemSide'

  export default{
    name: 'email-item',
    props: ['mail'],
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    destroyed () {
    },
    methods: {},
    components: {UItemSide}
  }
</script>

<template>
  <u-item class="bg-white b-b" :style="'border-left: 3px solid; border-left-color: ' + mail.tag.color">
    <u-item-side class="avatar thumb">
      <img src="../assets/user-default.png">
    </u-item-side>
    <u-item-main>
      <div class="pull-right text-sm text-muted">
        <!--span class="hidden-xs ">{{ mail.data.date | moment }}</span-->
        <span class="hidden-xs">{{ mail.data.date }}</span>
        <!--i class="fa fa-paperclip m-l-sm"></i-->
      </div>
      <div class="clear">
        <div>
          <router-link :to="{ name:'view-email', params: { id: mail.id } }" class="text-md text-color" :class="{ 'not-read': !mail.lido }" >{{ mail.assunto }}</router-link>
          <span class="tag bg-grey-3 m-l-sm" v-if="mail.tag.name !== 'none'">{{mail.tag.name}}</span>
        </div>
        <div class="text-ellipsis m-t-xs" style="color: #58666e">{{ mail.mensagem }}</div>
      </div>
    </u-item-main>
  </u-item>
</template>

<style scoped>
  .not-read {
    font-weight: bolder !important;
  }
  .text-md {
    font-size: 16px;
  }
  .text-color{
    color: #69767d !important;
  }
  .b-b {
    border-bottom-color: #e7ecee;
  }
  .tag {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #58666e;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }
</style>
=======
<script>
  import UItemSide from '../../../../../../src/components/list/UItemSide'
  import moment from 'moment'

  export default{
    name: 'email-item',
    props: ['mail'],
    data () {
      return {}
    },
    computed: {
      dataHora () {
        moment.locale('pt-br')
        return moment(this.mail.data).format('L LTS')
      }
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {},
    components: {UItemSide}
  }
</script>

<template>
  <u-item class="bg-white b-b" :style="'border-left: 3px solid; border-left-color: ' + mail.tag.color">
    <u-item-side class="avatar thumb">
      <img src="../assets/user-default.png">
    </u-item-side>
    <u-item-main>
      <div class="pull-right text-sm text-muted">
        <!--span class="hidden-xs ">{{ mail.data.date | moment }}</span-->
        <span class="hidden-xs">{{ dataHora }}</span>
        <!--i class="fa fa-paperclip m-l-sm"></i-->
      </div>
      <div class="clear">
        <div>
          <router-link :to="{ name:'view-email', params: { id: mail.id } }" class="text-md text-color" :class="{ 'not-read': !mail.lido }" >{{ mail.assunto }}</router-link>
          <span class="tag bg-grey-3 m-l-sm" v-if="mail.tag.name !== 'none'">{{mail.tag.name}}</span>
          <u-icon name="star" icon-type="fa" color="yellow" v-if="mail.estrela"></u-icon>
        </div>
        <div class="text-ellipsis m-t-xs" style="color: #58666e">{{ mail.mensagem }}</div>
      </div>
    </u-item-main>
  </u-item>
</template>

<style scoped>
  .not-read {
    font-weight: bolder !important;
  }
  .text-md {
    font-size: 16px;
  }
  .text-color{
    color: #69767d !important;
  }
  .b-b {
    border-bottom-color: #e7ecee;
  }
  .tag {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #58666e;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }
</style>
>>>>>>> c7f71ec524618e8c11ea0d2a3418ad5e6d81e77f
