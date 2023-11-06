const cliente = {
    codigo: 57234,
    nome: "Lucian Cardoso Dos Santos",
    vip: true,
    endereco: {
        logradouro: 'Rua XYZ',
        numero: 987,
        complemento: 'Apto 302 bloco C',
        pontosRef: ['Hospital São Pedro', 'Shopping Riomar']
    },
    filhos: [
        { nome: 'Pedro M. Albuquerque', anoDeNascimento: 1999 },
        { nome: 'Marianna M. Albuquerque', anoDeNascimento: 1995 },
        { nome: 'Thais M. Albuquerque', anoDeNascimento: 2006 },
    ]
}

console.log(cliente.endereco.logradouro)
console.log(cliente.filhos[2].anoDeNascimento)