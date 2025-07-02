# Peça ao usuário que insira uma quantidade de quilômentros
# e converta essa distância para milhas.
# Lembre-se de que 1Km = 0.621371 mi.

RELACAO_KM_MILHA = 0.621371

distancia_km = float(input("Informe a distância (Km): "))

distancia_milha = distancia_km * RELACAO_KM_MILHA

print(f"{distancia_km} Km = {distancia_milha} Mi")