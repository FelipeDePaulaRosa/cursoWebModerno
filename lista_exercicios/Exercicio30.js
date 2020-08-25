vetor = [1, 9, 5, 10, 12, 15, 19, 20, 31, 40, 50]

function MaiorEMenor(vetor) {
    //Sort determina a posição pelo maior e menor...
    //Nesta função Arrow se o A for menor que B, ele recebe o 1
    //Então ele vai fazer o A subir e trocar de lugar com o B
    //Senão ele vai permanecer no mesmo lugar, e vai fazer o mesmo teste com os proximos vetores
    vetor.sort((a, b) => a < b ? 1 : -1)
    console.log("Maior: " + vetor[0])
    console.log("Menor: " + vetor[vetor.length-1])
}

MaiorEMenor(vetor)