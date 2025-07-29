import { salvar, deletar, pegaDados, persistirValores } from "./Banco.js";
import { finalizar, menu } from "./interface.js";

const itensMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " sair "];

while(1){
    const selecionado = await menu(itensMenu);
    switch(selecionado.trim().toLowerCase()){
        case "adicionar":
            break;
        case "aditar":
            break;
        case "deletar":
            break;
        case "ver todos":
            const dados = pegaDados();
            console.log(dados);
            break;
        case "persistir":
            persistirValores();
            break;
        case "sair":
            finalizar();
        default:
            console.log(`${selecionado.trim().toLowerCase()} não é válido`)
    }
}


// finalizar();

// console.log(pegaDados());

// salvar("Ana");
// salvar("Julia");
// salvar("Pedro");
// salvar("Maria");
// salvar("João");


// deletar(2);
// deletar(12);
// deletar(5);
// deletar(6);
// deletar(7);

// console.log(pegaDados());
// console.log("--------------------------------");
// salvar("Teste123", 0);
// console.log(pegaDados());

// persistirValores();""