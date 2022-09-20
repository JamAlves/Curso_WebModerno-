function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.icludes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }

    })

}

async function gerarMegaSena(qtdeNumeros, tentativas){
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
  } catch(e) {
    if(tentativas > 100){
        throw "Que chato!!"
    } else {
        return gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
    
  }
       
}

gerarMegaSena(25)
   .then(console.log)
   .catch(console.log)