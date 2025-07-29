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

export async function le(enunciado){
    term(`${enunciado}\n\n`);
    const foiLido = await term.inputField().promise
    return foiLido;
}

export function textoVerde(texto){
    term.green(`\n\n${texto}`);
}

export function textoAzul(texto){
    term.blue(`\n\n${texto}`);
}