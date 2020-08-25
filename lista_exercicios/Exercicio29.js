let vetor = [1, 9, 5, 10, 12, 15, 19, 20, 31, 40, 50]
let In = 0
let Out = 0

function ForaOuDentro(vetor) {
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            In++
        } else {
            Out++
        }
    }
    console.log("IN: " + In)
    console.log("OUT: " + Out)
}

ForaOuDentro(vetor)