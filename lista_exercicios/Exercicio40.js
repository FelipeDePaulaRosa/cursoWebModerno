vetNotas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

function conceitoNotas(vetNotas){
    vetNotas.forEach(element => {
        if(element >=0 && element <= 4.9){
            console.log("D")
        } else if (element >= 5.0 && element <= 6.9){
            console.log("C")
        } else if (element >= 7.0 && element <= 8.9){
            console.log("B")
        } else if (element >= 9.0 && element <= 10.0){
            console.log("A")
        } else {
            console.log("Nota Invalida")
        }
    });
}

conceitoNotas(vetNotas)