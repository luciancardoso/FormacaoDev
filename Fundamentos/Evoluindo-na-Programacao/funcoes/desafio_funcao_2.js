// (nota) => Conceito
// 10(A+), 9(A), 8(B+), 7(B)
// 6(C+), 5(C), 4(D+), 3(D)
// 2(E+), 1(E), 0(F), null

// Math.ceil (teto) Math.floor (piso)

function notaParaConceito(nota){

    switch(Math.ceil(nota)){
        case 10: return 'A+'
        case 9: return 'A'
        case 8: return 'B+'
        case 7: return 'B'
        case 6: return 'C+'
        case 5: return 'C'
        default: return null
    }

}

const conceitoAlunoA = notaParaConceito(9.45)
console.log(`o Conceito do Bruno é ${conceitoAlunoA}`)