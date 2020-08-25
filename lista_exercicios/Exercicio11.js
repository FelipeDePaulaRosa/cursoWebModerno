function descobrirAno(ano){
    if(ano % 400 == 0){
        return true
    } else if (ano % 100 == 0 && ano == (ano % 400 == 0) - 100 || ano < 400){
        return false
    } else if(ano % 4 == 0){
        return true
    } else {
        return false
    }
}

console.log(descobrirAno(1300))
console.log(descobrirAno(2015))
console.log(descobrirAno(2020))
console.log(descobrirAno(2018))
console.log(descobrirAno(2016))
console.log(descobrirAno(400))