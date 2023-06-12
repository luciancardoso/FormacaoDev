const emBlackFriday = false
const temEstoque = false
const temPerfilFuncionario = true

const permiteDescontoMaximo = (emBlackFriday && temEstoque) || temPerfilFuncionario

console.log('Permitir desconto máximo?', permiteDescontoMaximo)