function triangulo(lado1,lado2,lado3){
    if(lado1 === lado2 && lado1 === lado3){
        console.log('Triangulo Equilatero')
    }else if(lado1 === lado2 && lado1 != lado3 || lado1 === lado3 && lado1!= lado2 || lado2 === lado3 && lado2 != lado1){
        console.log('Triangulo Isoceles')
    }else if(lado1 != lado2 && lado1 != lado3){
        console.log('Triangulo Escaleno')
    }
}
triangulo(10,5,10)
triangulo(10,10,5)
triangulo(5,10,10)
triangulo(10,10,10)
triangulo(5,5,5)
triangulo(3,3,3)
triangulo(3,5,10)
triangulo(10,5,3)
triangulo(5,3,10)