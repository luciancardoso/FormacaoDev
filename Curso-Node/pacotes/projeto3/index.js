import { salvar, deletar, pegaDados, persistirValores } from "./Banco.js";
import { finalizar, menu, le, textoAzul, textoVerde } from "./interface.js";

const itensMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " sair "];

let nome, id;

while(1){
    const selecionado = await menu(itensMenu);
    switch(selecionado.trim().toLowerCase()){
        case "adicionar":
            nome = await le("Digite o nome do Usuário: ");
            salvar(nome);
            textoVerde("Feito");
            break;
        case "aditar":
            id = await le("Id para editar: ");
            nome = await le("Nome atulizado: ");
            salvar(nome, +id);
            textoVerde("Feito");
            break;
        case "deletar":
            id = await le("Id para excluir: ");
            deletar(+id);
            textoVerde("Feito");
            break;
        case "ver todos":
            const dados = pegaDados();
            textoAzul(dados);
            break;
        case "persistir":
            persistirValores();
            textoVerde("Feito");
            break;
        case "sair":
            finalizar();
            textoVerde("Até mais.");
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