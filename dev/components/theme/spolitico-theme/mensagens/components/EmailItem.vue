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
  <u-item class>
    <u-item-side class="avatar thumb">
      <img src="../assets/user-default.png">
    </u-item-side>
    <u-item-main>
      <div class="pull-right text-sm text-muted">
        <!--span class="hidden-xs ">{{ mail.data.date | moment }}</span-->
        <span class="hidden-xs ">{{ mail.data.date }}</span>
        <!--i class="fa fa-paperclip m-l-sm"></i-->
      </div>
      <div class="clear">
        <div>
          <router-link :to="{ name:'view-email', params: { id: mail.id } }" class="text-md" :class="{ 'not-read': !mail.lido }" >{{ mail.assunto }}</router-link>
          <!--span class="label bg-light m-l-sm ">descobrir o que colocar aqui</span-->
        </div>
        <div class="text-ellipsis m-t-xs ">{{ mail.mensagem }}</div>
      </div>
    </u-item-main>
  </u-item>
</template>

<style scoped>
  .not-read {
    font-weight: bolder !important;
  }
</style>
