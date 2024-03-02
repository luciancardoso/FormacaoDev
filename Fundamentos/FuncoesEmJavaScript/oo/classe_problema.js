// MOLDE!!!
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    exibir(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(80, 37, -987)
console.log(d1.exibir())
