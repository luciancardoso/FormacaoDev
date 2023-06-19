let nota = 10

switch(Math.ceil(nota)){
    case 10:
    case 9: 
    case 8:
    case 7:
        console.log('Aprovado')
        break
    case 6:
    case 5:
        console.log('Recuperação')
        break
    case 4:
    case 3:
        console.log('Reprovado')
        break
    case 2:
    case 1:
    case 0:
        console.log('Muito Reprovado')
        break
    default:
        console.log('Nota Inválida')
}

console.log('FIM!')