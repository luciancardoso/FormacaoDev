
function mediaDeUmArray(numeros) {
    if(!Array.isArray(numeros)) return null

    let total = 0
    for(let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

function Aluno(nome, disciplina){
    this.nome = nome
    this.disciplina = disciplina

    this.media = function(nomeDaDisciplina){
        for(let disciplina of this.disciplinas) {
            if(disciplina.nome.toLowerCase() === nomeDaDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    }

    this.mediaGlobal = function(){
        const medias = []
        for(let disciplina of this.disciplinas){
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }

}

const aluno1 = new Aluno ('Pedro', [
    { nome: 'Português', notas: [5.4, 9, 8.1] },
    { nome: 'Matemática', notas: [7.4, 6.4, 8.1] },
    { nome: 'Inglês', notas: [8.8, 9, 9.7] },
])

console.log(aluno1.nome)
console.log(aluno1.media('português'))
console.log(aluno1.media('matemática'))
console.log(aluno1.media('inglês'))
console.log(aluno1.media('fisica'))

console.log(aluno1.mediaGlobal())