const data1 = {
    dia: 26,
    mes: 10,
    ano: 2023,
    formatar: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 28,
    mes: 10,
    ano: 2023,
    formatar: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 2,
    mes: 11,
    ano: 2023,
    exibir: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.exibir())