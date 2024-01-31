// Callback

setTimeout(() => {
    console.log('Chamando nosso callback....')

    setTimeout(function () {
        console.log('Chamando a função callback...')

        setTimeout(() => {
            console.log('Chamada encerrada....')
        }, 2000)

    }, 2000)


}, 2000)

// Promise

function esperarPor(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Chamando Promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
.then(esperarPor)
.then(esperarPor)
.then(esperarPor)