function esperarPor(tempo){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

function executarPromise() {
    esperarPor(2000)
    .then(() => console.log('[Promise] Esperar de 2s...'))
    .then(() => esperarPor(3000))
    .then(() => console.log('[Promise] Esperar por 3s...'))
}

async function executarAsync() {
    await esperarPor(2000)
    console.log('[Async/Await] Esperar de 2s...')

    await esperarPor(3000)
    console.log('[Async/Await] Esperar por 3s...')

}

executarPromise()
executarAsync()
