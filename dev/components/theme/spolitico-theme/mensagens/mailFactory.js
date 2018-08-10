const tagColors = {
  campanha: { color: '#0081ff', name: 'campanhas' },
  eleitores: { color: '#7266ba', name: 'eleitores' },
  agentes: { color: '#f2c037', name: 'agentes' },
  pesquisas: { color: '#27c24c', name: 'pesquisas' },
  none: { color: 'transparent', name: 'none' }
}

const mailFactory = function (id, assunto, mensagem, tag, lido = false, excluido = false, respondido = false, estrela = false, remetente = 'cobaia@gmail.com') {
  return {
    id: id,
    data: new Date(),
    assunto: assunto,
    mensagem: mensagem,
    lido: respondido ? true : lido,
    isExcluido: excluido,
    isRespondido: respondido,
    estrela: estrela,
    email: remetente,
    tag: tag
  }
}

export default [
  mailFactory(1, 'Hello World!', 'Allons-y!', tagColors.campanha),
  mailFactory(2, 'Teste de e-mail respondido', 'testando...', tagColors.eleitores, true, false, true),
  mailFactory(3, 'E-mail com estrela', 'Testando com estrela', tagColors.campanha, false, false, true),
  mailFactory(4, 'E-mail excluído', 'E-mail de teste', tagColors.pesquisas, false, true, true, true),
  mailFactory(5, 'Teste com mensagem grande', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet lacus id lacus lacinia elementum. Sed maximus magna non tellus egestas vehicula. Fusce sollicitudin, magna eu laoreet eleifend, urna libero cursus lectus, eu pharetra nibh orci eu ipsum.', tagColors.pesquisas, false, false, false, false),
  mailFactory(6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet lacus id lacus lacinia elementum. Sed maximus magna non tellus egestas vehicula.', 'Teste com assunto grande', tagColors.agentes, true, false, false, true),
  mailFactory(7, 'Sem tag', 'Este e-mail não possui tag', tagColors.none, true, false, false, true)
]
