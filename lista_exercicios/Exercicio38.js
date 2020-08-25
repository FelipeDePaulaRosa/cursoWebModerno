function imparInicioFim(inicio, fim){
    if(fim < inicio){
        aux = fim
        fim = inicio
        inicio = aux
    }
    for( i = 0; i < fim; i++){
        if(i % 2 !=0){
            console.log( i + ": Numéro Impar")
        }
    }
}


imparInicioFim(0, 100)
imparInicioFim(100, 0)