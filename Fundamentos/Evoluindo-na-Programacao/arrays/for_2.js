// Índices :     0   1    2    3   4    5   6
const numeros = [68, 22, 222, 150, 33, 100, 45]

// foreach => para cada elemento do array
for(let numero of numeros){
    console.log(numero)
}

// foreach => para cada Índice do array
for(let indice in numeros){
    console.log(`${indice} => ${numeros[indice]}`)
}