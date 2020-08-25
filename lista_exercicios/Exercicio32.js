vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9, 10]

function mediaNum(vetor) {
    let sum = 0
    for (let i = 0; i < vetor.length; i++) {
        sum += vetor[i]
    }
    return sum / vetor.length    
}

console.log(mediaNum(vetor))