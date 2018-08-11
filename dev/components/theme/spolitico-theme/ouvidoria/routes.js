import Main from './Main.vue'
import Ocorrencias from './components/Ocorrencias.vue'
import janelaOcorrencia from './components/janelaOcorrencia.vue'
import registrarAtendimento from './components/registrarAtendimento.vue'

export default [
  {
    path: '/ouvidoria',
    name: 'ouvidoria',
    redirect: { name: 'ocorrencias' },
    component: Main,
    children: [
      {
        path: 'ocorrencias',
        component: Ocorrencias,
        name: 'ocorrencias'
      },
      {
        path: 'ocorrencia/cadastrar',
        name: 'registrarAtendimento',
        component: registrarAtendimento
      },
      {
        path: 'ocorrencia/:id',
        name: 'janelaOcorrencia',
        component: janelaOcorrencia
      }
    ]
  }
]
