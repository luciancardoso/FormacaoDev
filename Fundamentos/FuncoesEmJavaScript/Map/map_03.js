const gritar = texto => texto.toUpperCase()
const enfatizar = texto => texto + '!!!'
const exagerar = texto => texto.split('').join(' ')

const frase = ['Cuidado', 'Olha o carro']

const final = frase.map(gritar).map(enfatizar).map(exagerar)
console.log(final)