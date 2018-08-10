import { default as mensagens } from './mensagens/routes'
import { default as campanhas } from './comunicacao/routes'
import { default as ouvidoria } from './ouvidoria/routes'

export default [...mensagens, ...campanhas, ...ouvidoria
import { default as pesquisas } from './pesquisas/routes'

export default [
  ...mensagens,
  ...pesquisas
]
