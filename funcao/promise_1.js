const { values } = require("lodash")

/*let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Jayme','Bia', 'Heloisa', 'Leo', 'Nayane'])
})

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(letraMinuscula => console.log(letraMinuscula))
    */

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

