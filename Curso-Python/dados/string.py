primeiro_nome = "Guilherme"
sobrenome = "Bianco"

nome_completo = primeiro_nome + " " + sobrenome
print(nome_completo)

h = input("Informe a hora: ")
m = input("Informe o minutos: ")
s = input("Informe o segundos: ")

dt_formatada = "{}h" "{}m" "{}s"
print(dt_formatada.format(h, m, s))

texto = """
    Este é um exemplo
    de uma string
    que ocupa várias linhas.
"""

print(texto.upper())
print(texto.find("Ocupa"))
print(texto.split())