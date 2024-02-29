
function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    // Comportamento (Método) Público
    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(1, 1, 2024)
const d2 = new Data(1, 2, 2024)


console.log(d1.exibir())
console.log(d2.exibir())