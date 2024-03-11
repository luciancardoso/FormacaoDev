/*Crie uma função que recebe dois arrays como parâmetros e retorna um objeto. As chaves do objeto serão os elementos do primeiro array passado como parâmetro e os valores, os elementos do segundo array*/


function criaObjeto(chaves, valores){
    let objeto = {}
    for(let i = 0; i < chaves.length; i++){
        objeto[chaves[i]] = valores[i]
    }
    return objeto
}


const array1 = ["nome", "idade", "id"]
const array2 = ["Carlos", 47, 457]

const objeto = criaObjeto(array1, array2)
console.log(objeto)