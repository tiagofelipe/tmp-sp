<script>
  import ItemEmail from './EmailItem.vue'
  import USelect from '../../../../../../src/components/select/USelect'
  // import ContatoService from '../../../../domain/contato/service/contato'
  import listMails from '../mailFactory'
  import UBtnGroup from '../../../../../../src/components/button/UBtnGroup'

  export default{
    name: 'lista-emails',
    data () {
      return {
        lista: [],
        listatmp: [],
        isLoading: false,
        selected: null,
        options: [
          {value:null, label: 'Filtrar por'},
          {value:'lidos', label: 'Lidos'},
          {value:'naolidos', label: 'Não lidos'}
        ]
      }
    },
    computed: {
      lidos () {
        return this.lista.filter(item => {
          return item.lido === true && item.isExcluido === false
        })
      },
      naolidos () {
        return this.lista.filter(item => {
          return item.lido === false && item.isExcluido === false
        })
      },
      respondidos () {
        return this.lista.filter(item => {
          return item.isRespondido === true && item.isExcluido === false
        })
      },
      naorespondidos () {
        return this.lista.filter(item => {
          return item.isRespondido === false && item.isExcluido === false
        })
      },
      excluidos () {
        return this.lista.filter(item => {
          return item.isExcluido === true
        })
      },
      estrela () {
        return this.lista.filter(item => {
          return item.estrela === true
        })
      },
      todos () {
        return this.lista.filter(item => {
          return item.isExcluido === false
        })
      },
      campanhas () {
        return this.lista.filter(item => {
          return item.tag.name === 'campanhas'
        })
      },
      eleitores () {
        return this.lista.filter(item => {
          return item.tag.name === 'eleitores'
        })
      },
      agentes () {
        return this.lista.filter(item => {
          return item.tag.name === 'agentes'
        })
      },
      pesquisas () {
        return this.lista.filter(item => {
          return item.tag.name === 'pesquisas'
        })
      },
      filtro () {
        return this.$route.query.filter
      }
    },
    watch: {
      selected: function (a) {
        this.listatmp = a === 'lidos' ? this.lidos : a === 'naolidos' ? this.naolidos : this.todos
      },
      filtro: function (f) { this.filtrar(f) }
    },
    beforeMount () {
      this.getEmails()
    },
    destroyed () {
    },
    methods: {
      getEmails () {
        this.isLoading = true
        setTimeout(() => {
          this.lista = listMails
          if (this.$route.query.filter) {
            this.filtrar(this.$route.query.filter)
          } else {
            this.listatmp = this.lista
          }
          this.isLoading = false
        }, 500)
        /* ContatoService.getEmails()
          .then(result => {
            this.lista = Array.isArray(result.data) ? result.data : [result.data]
            this.listatmp = this.lista
            this.isLoading = false
          })
          .catch(error => {
            this.isLoading = false
            console.log(error.response.data.errors)
          }) */
      },
      refresh () {
        this.isLoading = true
        this.lista = []
        this.selected = null
        this.getEmails()
      },
      filtrar (f) {
        if (f === 'lixeira') {
          this.listatmp = this.excluidos
        } else if (f === 'estrela') {
          this.listatmp = this.estrela
        } else if (f === 'naorespondidos') {
          this.listatmp = this.naorespondidos
        } else if (f === 'respondidos') {
          this.listatmp = this.respondidos
        } else if (f === 'todos') {
          this.listatmp = this.todos
        } else if (f === 'campanhas') {
          this.listatmp = this.campanhas
        } else if (f === 'eleitores') {
          this.listatmp = this.eleitores
        } else if (f === 'agentes') {
          this.listatmp = this.agentes
        } else if (f === 'pesquisas') {
          this.listatmp = this.pesquisas
        }
      }
    },
    components: {UBtnGroup, USelect, ItemEmail }
  }
</script>

<template>
  <div class="col">
    <div>
      <!-- header -->
      <div class="wrapper mail-toolbar">
        <div class="row">
          <div class="col-md-4">
            <!--div class="btn-group dropdown">
              <button class="btn btn-default btn-sm btn-bg dropdown-toggle" data-toggle="dropdown">
                <span class="dropdown-label">Filter</span>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu text-left text-sm">
                <li><a>Unread</a></li>
                <li><a>Starred</a></li>
              </ul>
            </div-->
            <div class="flex">
              <u-select style="width: 100px; margin-right: 5px;" class="" v-model="selected" :options="options"></u-select>
              <u-btn class="" size="sm" color="primary" @click="refresh()" icon="refresh"></u-btn>
            </div>
          </div>
          <u-btn-group class="col-md-1 offset-md-7">
            <u-btn color="primary" size="sm" type="button" style="float: right;"><i class="fa fa-chevron-left"></i></u-btn>
            <u-btn color="primary" size="sm" type="button"><i class="fa fa-chevron-right"></i></u-btn>
          </u-btn-group>
        </div>
      </div>
      <!-- / header -->
      <div class="msg" v-if="isLoading">Carregando...</div>
      <div class="msg" v-else-if="listatmp.length < 1">Nenhum e-mail a ser mostrado</div>
      <u-list class="no-border" style="margin-top: -8px;" v-else>
        <item-email :mail="mail" v-for="mail in listatmp" :key="mail.id"></item-email>
      </u-list>
    </div>
  </div>
</template>

<style scoped>
  select:focus {
    background: none;
  }
  .msg {
    margin-left: 40%;
    margin-top: 50px;
  }
  .no-border {
    border: none !important;
  }
</style>
