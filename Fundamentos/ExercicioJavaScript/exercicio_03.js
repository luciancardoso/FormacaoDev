/* Crie uma função que recebe um objeto como parâmetro e retorna um segundo objeto com as chaves e valores do primeiro objeto invertidas*/
function trocaChaveEValor(objeto){
    let objetoRetorno = {}
    let conteudoObjeto = Object.entries(objeto)
    for(par of conteudoObjeto){
        objetoRetorno[par[1]] = par[0]
        // console.log(par)
    }
    return objetoRetorno
}

const objeto = { nome: "Maria", idade: "45", id: "8745" }

const objetoInvertido = trocaChaveEValor(objeto)

console.log(objeto)
console.log(objetoInvertido)