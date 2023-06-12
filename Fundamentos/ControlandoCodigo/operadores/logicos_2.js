const produtoFragil = true
const produtoAltoCusto = false

console.log(produtoFragil && produtoAltoCusto)
console.log(produtoFragil || produtoAltoCusto)
console.log(produtoFragil != produtoAltoCusto)
console.log(!produtoFragil)

// em javascript 0 significa false
// em javascript qualquer número diferente de 0 (!= 0) significa true

// truque!!
console.log('Truque...')
console.log(!!false)
console.log(!!true)
console.log(!!00)
console.log(!!0.000001)