// fetch
// const url = 'https://dog.ceo/api/breeds/image/random'

// fetch(url).then(resposta => resposta.json())
//         .then(dados => console.log(dados))

const bible = 'https://www.abibliadigital.com.br/api/verses/nvi/sl/23'
fetch(bible).then(resposta => resposta.json())
        .then(dados => dados.verses[0])
        .then(versiculo => versiculo.text)
        .then(console.log)