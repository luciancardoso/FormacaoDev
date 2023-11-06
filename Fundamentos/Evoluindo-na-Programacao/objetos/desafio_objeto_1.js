const data = {
    dia: 26,
    mes: 10,
    ano: 2023,
    calendario: function (){
        // return this.dia + "/" + this.mes + "/" + this.ano
        return `${this.dia}/${this.mes}/${this.ano}`
        // console.log(`${this.dia}/${this.mes}/${this.ano}`)
    }
}

console.log(data.calendario())