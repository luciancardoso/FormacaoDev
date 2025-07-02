# Peça ao usuário que forneça uma temperatura em Celsius
# e converta-a para Fahrenheit.
# A fórmula de conversão é `F = C * 9/5 + 32`.

temperatura_celsius = float(input("Informe a temperatura °C: "))

temperatura_fahrenheit = temperatura_celsius * 9 / 5 + 32

print(f"A temperatura é {temperatura_fahrenheit}°F")