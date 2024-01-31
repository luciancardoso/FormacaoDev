const promessa = new Promise(function(resolve){
    resolve('Vamos jogar agora!')
    // console.log('dentro da função')
})

// .then quando a promessa for resolvida/cumprida chama essa função
promessa.then(valor => console.log(valor))
console.log('Fim')