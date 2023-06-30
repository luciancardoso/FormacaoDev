function calcularPrecoComImposto(imposto){
    return function(preco){
        return (1 + imposto) * preco
    }
}

// Estado X
const impostoEstadoX = calcularPrecoComImposto(0.3) // 0.5 e 50% ou 0.3 e 30%
console.log(impostoEstadoX(10)) 
console.log(impostoEstadoX(30))
console.log(impostoEstadoX(40))
console.log(impostoEstadoX(50))

// Estado Y
const impostoEstadoY = calcularPrecoComImposto(0.4)
console.log(impostoEstadoY(10))
console.log(impostoEstadoY(20))
console.log(impostoEstadoY(50))

console.log(calcularPrecoComImposto(0.085)(100)) // 0.085 e 8,5 %