function temFruta(fruta){
    switch (fruta) {
    case 'Maçã':            
    case 'maçã':
        console.log('Não vendemos esta fruta aqui')
        break
    case 'Kiwi' :
    case 'kiwi' :
        console.log('Estamos com escassez de kiwi')
        break
    case 'Melancia' :
    case 'melancia' :   
        console.log('Aqui está, são 3 reais o quilo');        
        break;
    default:
        console.log(`Erro: não possui essa alternativa`);
    }
}

temFruta('Maçã')
temFruta('maçã')
temFruta('Kiwi')
temFruta('kiwi')
temFruta('Melancia')
temFruta('melancia')
temFruta(7)
temFruta('um')