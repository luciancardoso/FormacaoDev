// Problema da utilização de Objetos Literais

const usuario1 = {
    nome: 'Ana',
    email: 'ana@gmail.com',
    senha: '12345',
    cadastro: new Date()
}

const usuario2 = {
    nome: 'Carlos',
    email: 'carlos@gmail.com',
    dataCadastro: new Date()
}

console.log(usuario1, usuario2)