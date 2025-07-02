# Solicite ao usuário o total de uma conta de restaurante
# e a porcentagem de gorjeta que ele gostaria de dar.
# Calcule e mostre o valor total da conta incluindo a gorjeta.

valor = float(input("Valor total (R$): "))
gorjeta = float(input("Percentual da gorjeta (0-100): "))

valor_gorjeta = valor * gorjeta / 100
valor_final = valor + valor_gorjeta

print(f"O valor final da conta é R${valor_final}")