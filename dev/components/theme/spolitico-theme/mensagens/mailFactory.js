const mailFactory = function (id, assunto, mensagem, lido = false, excluido = false, respondido = false, estrela = false, remetente = 'cobaia@gmail.com') {
  return {
    id: id,
    data: new Date(),
    assunto: assunto,
    mensagem: mensagem,
    lido: respondido ? true : lido,
    isExcluido: excluido,
    isRespondido: respondido,
    estrela: estrela,
    email: remetente
  }
}

export default [
  mailFactory(1, 'Hello World!', 'Allons-y!'),
  mailFactory(2, 'Teste de e-mail respondido', 'testando...', true, false, true),
  mailFactory(3, 'E-mail com estrela', 'Testando com estrela', false, false, false, true),
  mailFactory(4, 'E-mail excluído', 'E-mail de teste', false, true, true, true)
]
