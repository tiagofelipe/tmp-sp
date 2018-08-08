export default [
  {
    path: '/pesquisas',
    name: 'pesquisas',
    component: () => import('./TempoReal'),
    children: [{
      path: '/',
      name: 'mapapesquisas'
    }]
  }
]
