// Objeto: Aluno
// Atributos: nome, disciplinas (nome, 3 notas)
// Método: media(disciplina), mediaGlobal

function mediaDeUmArray(numeros) {
    if(!Array.isArray(numeros)) return null

    let total = 0
    for(let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

const aluno = {
    nome: 'João',
    disciplinas: [
        { nome: 'Português', notas: [5.4, 9, 8.1] },
        { nome: 'Matemática', notas: [7.4, 6.4, 8.1] },
        { nome: 'Inglês', notas: [8.8, 9, 9.7] },
    ],
    media: function(nomeDaDisciplina){
        for(let disciplina of this.disciplinas) {
            if(disciplina.nome.toLowerCase() === nomeDaDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    },
    mediaGlobal: function(){
        const medias = []
        for(let disciplina of this.disciplinas){
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }
}

console.log(aluno.nome)
console.log(aluno.media('português'))
console.log(aluno.media('matemática'))
console.log(aluno.media('inglês'))
console.log(aluno.media('fisica'))

console.log(aluno.mediaGlobal())