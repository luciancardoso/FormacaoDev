const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = numeros.length - 2; i >= 0; i -= 2){
    console.log(numeros[i])
}


const numerosInvertidos = numeros.reverse()
for(let i in numerosInvertidos){
    if(i % 2 === 1){
        console.log(`${i} => ${numerosInvertidos}`)
    }
}
