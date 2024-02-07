function promessaComPossivelErro(chanceErro) {
        return new Promise((resolve, reject) => {
                if(Math.random() < chanceErro){
                        reject('Opa erro !!!')
                }
                else {
                        resolve('Tudo certinho !!!')
                }
        })
}

promessaComPossivelErro(0.5)
.then(valor => valor + '!!!!!!!!!!!!', erro => console.log(`#1: ${erro}`))
.then(valor => console.log(valor), erro => console(`#2: ${erro}`))