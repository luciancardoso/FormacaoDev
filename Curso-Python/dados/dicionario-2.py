funcionario = {
    "nome": "João Pedro",
    "idade": 30,
    "cidade": "São Paulo",
    "ativo": True
}

print(funcionario.get("nome"))
#print(funcionario["Salário"])
print(funcionario.get("Salário", 0))

print(funcionario.keys())
print(funcionario.values())
print(funcionario.items())