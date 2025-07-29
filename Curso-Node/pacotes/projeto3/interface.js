import kit from "terminal-kit";

const term = kit.terminal;

export async function menu(itens){
    let options = {
        style: term.inverse,
        selectedStyle: term.white.bgCyan
    }

    const opcaoSelecionado = await term.singleLineMenu(itens, options).promise
    return opcaoSelecionado.selectedText;
}

export function finalizar(){
    process.exit();
}