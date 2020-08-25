function descobrirDia(dia){
    switch (dia) {
    case 1:            
    case 2:
        console.log('Fim de semana');
        break
    case 3 :
    case 4 :
    case 5 :
    case 6 :
    case 7 :
        console.log('Dia útil.');        
        break;
    default:
        console.log(`Dia invalido`);
    }
}

descobrirDia(1)
descobrirDia(2)
descobrirDia(3)
descobrirDia(4)
descobrirDia(5)
descobrirDia(6)
descobrirDia(7)
descobrirDia('um')