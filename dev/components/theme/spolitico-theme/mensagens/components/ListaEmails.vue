<script>
  import ItemEmail from './EmailItem.vue'
  // import ContatoService from '../../../../domain/contato/service/contato'
  import listMails from '../mailFactory'

  export default {
    name: 'lista-emails',
    data () {
      return {
        lista: [],
        listatmp: [],
        isLoading: false,
        selected: null,
        options: [
          {filter: 'estrela', name: 'Com Estrela'},
          {filter: 'naolidos', name: 'Não lidos'}
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
      filtrar (f) { // TODO: Verificar melhor forma; isso somente funciona com certeza para este caso

        const keyFilter = (key) => this[key]

        this.listatmp = f === 'lixeira' ? this.excluidos : keyFilter(f)
      }
    },
    components: {ItemEmail}
  }
</script>

<template>
  <div class="col">
    <div>
      <!-- header -->
      <div class="wrapper c-message-header-bg">
        <div class="row">
          <div class="col-md-4">
            <div class="u-flex">
              <div class="col-md-11">
                <u-btn-dropdown
                  color="white"
                  text-color="black"
                  label="Filtrar"
                  no-caps
                  size="md"
                >
                  <u-list link>
                    <u-item v-for="option in options" :key="option.filter" v-close-overlay @click.native="$router.push({ name: 'mensagens', query: { filter: option.filter } })">
                      <u-item-main>
                        <u-item-tile>{{ option.name}}</u-item-tile>
                      </u-item-main>
                    </u-item>
                  </u-list>
                </u-btn-dropdown>
                <u-btn class="m-l-xs" size="md" color="white" text-color="black" @click="refresh()"
                       icon="refresh"></u-btn>
              </div>
            </div>
          </div>
          <div class="col-md-1 offset-md-7 flex justify-end">
            <u-btn-group>
              <u-btn color="white" text-color="black" type="button" icon="chevron-left" icon-type="fa"><!--<i class="fa fa-chevron-left"></i>--></u-btn>
              <u-btn color="white" text-color="black" type="button" icon="chevron-right" icon-type="fa"><!--<i class="fa fa-chevron-right"></i>--></u-btn>
            </u-btn-group>
          </div>
        </div>
      </div>
      <!-- / header -->
      <div class="msg" v-if="isLoading">Carregando...</div>
      <div class="msg" v-else-if="listatmp.length < 1">Nenhum e-mail a ser mostrado</div>
      <u-list class="no-border" v-else>
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

  .c-message-header-bg {
    background: #edf1f2;
  }
</style>
