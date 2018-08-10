<script>
  // import ContatoService from '../../../../domain/contato/service/contato'
  import moment from 'moment'
  import { isEmpty } from 'lodash'
  import listMails from '../mailFactory'
  import UTooltip from '../../../../../../src/components/tooltip/UTooltip'
  import UBtn from '../../../../../../src/components/button/UBtn'

  export default{
    name: 'email-detail',
    data () {
      return {
        showReply: false,
        mail: {
          id: 0,
          data: new Date(),
          assunto: 'teste',
          mensagem: 'mensagem de teste',
          lido: true,
          isExcluido: true,
          isRespondido: true,
          estrela: true,
          email: 'cobaia@gmail.com'
        },
        resposta: {
          remetente: '',
          mensagem: ''
        },
        isLoading: false,
        isDeleting: false,
        hasError: false,
        isContesting: false,
        errorMsg: null
      }
    },
    computed: {
      idEmail () {
        return this.$route.params.id
      },
      dataHora () {
        moment.locale('pt-br')
        return moment(this.mail.data).format('L LTS')
      },
      isValid () {
        return !isEmpty(this.resposta.remetente) && !isEmpty(this.resposta.mensagem)
      }
    },
    beforeMount () {
      this.getEmail()
      this.$nextTick(() => {
        this.setLido()
      })
    },
    mounted () {
    },
    destroyed () {
      this.mail = {}
      this.hasError = false
    },
    methods: {
      getEmail () {
        this.isLoading = true
        /* ContatoService.showEmail(this.idEmail)
          .then(result => {
            this.mail = result.data
          })
          .catch(error => {
            console.log(error.response.data.errors)
          }) */
        let mail = listMails.filter(item => {
          return item.id === this.idEmail
        })
        // todo: solução paliativa para caso haja refresh da página
        if (typeof mail[0] !== 'undefined') {
          this.mail = mail[0]
        }
      },
      deleteEmail () {
        this.isDeleting = true
        setTimeout(() => {
          this.isDeleting = false
        }, 1000)
        /* ContatoService.deleteEmail(this.idEmail)
          .then(result => {
            // TODO: Colocar mensagem de confirmação
            this.$router.push({ name: 'lista-emails' })
            console.log('excluiu', result.data)
            this.isDeleting = false
          })
          .catch(error => {
            console.log(error.response.data.errors)
            this.isDeleting = false
            this.hasError = true
          }) */
      },
      excluiResposta () {
        this.resposta = {}
        this.showReply = false
      },
      respondeEmail () {
        this.isContesting = true
        /* ContatoService.contestEmail(this.mail.id, this.resposta)
          .then(result => {
            console.log(result.data)
            this.isContesting = false
            this.$router.push({ name: 'lista-emails' })
          })
          .catch(error => {
            console.log(error.response.data.errors)
            this.errorMsg = 'Erro ao enviar mensagem'
          }) */
      },
      setLido () {
        // ContatoService.setLido(this.idEmail)
      }
    },
    components: {UBtn, UTooltip}
  }
</script>

<template>
  <div>
    <!-- header -->
    <div class="wrapper">
      <u-btn @click="$router.push({ name: 'lista-emails' })" color="white" size="sm"><i class="fa fa-long-arrow-left"></i></u-btn>
      <u-btn-group class="m-l">
        <u-btn size="sm" color="white"><i class="fa fa-archive"></i></u-btn>
        <u-btn size="sm" color="white"><i class="fa fa-exclamation-circle"></i></u-btn>
        <u-btn size="sm" color="white" @click="deleteEmail()"><i class="fa fa-trash"></i></u-btn>
      </u-btn-group>
      <u-btn-group class="m-l">
        <u-btn-dropdown icon="folder">
          <u-list link>
            <u-item>
              <u-item-main>Lixeira</u-item-main>
            </u-item>
            <u-item>
              <u-item-main>Spam</u-item-main>
            </u-item>
          </u-list>
        </u-btn-dropdown>
        <u-btn-dropdown label="marcar">
          <u-list link>
            <u-item>
              <u-item-main>Marcar</u-item-main>
            </u-item>
          </u-list>
        </u-btn-dropdown>
      </u-btn-group>
    </div>
    <span class="msg"v-if="isDeleting">Excluindo...</span>
    <span class="msg-error" v-else-if="hasError">Houve um problema ao excluir este e-mail</span>
    <!-- / header -->

    <div class="wrapper b-b">
      <h2 class="font-thin m-n">{{ mail.assunto }}</h2>
    </div>
    <div class="wrapper b-b">
      <img  class="img-circle thumb-xs m-r-sm" src="../assets/user-default.png">
      de <a href="javascript:;">{{ mail.email }}</a> em {{ dataHora }}
    </div>
    <div class="wrapper">
      {{ mail.mensagem }}
    </div>

    <!--Anexo
    <div class="wrapper">
      <div ng-repeat="attach in mail.attach" class="panel b-a inline m-r-sm m-b-sm bg-light">
        <div class="wrapper-xs b-b"><i class="fa fa-paperclip"></i> {{ attach.name }}</div>
        <div class="wrapper-xs w-sm lt">
          <a ng-href="{{ attach.url }}"><img ng-src="{{ attach.url }}" class="img-full"></a>
        </div>
      </div>
    </div-->
    <div class="wrapper">
      <div class="panel b-a">
        <div class="panel-heading ng-show">
          <div class="m-b-lg">
            Clique aqui para <a href="javascript:;" class="text-u-l" @click="showReply = !showReply">Responder</a> <!--ou <a href class="text-u-l" @click="showReply = !showReply">Acompanhar</a-->
          </div>
        </div>
        <div class="ng-hide" v-if="showReply">
          <div class="panel-heading b-b b-light">
            {{ resposta.remetente = mail.email }}
          </div>
          <textarea class="wrapper" style="min-height:100px; min-width: 100%; border: none" v-model="resposta.mensagem"></textarea>
          <div class="panel-footer bg-light lt">
            <u-btn class="pull-right" icon="trash" @click="excluiResposta()">t</u-btn>
            <u-btn color="primary" @click="respondeEmail()" :disabled="isContesting || !isValid">{{ isContesting ? 'Enviando...' : 'Enviar' }}</u-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .msg {
    background-color: khaki;
    padding: 5px 15px;
    display: block;
    text-align: center;
  }
  .msg-error {
    background-color: tomato;
    padding: 5px 15px;
    display: block;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
  i {
    color: #000;
  }
</style>
