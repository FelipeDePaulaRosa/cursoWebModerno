function calcularLanche(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log("Cachorro Quente: " + 3.00 * quantidade)
            break
        case 200:
            console.log("Hambúrguer Simples: " + 4.00 * quantidade)
            break
        case 300:
            console.log("Cheeseburguer: " + 5.50 * quantidade)
            break
        case 400:
            console.log("Bauru: " + 7.50 * quantidade)
            break
        case 500:
            console.log("Refrigerante: " + 3.50 * quantidade)
            break
        case 600:
            console.log("Suco: " + 2.80 * quantidade)
            break
        default:
            console.log("Produto não existente")
            break
    }
}

calcularLanche(100, 1)
calcularLanche(200, 2)
calcularLanche(300, 3)
calcularLanche(400, 4)
calcularLanche(500, 2)
calcularLanche(600, 0)
calcularLanche(700, 1)