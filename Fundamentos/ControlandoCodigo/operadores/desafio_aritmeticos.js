// formula F-31/9 = c/5
// (f - 32) / 9 * 5

let f = 100
const conversaoFahrenheit = (f - 32) * 5 / 9
console.log(conversaoFahrenheit)

// formula (100 ºC x 9/5) + 32 = 212 ºF
// 9 * c / 5 + 32

// let c = 100
const conversaoCelsius = (conversaoFahrenheit * 9 / 5) + 32
console.log(conversaoCelsius)