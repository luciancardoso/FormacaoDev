// Segunda até sexta => 8 horas
// Sábado => 4 horas
// Domingo => 0 horas
const SEGUNDA = 'segunda'
const TERCA = 'terça'
const QUARTA = 'quarta'
const QUINTA = 'quinta'
const SEXTA = 'sexta'
const SABADO = 'sábado'
const DOMINGO = 'domingo'

const diaDaSemana = SEGUNDA
let cargaHoraria

const eDiaUtil = diaDaSemana === SEGUNDA
    || diaDaSemana === TERCA
    || diaDaSemana === QUARTA
    || diaDaSemana === QUINTA
    || diaDaSemana === SEXTA

if (eDiaUtil){
    cargaHoraria = 8
} else if (diaDaSemana === SABADO){
    cargaHoraria = 4
} else {
    cargaHoraria = 0
}

console.log('Carga horária é:' + cargaHoraria + 'h')