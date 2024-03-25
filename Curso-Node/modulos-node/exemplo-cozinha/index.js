// const acoes = require("./cozinha/acoesCozinha")
// const {alimentos} = require("./cozinha/alimentos")

// console.log(acoes.cozinhar(alimentos[0]))

// const cozinha = require("./cozinha")
// const receita = require("./receita")

// console.log(cozinha)
// console.log(receita(["Carne", "Alface"], cozinha.cortar, cozinha.assar))

const refeicao = require("./refeicao")("Almoço")
const refeicao2 = require("./refeicao")("Jantar")
console.log(refeicao)

refeicao( "arroz", "feijão", "alface")
refeicao2( "arroz", "feijão", "batata")