export function ValidaCPF (strCPF) {
  let Soma
  let Resto
  Soma = 0
  strCPF = strCPF.replace(/\D/g, '')
  let invalids = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '99999999999']

  if (invalids.indexOf(strCPF) !== -1) {
    return false
  }

  if (strCPF === '00000000000') return false

  let i
  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  Resto = (Soma * 10) % 11

  if ((Resto === 10) || (Resto === 11)) Resto = 0
  if (Resto !== parseInt(strCPF.substring(9, 10))) return false

  Soma = 0
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
  Resto = (Soma * 10) % 11

  if ((Resto === 10) || (Resto === 11)) Resto = 0
  if (Resto !== parseInt(strCPF.substring(10, 11))) return false
  return true
}
