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
.then(valor => console.log(valor))
.catch(erro => console.log(erro))