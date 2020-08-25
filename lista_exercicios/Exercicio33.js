vetorInteiro =  [1, 2, 3]
vetorString =  ['Um', 'Vetor', 'de String']
vetorDouble =  [1.25, 2.46, 3.78]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))