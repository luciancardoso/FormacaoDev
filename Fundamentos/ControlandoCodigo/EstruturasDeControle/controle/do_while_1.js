// Qtde Mile desde 1 de janeiro de 1970

let quantidade = 0
const dataNoFuturo = Date.now() + 3000

do {
    quantidade++
} while(Date.now() < dataNoFuturo)

console.log('Qtde:', quantidade)