function Usuario(nome, cpf, agencia, contaBancaria, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.agencia = agencia
    this.contaBancaria = contaBancaria
    this.saldo = saldo

    this.saldoUsuario = function() {
        return `Nome: ${this.nome} \nCPF: ${this.cpf} \nAgência: ${this.agencia} \nConta Bancaria: ${this.contaBancaria} \nSeu Saldo é de: ${this.saldo}`
    }

}

const consulta = new Usuario('Francisca Menezes', '123.456.789-00', 6900, 665322, 100)

console.log(consulta.saldoUsuario())