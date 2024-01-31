const primeiraElemento = arryOuString => arryOuString[0]

const promessa = new Promise((resolve) => {
    resolve(['ana', 'bia', 'Carlos', 'João'])
})

// promessa.then(arry => console.log(arry))
promessa.then(arry => primeiraElemento(arry))
.then(elemento => primeiraElemento(elemento))
.then(letra => letra.toLowerCase())
.then(resultado => console.log(resultado))

console.log('Fim')