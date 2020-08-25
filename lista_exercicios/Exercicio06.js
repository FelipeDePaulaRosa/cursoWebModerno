function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo //pode se usar o ** para substitui o Math.pow()
}

console.log(jurosSimples(100, 10/100, 10));
console.log(jurosCompostos(100, 10/100, 10));
