function externa(){
    function interna(){
        console.log('Estou na função interna!')
    }

    return interna
}

console.log(externa)
console.log(externa())

const funcaoInterna = externa()
console.log(funcaoInterna())

console.log(externa()())