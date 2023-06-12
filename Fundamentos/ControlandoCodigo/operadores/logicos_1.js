const trabalho1 = false
const trabalho2 = false

const comprarTv50 = trabalho1 && trabalho2 // AND
const comprarTv40 = trabalho1 != trabalho2 // XOR
const tomarSorvte = trabalho1 || trabalho2 // OR
// const ficarEmCasa = !trabalho1 && !trabalho2 // NOT
const ficarEmCasa = !tomarSorvte

console.log('Vamos comprar a TV de 50', comprarTv50)
console.log('Vamos comprar a TV de 40', comprarTv40)
console.log('Vamos tomar Sorvete', tomarSorvte)
console.log('Vamos ficar em casa', ficarEmCasa)