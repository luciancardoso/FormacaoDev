const hora = 18
const saudacao = hora >= 12 ? 'Boa tarde' : 'Bom dia' // 'Bom dia' ou 'Boa Tarde'

console.log(saudacao)

const saudacao2 = hora <= 11 ? 'Bom dia' : (hora <= 17 ? 'boa tarde' : 'boa noite')
console.log(saudacao2)

