// A+ => 10
// A => 9
// B+ => 8
// B => 7
// C+ => 6
// C => 5
// D+ => 3
// D => 3
// E+ => 2
// E => 1
// F => 0

let nota
const conceito = 'A+'

switch(conceito){
    case 'A+': nota = 10; break
    case 'A': nota = 9; break
    case 'B+': nota = 8; break
    case 'B': nota = 7; break
    case 'C+': nota = 6; break
    case 'C': nota = 5; break
    case 'D+': nota = 4; break
    case 'D': nota = 3; break
    case 'E+': nota = 2; break
    case 'E': nota = 1; break
    case 'F': nota = 0; break
    default: nota = -1
}

// poderia por nota !== undefined
if(nota < 0){
    console.log('Nota inválida')
} else {
    console.log(`Para o conceito ${conceito} temos a nota ${nota}!`)
}
