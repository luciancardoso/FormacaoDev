// Uma função async sempre vai retornar uma PROMISE!!!!

//https:bible-api.com/john 3:16
async function obterVersiculo(livro, cap, versiculo){
    const bible = `https:bible-api.com/${livro} ${cap}:${versiculo}`
    const resposta = await fetch(bible)
    const dados = await resposta.json()
    return dados.verses[0].text

        // .then(resposta => resposta.json())
        // .then(dados => dados.verses[0])
        // .then(versiculo => versiculo.text)
}

async function executar(){
    const texto = await obterVersiculo('john', 3, 16)
    console.log(texto)
}

executar()

