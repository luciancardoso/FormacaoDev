import fs from "fs";

let dadosManipulaveis = _carregarValores(); // Formato {nome, id}
let ultimoIdRegistrado = dadosManipulaveis[dadosManipulaveis.length -1]?.id ?? -1;
// console.log(ultimoIdRegistrado);

let idGlobal = ultimoIdRegistrado + 1;

function _carregarValores(){
    const dadosJSON = fs.readFileSync("banco.json", "utf8");
    const dados = JSON.parse(dadosJSON);
    return dados;
}

export function persistirValores(){
    const dadosJSON = JSON.stringify(dadosManipulaveis, null, 4);
    fs.writeFileSync("banco.json", dadosJSON, "utf8");
}

export function salvar(nome, id){
    const indece = dadosManipulaveis.findIndex((obj) => obj.id === id);
    if(indece >= 0){// alteração
        dadosManipulaveis[indece].nome = nome;
    } else {
        dadosManipulaveis.push({nome, id:idGlobal});
        idGlobal++;
    }
}

export function deletar(id){
    const dadosFiltrados = dadosManipulaveis.filter((dado) =>{
        return dado.id != id;
    })
    dadosManipulaveis = dadosFiltrados;
}

export function pegaDados(){
    const dadosImprimiveis = dadosManipulaveis.map((dado) =>{
        return `${dado.nome} -> ${dado.id}`;
    })
    return dadosImprimiveis;
}