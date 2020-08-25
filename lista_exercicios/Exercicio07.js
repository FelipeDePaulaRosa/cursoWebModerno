function Bhaskara(ax2,bx,c){
    let resultados = []
    let delta = (bx ** 2) + (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } else {
    let positivo = -bx + Math.sqrt(delta)/2 * ax2
    let negativo = -bx - Math.sqrt(delta)/2 * ax2
    resultados.push(positivo) // a função .push() adiciona elementos a Array
    resultados.push(negativo)
    return resultados
    }
}

console.log(Bhaskara(3,-5,12))
console.log(Bhaskara(1,2,10))
console.log(Bhaskara(2,4,5))
console.log(Bhaskara(0,1,1))
console.log(Bhaskara(-151,-10,1))