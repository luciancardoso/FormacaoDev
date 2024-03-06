/*Escreva uma função que recebe um objeto como primeiro parâmetro e como segundo parâmetro o nome de uma propriedade no formato string.
Caso a propriedade não exista no objeto retorne o objeto original. Caso a propriedade exista, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro. 
*/

function removeAtributo(objeto, atributo){
    if(objeto[atributo]) {
        let objetoCopia = {...objeto}
        delete objetoCopia[atributo]
        // console.log("Existe")
        return objetoCopia
    } else {
        return objeto
    }
}


const pessoa = { nome: "Ana", idade: 20 }

const pessoaAtualizada = removeAtributo(pessoa, "idade")
console.log(pessoa)
console.log(pessoaAtualizada)