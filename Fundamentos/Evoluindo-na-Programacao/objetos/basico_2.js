
const produto = {
    nome: 'Macbook',
    preco: 32000,
    desconto: 0.05,
    precoComDesconto: function() {
        // return 'Estou em preço com desconto'
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.preco)
console.log(produto.precoComDesconto())