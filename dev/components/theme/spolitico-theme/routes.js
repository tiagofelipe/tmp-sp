import { default as mensagens } from './mensagens/routes'
import { default as pesquisas } from './pesquisas/routes'

export default [
  ...mensagens,
  ...pesquisas
]
