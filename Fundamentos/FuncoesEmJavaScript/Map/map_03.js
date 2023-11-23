const gritar = texto => texto.toUpperCase()
const enfatizar = texto => texto + '!!!'
const exagerar = texto => texto.split('').join(' ')

const talk = text => text.toUpperCase()
const user = text => text + '!!!'

const frase = ['Cuidado', 'Olha o carro']
const falar = ['Bem-vindo', 'usuário']

const final = frase.map(gritar).map(enfatizar).map(exagerar)
console.log(final)

const fala = falar.map(talk).map(user)
console.log(fala)