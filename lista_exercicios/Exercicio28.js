let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15]
let par = 0
let impar = 0

function ParOrImpar(vetor) {
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log("Par: " + par)
    console.log("Impar: " + impar)
}

ParOrImpar(vetor)