// Função construtora ->
// nome, preço, desconto (0 -1) 15% 0.15
// precoFinal

// Criar duas instâncias de produto

function Produto(nome, preco, desconto) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function(){
        return (1 - this.desconto) * this.preco
    }
}

const p1 = new Produto('Placa mãe Asus B550M Tuf Gaming plus Wi-Fi II AMD', 1200, 0.10)
const p2 = new Produto('Mémoria Asgard - Loki 8Gx2', 275, 0.1)

console.log(p1.precoFinal())
console.log(p2.precoFinal())