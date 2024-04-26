import chalk from "chalk";
import server from "server";

const { get } = server.router;

server({ port: 8080},[
    get("/", (ctx) => "Hello World !!!"),
])


const azul = (texto) => console.log(chalk.blue(texto));
const aviso = (texto) => console.log(chalk.bgYellow.bold(texto));
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto));

azul("Sou um Texto");
aviso("Preciso de avisar");
erro("Abortar Missão");