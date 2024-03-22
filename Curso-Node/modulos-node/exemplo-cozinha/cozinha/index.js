const acoesCozinhar = require("./acoesCozinha")
const { alimentos } = require("./alimentos")

module.exports = {
    ...acoesCozinhar,
    alimentos
}