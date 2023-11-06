function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        formatar: function (){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const data1 = criarData(26, 10, 2023)
const data2 = criarData(28, 10, 2023)
const data3 = criarData(2, 11, 2023)

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())