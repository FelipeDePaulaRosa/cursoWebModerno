function temCarro(carro){
    switch (carro) {
    case 'Hatch':            
        console.log('Compra efetuada com sucesso')
        break
    case 'Sedan' :  
    case 'Motocicletas' :
    case 'Caminhonetes' :   
        console.log('Tem certeza que não prefere esse modelo?')
        break
    default:
        console.log('Não trabalhamos com este tipo de automóvel aqui');
    }
}

temCarro('Hatch')
temCarro('Sedan')
temCarro('Motocicletas')
temCarro('Caminhonetes')
temCarro('Triciclo')

