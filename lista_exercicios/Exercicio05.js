function formatar(valor){
    //toFixed() para determinar numero de casas decimais
    //toString().replace(,) para trocar o '.' por ','
    console.log(valor.toFixed(2).toString().replace('.',','))
}

formatar(0.10000006)
formatar(0.10000004)
formatar(0.10000005)
formatar(0.20000009)
formatar(0.20000003)
formatar(0.20000002)