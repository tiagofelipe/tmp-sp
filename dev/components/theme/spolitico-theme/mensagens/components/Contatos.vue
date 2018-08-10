<script>
  import {VueMaskDirective as mask} from 'v-mask'
  import ListaEmails from './ListaEmails.vue'
  import NovoEmail from './NovoEmail.vue'
  import UPage from '../../../../../../src/components/layout/UPage'
  import UItem from '../../../../../../src/components/list/UItem'
  import UListHeader from '../../../../../../src/components/list/UListHeader'
  import UItemMain from '../../../../../../src/components/list/UItemMain'

  export default {
    nome: 'contatos',
    directives: {mask},
    data () {
      return {
        isLoading: false,
        filtro: ''
      }
    },
    computed: {},
    mounted () {
    },
    activated () {
    },
    destroyed () {
    },
    methods: {
      loading (v) {
        this.isLoading = !!v
      },

      nextElement ({target}) {
        let index = parseInt(target.getAttribute('tabindex'))
        let next = index + 1
        document.querySelector('[tabindex="' + next + '"').focus()
      },
      filterEmails (filter) {
        this.filtro = filter
        this.$router.push('/mensagens?filter=' + filter)
      }
    },
    components: {UItemMain, UListHeader, UItem, UPage, ListaEmails, NovoEmail }
  }
</script>

<template>
  <u-page class="bg-blue-grey-1">
    <div class="u-flex">
      <div class="bg-grey-3">
        <div class="wrapper mail-toolbar b">
          <u-btn tag="u-btn" size="sm" no-caps color="negative" @click.native="$router.push({name: 'novo-email'})">Escrever</u-btn>
        </div>
        <div class="wrapper hidden-sm hidden-xs bg-grey-4" style="height: 90vh;" id="email-menu">
          <u-list class="no-border">
            <u-item link @click.native="filterEmails('todos')" :class="{ active: filtro === 'todos'}">
              <u-item-main>
                <u-item-tile label>Entrada</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('estrela')" :class="{ active: filtro === 'estrela'}">
              <u-item-main>
                <u-item-tile label>Com estrela</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('respondidos')" :class="{ active: filtro === 'respondidos'}">
              <u-item-main>
                <u-item-tile label>Respondidos</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('naorespondidos')" :class="{ active: filtro === 'naorespondidos'}">
              <u-item-main>
                <u-item-tile label>Não Respondidos</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('lixeira')" :class="{ active: filtro === 'lixeira'}">
              <u-item-main>
                <u-item-tile label>Lixeira</u-item-tile>
              </u-item-main>
            </u-item>
            <u-list-header class="wrapper">Marcadores</u-list-header>
            <u-item link @click.native="filterEmails('campanhas')" :class="{ active: filtro === 'campanhas'}">
              <u-item-side><i class="fa fa-fw fa-circle text-primary"></i></u-item-side>
              <u-item-main>
                <u-item-tile label>Campanha</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('eleitores')" :class="{ active: filtro === 'eleitores'}">
              <u-item-side><i class="fa fa-fw fa-circle text-info"></i></u-item-side>
              <u-item-main>
                <u-item-tile label>Eleitores</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('agentes')" :class="{ active: filtro === 'agentes'}">
              <u-item-side><i class="fa fa-fw fa-circle text-warning"></i></u-item-side>
              <u-item-main>
                <u-item-tile label>Agentes</u-item-tile>
              </u-item-main>
            </u-item>
            <u-item link @click.native="filterEmails('pesquisas')" :class="{ active: filtro === 'pesquisas'}">
              <u-item-side><i class="fa fa-fw fa-circle text-success"></i></u-item-side>
              <u-item-main>
                <u-item-tile label>Pesquisas</u-item-tile>
              </u-item-main>
            </u-item>
          </u-list>
          <div class="wrapper">
            <form name="label">
              <div class="input-group">
                <u-input type="text" class="form-control input-sm" value="" placeholder="Novo Marcador"></u-input>
                <span class="input-group-btn">
	              <u-btn type="button" size="xs" color="primary">Adicionar</u-btn>
	            </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </u-page>
</template>

<style scoped>
  .active {
    background-color: #23b7e5;
    color: #fff !important;
  }
  .no-border {
    border: none !important;
  }
</style>
