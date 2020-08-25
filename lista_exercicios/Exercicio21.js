function precoPorIdade(idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(precoPorIdade(8));
console.log(precoPorIdade(15));
console.log(precoPorIdade(35));
console.log(precoPorIdade(52));
console.log(precoPorIdade(80));
