const promessa = new Promise(function(resolve){
    resolve('Vamos jogar agora!')
    // console.log('dentro da função')
})

promessa.then(valor => console.log(valor))
console.log('Fim')