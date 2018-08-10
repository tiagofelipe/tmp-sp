import Main from './Main.vue'
import Contatos from './components/Contatos.vue'
import ListaEmails from './components/ListaEmails.vue'
import NovoEmail from './components/NovoEmail.vue'
import Email from './components/Email.vue'

export default [
  {
    path: '/mensagens',
    name: 'mensagens',
    redirect: { name: 'contatos' },
    component: Main, // () => import('./Main'),
    children: [
      {
        path: '',
        component: Contatos,
        name: 'contatos',
        redirect: { name: 'lista-emails' },
        children: [
          {path: '', component: ListaEmails, name: 'lista-emails'},
          {path: 'atendimento/:id', component: Email, name: 'view-email'},
          {path: 'atendimento/novo-email', component: NovoEmail, name: 'novo-email'}
        ]
      }
    ]
  }
]
