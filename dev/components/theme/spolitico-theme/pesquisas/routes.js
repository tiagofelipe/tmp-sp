import pesquisa from './components/Pesquisa'
import mapa from './components/TempoReal'
import Main from './Main'
export default [
  {
    path: '/pesquisas',
    name: 'pesquisas',
    component: Main,
    redirect: { name: 'pesquisa' },
    children: [
      {
        path: '',
        component: pesquisa,
        name: 'pesquisa'
      },
      {
        path: 'mapa',
        component: mapa,
        name: 'mapapesquisas'
      }
    ]
  }
]
