const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },
    {nome: 'Impressora', qtde: 5, preco: 1000, fragil: true },
    {nome: 'iPad', qtde: 2, preco: 7500, fragil: true },
    {nome: 'Computador', qtde: 2, preco: 5000, fragil: true },
]

// 5000 + 15000 + 10000 = 30000 / 3 = 10.000

// filter, map, redice

// 1. fragil: true
const produtoFragil = produto => produto.fragil
console.log(carrinho.filter(produtoFragil))

// 2. qtde * preco -> total
const totalProduto = produto => produto.qtde * produto.preco

// 3. media totais
const totalizador = (total, valor) => total + valor

const result = carrinho.filter(produtoFragil)
const total = result.map(totalProduto).reduce(totalizador)

const media = total / result.length

console.log(total, media)
