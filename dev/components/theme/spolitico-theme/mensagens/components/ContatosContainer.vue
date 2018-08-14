<script>
  import {VueMaskDirective as mask} from 'v-mask'
  import ListaEmails from './ListaEmails.vue'
  import NovoEmail from './NovoEmail.vue'
  import EmailMenuItem from './email-filters-menu/EmailMenuItem'
  import EmailFilterMenu from './email-filters-menu/EmailFilterMenu'
  import MarkersList from './markers-menu/MarkersList'

  export default {
    nome: 'ContatosContainer',
    directives: {mask},
    data () {
      return {
        isLoading: false,
        filtro: ''
      }
    },
    computed: {
      filters () {
        return [
          { name: 'Entrada', filter: 'todos'},
          { name: 'Com Estrela', filter: 'estrela'},
          { name: 'Respondidos', filter: 'respondidos'},
          { name: 'Não Respondidos', filter: 'naorespondidos'},
          { name: 'Lixeira', filter: 'lixeira'}
        ]
      },
      markers () {
        return [
          { name: 'Campanhas', filter: 'campanhas', icon: { name: 'circle', type: 'fa', color: 'primary' }},
          { name: 'Eleitores', filter: 'eleitores', icon: { name: 'circle', type: 'fa', color: 'info' }},
          { name: 'Agentes', filter: 'agentes', icon: { name: 'circle', type: 'fa', color: 'warning' }},
          { name: 'Pesquisas', filter: 'pesquisas', icon: { name: 'circle', type: 'fa', color: 'success' }}
        ]
      }
    },
    components: {
      MarkersList, EmailFilterMenu, EmailMenuItem, ListaEmails, NovoEmail }
  }
</script>

<template>
  <u-page class="u-flex">
    <div class="">
      <div class="wrapper">
        <u-btn tag="u-btn" color="negative" @click.native="$router.push({name: 'novo-email'})">Escrever</u-btn>
      </div>
      <div class="wrapper hidden-sm hidden-xs" id="email-menu">
        <email-filter-menu :options="filters"></email-filter-menu>
        <markers-list headerTitle="Marcadores" :options="markers"></markers-list>
        <div class="wrapper">
          <form name="label">
            <div class="input-group">
              <u-input type="text" class="form-control input-sm" value="" inline placeholder="Novo Marcador"></u-input>
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
  </u-page>
</template>

