// Classe


// Função Construtora -> Criar Objetos
function Data(dia, mes, ano){
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatar = function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 2, 2023)
data1.ano = 2023
console.log(data1.formatar())