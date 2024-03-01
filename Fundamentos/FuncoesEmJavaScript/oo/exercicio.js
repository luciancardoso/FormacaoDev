function Robo(falar, andar, correr, parar, pular){
    this.falar = falar
    this.andar = andar
    this.correr = correr
    this.parar = parar
    this.pular = pular

    this.funcoesProgramadas = function() {
        return `${this.falar}, ${this.andar}, ${this.correr}, ${this.parar}, ${this.pular}`
    }

}

const com1 = new Robo('Olá me Chamo Cortana', 'Esou indo pegar uma água', 'sim irei correr', 'irei pular', ' ')
const com2 = new Robo('Por favor! MOSTRE SUA CREDENCIAL!!!', 'muito bem pode passar!', 'O que é você', 'Especie não identificada', 'Protocolo Ativado')

console.log(com1.funcoesProgramadas())
console.log(com2.funcoesProgramadas())