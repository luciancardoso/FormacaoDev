// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

const fnMult = (a, b) => a * b

const fnSomar = (a, b) => a + b

const fnSub = (a, b) => a - b

// Esse e um modo de resolver
// const calcular = (a) => {
//     return (b) => {
//         return (fn) => {
//             return fn(a, b)
//         }
//     }
// }

// Esse e outro modo de resolver tirando os ()
// const calcular = a => {
//     return b => {
//         return fn => {
//             return fn(a, b)
//         }
//     }
// }

// OU reduzindo a função
const calcular = (a) => (b) => (fn) => fn(a, b)

console.log(calcular(10)(18)(fnMult))
console.log(calcular(10)(18)(fnSomar))
console.log(calcular(10)(18)(fnSub))