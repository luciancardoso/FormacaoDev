// funcao: 3 Params => mediaSimples => console.log

function mediaSimples(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3
    console.log(`A média simples é ${media}!`)
}

mediaSimples(6, 7, 8)
mediaSimples(3.2, 5.5, 6.9)

// funcao: 3 Params => mediaPonderada => console.log
function mediaPonderada(nota1, nota2, nota3){
    const media = (nota1 + 2 * nota2 + 3 * nota3) / 6
    console.log(`A média ponderada é ${media}!`)
}

mediaPonderada(6, 7, 8)
mediaPonderada(4.5, 9.2, 9.3)