vet1 = [1, 2, 3, 4, 5]
function multiplicacaoVetor(vet1, mult) {
    vetMult = []
    vet1.forEach(vet => {
        vetMult.push(vet * mult)
    });
    return vetMult
}

function multiplicacaoVetor2(vet1, mult) {
    if (mult > 5) {
        vetMult = []
        vet1.forEach(vet => {
            vetMult.push(vet * mult)
        });
        return vetMult
    } else {
        return 'Multiplicador menor que 5'
    }
}

console.log(multiplicacaoVetor(vet1, 2))
console.log(multiplicacaoVetor(vet1, 3))
console.log(multiplicacaoVetor(vet1, 4))
console.log(multiplicacaoVetor(vet1, 5))
console.log(multiplicacaoVetor2(vet1, 6))
console.log(multiplicacaoVetor2(vet1, 5))