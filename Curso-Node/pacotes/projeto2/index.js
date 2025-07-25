import pensador from "pensador-scrap";
import fs from "fs";

const autor = "Platao";

const {error, success} = await pensador.search({
    query: autor,
    limit: 12
});

// console.log(error);
// console.log(success);

let pensamentoPraSalvar;

try {
    const pensamentos = success.thought;
    const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
    const pensamentosSelecionados = pensamentos[indiceAleatorio].content;

    pensamentoPraSalvar = `Pensamento de ${autor} -> ${pensamentosSelecionados}\n`;

} catch (e) {
    pensamentoPraSalvar = `${autor} -> Não tem Pensamentos`;
} finally {
    fs.appendFileSync("frases.txt", pensamentoPraSalvar, "utf-8");

    const texto = fs.readFileSync("frases.txt", "utf-8");
    console.log(texto);
}

// const pensamentos = success.thought;
// const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
// const pensamentosSelecionados = pensamentos[indiceAleatorio].content;
// console.log(pensamentosSelecionados);

// const pensamentoPraSalvar = `Pensamento de ${autor} -> ${pensamentosSelecionados}\n`;
// console.log(pensamentoPraSalvar);

// fs.writeFileSync("frases.txt", pensamentoPraSalvar, "utf8")
// fs.appendFileSync("frases.txt", pensamentoPraSalvar, "utf-8");

// const texto = fs.readFileSync("frases.txt", "utf-8");
// console.log(texto);