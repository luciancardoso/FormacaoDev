let numero = 3
let texto = 'Bom dia'

function somar(n1, n2){
    return n1 + n2
}

const subtrair = function(n1, n2){
    return n1 - n2
}

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof somar)
console.log(typeof subtrair)

// se o valor for igual estritamente
console.log(typeof subtrair === 'function')