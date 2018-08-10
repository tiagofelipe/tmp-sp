export default [
  {
    path: '/pesquisas',
    name: 'pesquisas',
    component: () => import('./TempoReal'),
    children: [{
      path: 'mapa',
      name: 'mapapesquisas',
      component: () => import('./Pesquisa')
    }]
  }
]
