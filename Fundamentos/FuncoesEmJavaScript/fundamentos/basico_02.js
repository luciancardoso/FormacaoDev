
function bomDia(){
    console.log('Bom dia')
}

function boaTarde(){
    console.log('Boa Tarde')
}


// Passa uma função como paramentro para outra função
function executar(x){
    if(typeof x === 'function'){
        x()
    }
}

executar(bomDia())
executar(boaTarde())

// Retornar uma função a partir de uma outra função
function potencia(exp){
    return function(base){
       return Math.pow(base, exp)
    }
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(4))
console.log(aoQuadrado(5))