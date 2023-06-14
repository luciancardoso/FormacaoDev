const hora = 11
let saudacao

if (hora <= 11) {
    saudacao = 'Bom dia'
} else if(hora <= 17){
    saudacao = 'Boa tarde'
} else if(hora <= 22){
    saudacao = 'Boa noite'
} else {
    saudacao = 'Vai dormi'
}



console.log(saudacao)