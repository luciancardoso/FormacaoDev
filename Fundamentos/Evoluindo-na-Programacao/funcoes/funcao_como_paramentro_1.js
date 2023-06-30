function exibirNoConsole(funcao){
    if(typeof funcao === 'function'){
        const resultado = funcao()
        console.log(`O resultado é ${resultado}`)
    }
}

function bomDia(){
    return 'Bom dia'
}

exibirNoConsole(bomDia)