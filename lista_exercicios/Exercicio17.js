function Aumento(plano, salario){
    switch (plano){
        case 'A':
            console.log(salario + (salario *  0.1))
            break
        case 'B':
            console.log(salario + (salario *= 0.15))
            break
        case 'C':
            console.log(salario + (salario *= 0.2))
            break
        default:
            console.log("Plano Invalido")
            break
    }
}

Aumento('A', 1500)
Aumento('B', 3200)
Aumento('C', 2600)
Aumento('D', 1800)