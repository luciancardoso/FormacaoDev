// #1 - Função SEM parâmetros e SEM retorno
function exibirBomDia(){
    console.log('Bom dia')
}

exibirBomDia()

// #2 - Função COM parâmetros e SEM retorno
function exibirBomDiaPara(nome, msg){
    console.log(`Bom dia ${nome}! ${msg}`)
}

exibirBomDiaPara('Lucian', 'Como vc está ?')
exibirBomDiaPara('Lucian', 'Vc vai virar Dev FullStack')

// #3 - Função SEM parâmetros e COM retorno
function numeroEntre0e10(){
    const numero = parseInt(Math.random() * 10)
    return numero
}

console.log(numeroEntre0e10())

// #4 - Função COM parâmetros e COM retorno
function somar(n1, n2){
    return n1 + n2
}

const resultado = somar(30, 7734)
console.log(resultado)
console.log(somar(3, 7))