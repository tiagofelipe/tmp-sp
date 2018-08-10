<script>
  // import ContatoService from '../../../../domain/contato/service/contato'
  import { isEmpty } from 'lodash'
  export default{
    name: 'novo-email',
    data () {
      return {
        mail: {
          destinatario: '',
          assunto: '',
          mensagem: ''
        },
        isLoading: false,
        hasError: false,
        confirmMsg: false
      }
    },
    computed: {
      isValid () {
        return !isEmpty(this.mail.destinatario) && !isEmpty(this.mail.assunto) && !isEmpty(this.mail.mensagem)
      }
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {
      sendNewEmail () {
        this.isLoading = true
        ContatoService.sendNewEmail(this.mail)
          .then(result => {
            if (this.hasError) {
              this.hasError = false
            }
            this.confirmMsg = true
            this.isLoading = false
            console.log(result.data)
            window.setTimeout(() => {
              this.mail.destinatario = ''
              this.mail.assunto = ''
              this.mail.mensagem = ''
              this.confirmMsg = false
            }, 2000)
          })
          .catch(error => {
            console.log(error.response.data.errors)
            this.isLoading = false
            this.hasError = true
          })
      }
    },
    components: {}
  }
</script>

<template>
  <div>
    <!-- header -->
    <div class="wrapper bg-light lter b-b">
      <div class="btn-group m-r-sm">
        <a href class="btn btn-sm btn-default w-xxs w-auto-xs" tooltip="Save"><i class="fa fa-file"></i></a>
        <router-link :to="{ name: 'contatos' }" class="btn btn-sm btn-default w-xxs w-auto-xs" tooltip="Discard"><i class="fa fa-trash-o"></i></router-link>
      </div>
    </div>
    <span class="msg" v-if="confirmMsg">Mensagem enviada</span>
    <span class="msg-error" v-if="hasError && !confirmMsg">Houve um problema ao enviar este e-mail. <a @click="sendNewEmail()" style="text-decoration: underline">Tentar novamente</a></span>
    <!-- / header -->
    <div class="wrapper">
      <form name="newMail" class="form-horizontal m-t-lg">
        <div class="form-group">
          <label class="col-lg-2 control-label">Para:</label>
          <div class="col-lg-8">
            <!--select ui-jq="chosen" data-placeholder="Escolha um email" class="form-control" multiple>
              <option value="">TODO: lista de emails já registrados</option>
            </select -->
            <input type="email" class="form-control" v-model="mail.destinatario">
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-2 control-label">Assunto:</label>
          <div class="col-lg-8">
            <input type="text" class="form-control" v-model="mail.assunto">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Mensagem</label>
          <div class="col-sm-10">
            <!--div class="btn-toolbar m-b-sm btn-editor" data-role="editor-toolbar" data-target="#editor">
              <div class="btn-group dropdown">
                <a class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" tooltip="Font"><i class="fa text-base fa-font"></i><b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href dropdown-toggle data-edit="fontName Serif" style="font-family:'Serif'">Serif</a></li>
                  <li><a href dropdown-toggle data-edit="fontName Sans" style="font-family:'Sans'">Sans</a></li>
                  <li><a href dropdown-toggle data-edit="fontName Arial" style="font-family:'Arial'">Arial</a></li></ul>
              </div>
              <div class="btn-group dropdown">
                <a class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" tooltip="Font Size"><i class="fa text-base fa-text-height"></i>&nbsp;<b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href dropdown-toggle data-edit="fontSize 5" style="font-size:24px">Huge</a></li>
                  <li><a href dropdown-toggle data-edit="fontSize 3" style="font-size:18px">Normal</a></li>
                  <li><a href dropdown-toggle data-edit="fontSize 1" style="font-size:14px">Small</a></li>
                </ul>
              </div>
              <div class="btn-group">
                <a class="btn btn-sm btn-default" data-edit="bold" tooltip="Bold (Ctrl/Cmd+B)"><i class="fa text-base fa-bold"></i></a>
                <a class="btn btn-sm btn-default" data-edit="italic" tooltip="Italic (Ctrl/Cmd+I)"><i class="fa text-base fa-italic"></i></a>
                <a class="btn btn-sm btn-default" data-edit="strikethrough" tooltip="Strikethrough"><i class="fa text-base fa-strikethrough"></i></a>
                <a class="btn btn-sm btn-default" data-edit="underline" tooltip="Underline (Ctrl/Cmd+U)"><i class="fa text-base fa-underline"></i></a>
              </div>
              <div class="btn-group">
                <a class="btn btn-sm btn-default" data-edit="insertunorderedlist" tooltip="Bullet list"><i class="fa text-base fa-list-ul"></i></a>
                <a class="btn btn-sm btn-default" data-edit="insertorderedlist" tooltip="Number list"><i class="fa text-base fa-list-ol"></i></a>
                <a class="btn btn-sm btn-default" data-edit="outdent" tooltip="Reduce indent (Shift+Tab)"><i class="fa text-base fa-dedent"></i></a>
                <a class="btn btn-sm btn-default" data-edit="indent" tooltip="Indent (Tab)"><i class="fa text-base fa-indent"></i></a>
              </div>
              <div class="btn-group">
                <a class="btn btn-sm btn-default" data-edit="justifyleft" tooltip="Align Left (Ctrl/Cmd+L)"><i class="fa text-base fa-align-left"></i></a>
                <a class="btn btn-sm btn-default" data-edit="justifycenter" tooltip="Center (Ctrl/Cmd+E)"><i class="fa text-base fa-align-center"></i></a>
                <a class="btn btn-sm btn-default" data-edit="justifyright" tooltip="Align Right (Ctrl/Cmd+R)"><i class="fa text-base fa-align-right"></i></a>
                <a class="btn btn-sm btn-default" data-edit="justifyfull" tooltip="Justify (Ctrl/Cmd+J)"><i class="fa text-base fa-align-justify"></i></a>
              </div>
            </div-->
            <textarea class="form-control h-auto" style="min-height:200px;min-width: 100%" v-model="mail.mensagem">
            </textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-8 col-lg-offset-2">
            <button class="btn btn-info w-xs" @click="sendNewEmail()" :disabled="(isLoading && !hasError) || !isValid">{{ isLoading && !hasError ? 'Enviando...' : 'Enviar' }}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .msg-error {
    background-color: tomato;
    padding: 5px 15px;
    display: block;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .msg {
    background-color: khaki;
    padding: 5px 15px;
    display: block;
    text-align: center;
  }
</style>