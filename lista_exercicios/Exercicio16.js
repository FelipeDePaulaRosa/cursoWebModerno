function Calculadora(x,operacao, y){
    switch (operacao) {     
    case '+':
        console.log(x + y)
        break
    case '-' :
        console.log(x - y)
        break
    case '*' :   
        console.log(x * y)     
        break;
    case '/' :   
        console.log(x / y)       
        break;
    default:
        console.log(`Operação Invalida`);
    }
}

Calculadora(3,'+',5)
Calculadora(3,'-',5)
Calculadora(3,'*',5)
Calculadora(3,'/',5)
Calculadora(3,'%',5)