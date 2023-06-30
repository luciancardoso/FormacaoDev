function executar(funcao, x = 10, y = 10){
    if(typeof funcao === 'function'){
        console.log(funcao(x, y))
    }
}

function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

executar(somar, 7, 5)
executar(subtrair, 8, 33)
executar(multiplicar, 40, 20)
executar(multiplicar)
executar(somar)
executar(subtrair)