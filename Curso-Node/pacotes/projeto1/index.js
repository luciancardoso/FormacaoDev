import chalk from "chalk";
import server from "server";
import { DateTime } from "luxon";

const { get } = server.router;

function imprimeHora(cidade, hora){
    console.log(chalk.bgBlue(`Em ${cidade} são ${hora}`));
}

server({ port: 8080},[
    get("/", (ctx) => "Hello World !!!"),
    get("/roma", () => {
        const h = DateTime.local({zone: "Europe/Rome"}).toFormat('HH:mm:ss yyyy LLL dd');
        imprimeHora("Roma", h);
        return h
    }),
    get("/luanda", () => {
        const h = DateTime.local({zone: "Africa/Luanda"}).toFormat('HH:mm:ss yyyy LLL dd');
        imprimeHora("Luanda", h);
        return h
    }),
    get("/seoul", () => {
        const h = DateTime.local({zone: "Asia/Seoul"}).toFormat('HH:mm:ss yyyy LLL dd');
        imprimeHora("Seoul", h);
        return h
    }),
    get("/itajai", () => {
        const h = DateTime.local({zone: "America/sao_paulo"}).toFormat('HH:mm:ss yyyy LLL dd');
        imprimeHora("Itajai", h);
        return h
    })
])


// const azul = (texto) => console.log(chalk.blue(texto));
// const aviso = (texto) => console.log(chalk.bgYellow.bold(texto));
// const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto));

// azul("Sou um Texto");
// aviso("Preciso de avisar");
// erro("Abortar Missão");