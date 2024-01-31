const primeiraElemento = arryOuString => arryOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const promessa = new Promise((resolve) => {
    resolve(['ana', 'bia', 'Carlos', 'João'])
})

// promessa.then(arry => console.log(arry))
promessa
.then(primeiraElemento)
.then(primeiraElemento)
.then(letraMinuscula)
.then(console.log)

console.log('Fim')